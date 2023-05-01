import { useStoreActions, useStoreState } from "easy-peasy";
import jwtDecode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import api, { clearAuthToken, setAuthToken } from "../service";
import useData from "./useData";


const useAuth = () => {
    // Global Action
    const authAction = useStoreActions((action) => action.auth);

    // Global states 
    const isAuth = useStoreState(state => state.auth.isAuth)
    const authToken = useStoreState(state => state.auth.token)
    const authUser = useStoreState(state => state.auth.user)


    const navigate = useNavigate()

    const { clearData } = useData()


    // Handel Login
    const handelLogin = async (values) => {
        try {
            const res = await api.post("/auth/login", values)
            const token = res.data.payload;
            const user = jwtDecode(token)
            authAction.login({
                user,
                token
            });
            setAuthToken(token)
            return true;
        } catch (error) {
            console.log('e', error)
            toast.error(error?.response?.data?.message ?? error.message)
            return false;
        }
    }

    // Handel Logout
    const handelLogout = () => {
        authAction.logout()
        clearAuthToken()
        clearData()
        navigate('/')
    }

    // Handle registration
    const handelRegistration = async (customUrl, values) => {
        try {
            const res = await api.post(customUrl, values)
            toast.success(res.data.message)
            return res
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message)
        }
    }


    return {
        isAuth,
        authUser,
        authToken,
        handelLogin,
        handelLogout,
        handelRegistration
    }
}
export default useAuth
