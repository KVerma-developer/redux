import React,{useState} from 'react';
import { connect} from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

///map state to prop function
const ItemContainer = (props) => {
    const[number,setNumber]=useState(1)
    
  return (
    <div>
        <p>from item container there is icecream input is not working becoz i have to setfuntion for it in redux</p>
        <h2> item - {props.item} </h2>
        <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
        
        <button onClick={()=>props.buyItem(number)}>Buy Item</button>
        <hr/>
      
    </div>
  )
}

/**
 * This is a mapStateToProps function in React-Redux that returns the number of cakes or ice creams
 * based on the ownProps passed to it.
 * @returns The `mapStateToProps` function is returning an object with a single property `item`, which
 * is assigned the value of `itemState`. The value of `itemState` is determined based on the value of
 * `ownProps.cake`. If `ownProps.cake` is truthy, then `itemState` is assigned the value of
 * `state.cake.numOfCakes`, otherwise it is
 */
//this funtion have two params state and ownProps
const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake ? state.cake.numOfCakes :
    state.iceCream.numOfIceCream

    return{
        item :itemState
     }
}

//i have to do 
const  mapDispatchToProps=(dispatch,ownProps)=>{
    //returning action creator as props
    const dispatchFunction = ownProps.cake ? (number)=>dispatch(buyCake(number)) :
    (number)=>dispatch(buyIceCream(number))

    return {
        buyItem:dispatchFunction
    }

}

 /// if you only want to dispatch funtion not subscribe to the state change to store then you can change scenarios where
 //you define map dispatch props but not map state the props in this case you have to pass null as your first arguement to connect as null


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)

/* `export default connect(null,mapDispatchToProps)(ItemContainer)` is exporting a connected component
`ItemContainer` with `mapDispatchToProps` function passed as the second argument to `connect`. This
means that the `buyItem` action creator function returned from `mapDispatchToProps` will be
available as a prop in the `ItemContainer` component, but it will not subscribe to any changes in
the Redux store state. The first argument to `connect` is `null`, which means that the
`ItemContainer` component will not receive any state from the Redux store. */
// export default connect(null,mapDispatchToProps)(ItemContainer)
