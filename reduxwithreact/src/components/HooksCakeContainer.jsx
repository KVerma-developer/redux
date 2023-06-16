/**
 * This is a React functional component that uses the useSelector and useDispatch hooks from the
 * react-redux library to display the number of cakes and dispatch a buyCake action when a button is
 * clicked.
 * @returns The component `HooksCakeContainer` is being returned, which contains a heading, a display
 * of the number of cakes using `useSelector`, and a button to dispatch the `buyCake` action using
 * `useDispatch`.
 */
import React from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';
import { buyIceCream } from '../redux';

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const numOfIceCream=useSelector(state=> state.iceCream.numOfIceCream);
    console.log(numOfCakes)
    console.log(numOfIceCream)
    const dispatch =useDispatch();

    // const handleBuyCake=()=>{
    //     dispatch(buyCake());
    // };
    const handleBuyIceCream=()=>{
        dispatch(buyIceCream());
    }
    
  return (
    <div>

        <h1>with useSelector and useDispatch hooks</h1>
        <h2>Stock of cakes - {numOfCakes}</h2>
        {/* <button onClick={handleBuyCake}>Buy cake</button> */}

        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button> {/*///added function direct */}

        <h2>Stock of IceCream - {numOfIceCream} </h2>
        <button onClick={handleBuyIceCream}>Buy IceCream</button>
            
        
      
    </div>
  )
}

export default HooksCakeContainer
