import React from 'react';
import { connect} from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

///map state to prop function
const ItemContainer = (props) => {
  return (
    <div>
        <h2> item - {props.item} </h2>
        <button onClick={props.buyItem}>Buy Item</button>
      
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

const  mapDispatchToProps=(dispatch,ownProps)=>{
    //returning action creator as props
    const dispatchFunction = ownProps.cake ? ()=>dispatch(buyCake()) :
    ()=>dispatch(buyIceCream())

    return {
        buyItem:dispatchFunction
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
