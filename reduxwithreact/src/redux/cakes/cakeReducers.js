import { BUY_CAKE } from "./cakeTypes"

const initialState ={
    numOfCake:100
}


const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCake:state.numOfCake-1
        }

        default : return state
        
    }

}

export default cakeReducer