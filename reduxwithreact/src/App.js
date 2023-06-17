import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <CakeContainer/> */}
     <HooksCakeContainer/>
     <NewCakeContainer/>
    </div>
     </Provider>
  );
}

export default App;
