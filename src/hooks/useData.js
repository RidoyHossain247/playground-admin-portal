import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import api from "../service";
// import axios from 'axios'


const useData = (baseUrl = '/') => {
    const [loading, setLoading] = useState(false)
    const dataState = useStoreState(state => state.data.data)
    const dataActions = useStoreActions(action => action.data)

    const clearData = () => {
        dataActions.clearData()
    }

    const fetchData = async (customUrl) => {
        try {
            const response = await api.get(customUrl)
            dataActions.setData({
                key: customUrl,
                value: response.data.payload
            })
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message)
        }
    }

    const createData = async (inputData, customUrl = baseUrl, headers = {}) => {
        setLoading(true)
        try {
            const { data } = await api.post(customUrl, inputData, {
                headers
            })

            let stateObj = {}
            if (dataState[customUrl]) {
                const arr = dataState[customUrl].data
                arr.unshift(data.payload)
                console.log('s', dataState[customUrl])
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
    const updateData = async (inputData, customUrl, headers = {}) => {
        setLoading(true)
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

        }
    }

    const deleteData = async (id, customUrl = baseUrl) => {
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

    const getDetail = (url) => {
        // /categories

        url = url.split('/')
        const key = `/${url[1]}`
        const datId = url[2]

        // const key = '/categories/20'
        // const dataId = 20

        const data = dataState[key].data
        if (!data || data.length === 0) return null
        const findData = data?.filter(item => item._id === datId)
        if (findData.length === 0) return null;
        return findData[0];
    }

    useEffect(() => {
        if (!dataState[baseUrl]) {
            fetchData(baseUrl)
        }
    }, []);

    return {
        loading,
        data: dataState[baseUrl],
        fetchData,
        createData,
        updateData,
        deleteData,
        getDetail,
        clearData
    }
}

export default useData
