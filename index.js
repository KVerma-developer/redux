const redux = require('redux');
const createStore = redux.createStore;
//combining ruducers 
const combineRuducers = redux.combineReducers;




const  BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'



function buyCake(){

    return(
{
    type: BUY_CAKE,
    info:'First redux action'
}
)}

function buyIceCream(){

    return(
{
    type: BUY_ICECREAM,
    info:'First redux action'
}
)}

// const initialState={
//     numOfCakes:10,
//     numOfIceCreams:20
// }


//there is specific object for each intiate state

const initialCakeState={
    numOfCakes:10
    
}
const initialIceCreamState={
    
    numOfIceCreams:20
}



// const reducer =(state = initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:return{
//             ...state,
//         numOfCakes:state.numOfCakes-1
//     }
    

//         case BUY_ICECREAM:return{
//             ...state,
//         numOfIceCreams:state.numOfIceCreams-1
//     }
//     default : return state

// }
// }
const cakeReducer =(state = initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
        numOfCakes:state.numOfCakes-1
    }
    default : return state

}
}
const iceCreamReducer =(state = initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
        numOfIceCreams:state.numOfIceCreams-1
    }
    default : return state

}
}
//route Reducers
//let's combine to reducers with passing object in rootRuducer

const rootReducer = combineRuducers({

    cake:cakeReducer,
    iceCream:iceCreamReducer

})

//then pass combined reducers here
const store = createStore(rootReducer);
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()