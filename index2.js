const redux = require('redux');
const createStore = redux.createStore;

// Action type
const DONATE_MONEY = 'DONATE_MONEY';

// Action creator
function donateMoney() {
  return {
    type: DONATE_MONEY,
    info: 'first redux action'
  };
}

// Initial state
const initialCapitalState = {
  capitalAmount: 100
};

// Fixed donation amount
const fixedDonateAmt = 10;

// Reducer function
const reducer = (state = initialCapitalState, action) => {
  switch (action.type) {
    case DONATE_MONEY:
      return {
        ...state,
        capitalAmount: state.capitalAmount + fixedDonateAmt
      };
    default:
      return state;
  }
};

//method
// Create  the Redux store 
const store = createStore(reducer);

// Logging initial state
console.log('Initial state:', store.getState());

// Subscribe to store changes and log updated state
const unsubscribe = store.subscribe(() =>
  console.log('Updated capital:', store.getState())
);

// Dispatching (amit) actions
store.dispatch(donateMoney());
store.dispatch(donateMoney());
store.dispatch(donateMoney());

// Unsubscribe from store changes
unsubscribe();


