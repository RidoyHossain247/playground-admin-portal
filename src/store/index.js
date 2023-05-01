import { createStore, persist } from "easy-peasy";
import AuthModel from "./modal/auth-model";
import DataModel from "./modal/data-model";

const store = createStore({
  auth: persist(AuthModel),
  data: persist(DataModel),

});
export default store