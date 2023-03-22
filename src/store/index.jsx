import { createStore, persist } from 'easy-peasy';
import AuthModel from './model/auth-model';

const Store = createStore({
    auth: persist(AuthModel),

})
export default Store;