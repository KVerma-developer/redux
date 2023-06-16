import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from "./cakes/cakeReducers";

const store = configureStore({
    reducer: {
      cake: cakeReducer
    }
  });
 



export default store;