import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
       {/* here i add props cake and with worked with terenary operator */}
  <ItemContainer cake/>
  <ItemContainer/> 
   <CakeContainer/>
 <HooksCakeContainer/>
 <NewCakeContainer/>
      
     
     <UserContainer/>
    </div>
     </Provider>
  );
}

//   {/* here i add props cake and with worked with terenary operator */}
//   <ItemContainer cake/>
//   <ItemContainer/>
//  {/* <CakeContainer/> */}
//  <HooksCakeContainer/>
//  <NewCakeContainer/>

export default App;
