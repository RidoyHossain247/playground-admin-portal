import  { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from "easy-peasy"
import api from "../service"

import Swal from 'sweetalert2'
const useData = (baseUrl) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

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


    const createData = async (inputData, customUrl = baseUrl) => {
        setLoading(true)
        try {
            var formData = new FormData();
            formData.append("name", inputData.name);
            formData.append("image", inputData.image);

            const { data } = await api.post(customUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const newArr = dataState[customUrl] ? dataState[customUrl].concat(data.data) : [data.data]
            dataActions.setData({
                key: customUrl,
                value: newArr
            })
            return true
        } catch (error) {
            console.log("error", error.toString())
            return false;
        } finally {
            setLoading(false)
        }
    }


    const sizeCreateData = async (inputData, customUrl = baseUrl) => {
        setLoading(true)
        try {
            const { data } = await api.post(customUrl, inputData)
            const newArr = dataState[customUrl] ? dataState[customUrl].concat(data.data) : [data.data]
            dataActions.setData({
                key: customUrl,
                value: newArr
            })
              Toast.fire({
                icon: 'success',
                title: 'Create in successfully'
              })
            return true
           
        } catch (error) {
            // console.log("error", error.toString())
            console.log( error.response.data.message)
            Toast.fire({
                icon: 'error',
                title:  error.response.data.message,
              })
            return false;
        } finally {
            setLoading(false)
        }
    }
    const getDetail = (url) => {
        // /categories
        
        url = url.split('/')
        const key = `/${url[1]}`
        const datId = `${url[2]}`
       console.log(datId)
        // const key = '/categories/20'
        // const dataId = 20

       
        const data = dataState[key]
       
        if(!data || data.length === 0) return null
        const findData = data.filter(item => item._id === datId)
        
        if(findData.length === 0) return null;
        return findData[0];
       
    }

    // Update Data
    const updateData = async (inputData, customUrl, headers = {}) => {
        setLoading(true)
        try {
            const { data } = await api.put(customUrl, inputData, {
                headers
            })

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
           
            return data;
        } catch (error) {
            console.log("error", error.toString())
        }
    }
   
    const deleteData = async (id, customUrl = baseUrl) => {
        try {
            await api.delete(`${customUrl}/${id}`)
            const newArr = dataState[customUrl].filter(item => item._id !== id)
            dataActions.setData({
                key: customUrl,
                value: newArr
            })
        } catch (error) {
            console.log("error", error.toString())
        }
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
        deleteData,
        sizeCreateData,
        getDetail,
        updateData
    }
}

export default useData
