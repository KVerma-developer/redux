
import React from 'react';
import {connect} from 'react-redux';
import { buyCake } from '../redux';

 

const CakeContainer = (props) => {

  return (
    <div>
        <h2>Numbur of cake - {props.numOfCakes}</h2> 
        <button onClick={props.buyCake}>Buy a Cake</button>
      
    </div>
  )
}

const mapStateToProps=state =>{
    return{
        numOfCakes: state.numOfCakes,
    }
    
}


const mapDispatchToProps= dispatch =>{
    return{
        buyCake:()=>{dispatch(buyCake())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    ) (CakeContainer)

