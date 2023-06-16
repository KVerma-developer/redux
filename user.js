/* This is a code that uses Redux and Axios to fetch a list of users from an API and store them in the
Redux store. It defines the initial state of the store, actions to be dispatched, and a reducer
function to update the state based on the dispatched actions. It also uses the `thunkMiddleware` to
handle asynchronous actions and `axios` to make API requests. Finally, it creates a store with the
reducer and middleware, subscribes to the store to log the state changes, and dispatches the
`fetchUsers` action to fetch the users from the API and update the store. */

const redux = require('redux');
const createStore= redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios')



const initialState={
    loading:false,
    users:[],
    error:''
    
}


const FETCH_USERS_REQUEST= 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

const fetchUserRequest= ()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}


const fetchUserSuccess=(users)=>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUserFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}


const reducers=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }

            case FETCH_USERS_SUCCESS:
                return{
                    loading:false,
                    users:action.payload,
                    error:''

                }

                case FETCH_USERS_FAILURE:
                    return{
                        loading:false,
                        users:[],
                        error:action.payload
                    }


    }

}

const fetchUsers =()=>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data.map((user)=>({id:user.id,
            name:user.name}))
            
            dispatch(fetchUserSuccess(users))

        })
        .catch(error=>{
            dispatch(fetchUserFailure(error.message))

        })

    }

}

const store=createStore(reducers,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
