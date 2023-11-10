import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { PAGE_SIZE } from "../const";
import api from "../service";


const useData = (baseUrl = '/') => {
    const [loading, setLoading] = useState(false)
    const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZE)
    const dataState = useStoreState(state => state.data.data)
    const dataActions = useStoreActions(action => action.data)

    // Clear Data
    const clearData = () => {
        dataActions.clearData()
    }

    // Fetch Data
    const fetchData = async (customUrl) => {
        try {
            const response = await api.get(customUrl)
            dataActions.setData({
                key: customUrl.split('?')[0],
                value: response.data.payload
            })
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message)
        }
    }

    // Create Data
    const createData = async (inputData, customUrl = null, headers = {}) => {
        setLoading(true)
        if (!customUrl) {
            customUrl = baseUrl.split('?')[0]
        }
        try {
            const { data } = await api.post(customUrl, inputData, {
                headers
            })
            let stateObj = {}
            if (dataState[customUrl]) {
                const arr = dataState[customUrl].data
                arr.unshift(data.payload)
                stateObj = {
                    ...dataState[customUrl],
                    data: arr
                }
            } else {
                stateObj = {
                    data: [data.payload],
                    totalDocument: 1,
                    totalPages: 1,
                    currentPage: 1
                }
            }
            dataActions.setData({
                key: customUrl,
                value: stateObj
            })
            toast.success(data.message)
            return true
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message)
            return false;
        } finally {
            setLoading(false)
        }
    }

    // Update Data
    const updateData = async (inputData, customUrl = null, headers = {}) => {
        setLoading(true)
        if (!customUrl) {
            customUrl = baseUrl.split('?')[0]
        }
        try {
            const { data } = await api.put(customUrl, inputData, {
                headers
            })
            const dataId = data.payload._id
            const oldData = dataState[baseUrl]
            const updatedData = oldData.data.map(item => {
                if (item._id === dataId) {
                    item = data.payload
                }
                return item;
            })
            oldData.data = updatedData
            dataActions.setData({
                key: baseUrl,
                value: {
                    ...oldData,
                    data: updatedData
                }
            })
            toast.success(data.message)
            return data;
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message)
            return null;
        }
    }

    // Delete Data
    const deleteData = async (id, customUrl = null) => {
        if (!customUrl) {
            customUrl = baseUrl.split('?')[0]
        }
        try {
            const { data } = await api.delete(`${customUrl}/${id}`)
            const oldData = dataState[customUrl]
            const filterArr = oldData.data.filter(item => item._id !== id)
            swal({
                title: data.message,
                icon: "success",
            });
            dataActions.setData({
                key: customUrl,
                value: {
                    ...oldData,
                    data: filterArr
                },
            })
        } catch (error) {
            console.log("error", error.toString())
            toast.error(error?.response?.data?.message ?? error.message)
        }
    }

    // Get Data Details
    const getDetail = (url) => {
        try {
            url = url.split('/')
            const key = `/${url[1]}`
            const datId = url[2]
            const data = dataState[key].data
            if (!data || data.length === 0) return null
            const findData = data.find(item => item._id === datId)
            if (!findData) return null;
            return findData;
        } catch (error) {
            return null;
        }
    }

    const handleChangePage = (_e, newPage) => {
        fetchData(`${baseUrl.split('?')[0]}?page=${newPage + 1}&limit=${rowsPerPage}`)
    }

    const handleChangeRowsPerPage = (event) => {
        const pageSize = parseInt(event.target.value, 10)
        setRowsPerPage(pageSize);
        fetchData(`${baseUrl.split('?')[0]}?page=1&limit=${pageSize}`)
    };

    useEffect(() => {
        if (baseUrl.length > 1 && !dataState[baseUrl]) {
            fetchData(baseUrl)
        }
    }, []);

    return {
        loading,
        rowsPerPage,
        data: dataState[baseUrl.split('?')[0]],
        fetchData,
        createData,
        updateData,
        deleteData,
        getDetail,
        clearData,
        handleChangePage,
        handleChangeRowsPerPage
    }
}

export default useData
