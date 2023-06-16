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


