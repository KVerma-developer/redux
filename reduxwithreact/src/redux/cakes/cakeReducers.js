import { BUY_CAKE } from "./cakeTypes"

const initailState ={
    numOfCake:100
}


const cakeReducer=(state=initailState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCake:state.numOfCake-1
        }

        default:return state
        
    }

}

export default cakeReducer