import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from "./cakes/cakeReducers";

const store = configureStore({
    reducer: {
      cake: cakeReducer
    }
  });
// store.subscribe(()=>{console.log(store.getState())})
// store.dispatch(buyCakes())



export default store;