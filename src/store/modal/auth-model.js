import { action } from "easy-peasy";

const AuthModel = {
    isAuth: false,
    token: null,
    user: {},
    login: action((state, payload) => {
        state.isAuth= true;
        state.token=payload.token;
        state.user=payload.user;
    }),
    logout:action((state,payload)=>{
        state.isAuth=false;
        state.token=null;
        state.user={}
    })

}
export default AuthModel