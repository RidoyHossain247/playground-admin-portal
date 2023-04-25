import{ useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from "easy-peasy"
import api from "../service"
import swal from 'sweetalert';


// import axios from 'axios'


const useData = (baseUrl) => {
    const [loading, setLoading] = useState(false)
    const dataState = useStoreState(state => state.data.data)
    const dataActions = useStoreActions(action => action.data)
    
    const fetchData = async (customUrl) => {
        try {
            const response = await api.get(customUrl)
            dataActions.setData({
                key: customUrl,
                value: response.data.data
            })
        } catch (error) {
            console.log("error", error.toString())
        }
    }
    
    const createData = async (inputData, customUrl = baseUrl, headers = {}) => {
        setLoading(true)
        try {   
            const { data } = await api.post(customUrl, inputData, {
                headers
            })
            
            const newArr = dataState[customUrl] ? dataState[customUrl].concat(data.data) : [data.data]
            dataActions.setData({
                key: customUrl,
                value: newArr
            })
            swal({
                title: data.message,
                icon: "success",
            });
            return true
        } catch (error) {
            console.log("error", error.response.data.message)
            swal({
                title: error.response?error.response.data.message:error.toString(),
                icon: "warning",
            });
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
            console.log('update response', data)
            
            const findData = dataState[baseUrl]
            const dataId = data.data._id
            const updatedData = findData.map(item => {
                if(item._id === dataId){
                    item = data.data
                }
                return item;
            })
            dataActions.setData({
                key: baseUrl,
                value: updatedData
            })
            swal({
                title: data.message,
                icon: "success",
            });
            return data;
        } catch (error) {
            console.log("error", error.response)
            swal({
                title: error.response?error.response.data.message:error.toString(),
                icon: "error",
            });
        }
    }
    
    const deleteData = async (id, customUrl = baseUrl) => {
        console.log("url", `${customUrl} / ${id}`)
        try {
          const {data} =  await api.delete(`${customUrl}/${id}`)
            console.log('log 01: ',dataState[customUrl].result)
            const newArr = dataState[customUrl].result.filter(item => item._id !== id)
            console.log('log 02: ', newArr)
            swal({
                title: data.message,
                icon: "success",
            });
            dataActions.setData({
                key: customUrl,
                value: {
                    ...dataState[customUrl],
                    result: newArr
                },
            })
        } catch (error) {
            console.log("error", error.toString())
            swal({
                title: error.response?error.response.data.message:error.toString(),
                icon: "error",
            });
        }
    }
    
    const getDetail = (url) => {
        // /categories
        
        url = url.split('/')
        const key = `/${url[1]}`
        const datId = url[2]
        
        // const key = '/categories/20'
        // const dataId = 20
        
        
        const data = dataState[key]
        if(!data || data.length === 0) return null
        const findData = data?.filter(item => item._id === datId)
        if(findData.length === 0) return null;
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
        getDetail
    }
}

export default useData
