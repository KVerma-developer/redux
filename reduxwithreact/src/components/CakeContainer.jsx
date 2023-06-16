/**
 * This is a React component that displays the number of cakes and a button to buy a cake, and it is
 * connected to the Redux store using mapStateToProps and mapDispatchToProps functions.
 * @returns The CakeContainer component is being returned, which is connected to the Redux store using
 * the connect function from the react-redux library. The mapStateToProps function maps the state
 * properties to the props of the component, and the mapDispatchToProps function maps the dispatch
 * actions to the props of the component. The component displays the number of cakes and a button to
 * buy a cake, which triggers the buyCake action when clicked.
 */
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakess}</h2>
      <button onClick={props.buyCake}>Buy a Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    numOfCakess: state.cake.numOfCakes,
    
  }
  
};


const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);


