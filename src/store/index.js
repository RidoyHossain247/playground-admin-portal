import {createStore,persist} from "easy-peasy"
import DataModel from "./modal/data-model";

const store = createStore({
    data:persist(DataModel),
    
  });
  export default store