const redux = require('redux');
const createStore = redux.createStore;
//combining ruducers 
const combineRuducers = redux.combineReducers;

const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();




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

/* This code is creating a Redux store using the `createStore` function from the `redux` library. It is
passing in a combined reducer function `rootReducer` that combines two separate reducers for
handling actions related to buying cakes and buying ice cream. */
//then pass combined reducers here

const store = createStore(rootReducer,applyMiddleware(logger));
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()