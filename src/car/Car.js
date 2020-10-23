import React from 'react';
import Radium from 'radium';
import "./Car.scss";

const Car = props => {
  const inputClasses = [
    props.carName !== '' ? 'successInput' : 'errorInput',
    props.carName.length > 4 ?  'boldInput' : null
  ];

  const style = {
    border: "1px solid #ccc",
    boxShadow: "0 4px 5px 0 rgba(0,0,0,.14)",
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: "0 4px 15px 0 rgba(0,0,0, .25)",
      cursor: 'pointer'
    }
  }

  return (
    <div className="car" style= {style}>
      <h3>Car name: {props.carName}</h3>
      <h3>Year: {props.year}</h3>
      <input 
        type="text" 
        className={inputClasses.join(' ')} 
        value={props.carName} 
        onChange={props.onChangeName
        }/>

      <button onClick={props.onDelete}>Delete</button> 
      {/* <button onClick={props.onChangeTitle}>Click</button> */}
    </div>
  )
}

export default Radium(Car);