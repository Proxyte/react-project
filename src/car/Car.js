import React from 'react';

const Car = (props) => {
  return (
    <div style={{ border: "1px solid purple", marginBottom: '10px', padding: "10px"}}>
      <h3>Car name: {props.carName}</h3>
      <h3>Year: {props.year}</h3>
      <input type="text" value={props.carName} onChange={props.onChangeName}/>
      <button onClick={props.onDelete}>Delete</button>
      {/* <button onClick={props.onChangeTitle}>Click</button> */}
    </div>
  )
}

export default Car;