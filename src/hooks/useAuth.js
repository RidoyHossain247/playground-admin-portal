import jwtDecode from 'jwt-decode';
import { useStoreActions } from "easy-peasy";
import api from "../service"
import { useNavigate } from "react-router-dom"


const useAuth = () => {
    // Global Action
    const authAction = useStoreActions((action) => action.auth);

    const navigate = useNavigate()


    // Handel Login
    const handelLogin = async (values) => {
        try {
            const res = await api.post("/auth/login", values)
            const token = res.data.data;
            const user = jwtDecode(token)
            authAction.login({
                user,
                token
            });
        } catch (error) {
            console.log("error", error.response.data.message)
        }
    }

    // Handel Logout

    const handelLogout = () => {
        authAction.logout()
        navigate('/')
    }

    // Handel registration


    const HandelRegistration = async (customUrl,values) => {
        try {
            const res = await api.post(customUrl,values)
            console.log("res", res)
        } catch (error) {
            console.log('error', error.response.data.message)
        }
    }


    return {
        handelLogin,
        handelLogout,
        HandelRegistration
    }
}
export default useAuth
