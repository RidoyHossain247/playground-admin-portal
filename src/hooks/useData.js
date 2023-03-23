import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from "easy-peasy"
import api from "../service"
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
        deleteData
    }
}

export default useData
