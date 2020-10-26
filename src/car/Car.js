import React from 'react';
// import Radium from 'radium';
import "../styles/Car.scss";

class Car extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log('car component willReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('car component shouldComponentUpdate', nextProps, nextState);

    return nextProps.carName.trim() !== this.props.carName.trim();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('car component componentWillUpdate', nextProps, nextState)
  }

  // static getDerivedStateFromProps(nextProps, previousState) {
  //   console.log('Car componennt getDerivedStateFromProps', nextProps, previousState);

  //   return previousState;
  // }

  componentDidUpdate() {
    console.log('car component componentDidUpdate')
  }

  // getSnapshotBeforeUpdate() {
  //   console.log('car component getSnapshotBeforeUpdate')
  // }

  componentWillUnmount() {
    console.log('car component componentWillUnmount')
  }

  render() {
    console.log('car component render');

    if(Math.random() > 0.7) {
      throw new Error('Car random failed')
    }

    const inputClasses = [
      this.props.carName !== '' ? 'successInput' : 'errorInput',
      this.props.carName.length > 4 ?  'boldInput' : null
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
        <h3>Car name: {this.props.carName}</h3>
        <h3>Year: {this.props.year}</h3>
        <input 
          type="text" 
          className={inputClasses.join(' ')} 
          value={this.props.carName} 
          onChange={this.props.onChangeName
          }/>
  
        <button onClick={this.props.onDelete}>Delete</button> 
      </div>
    )
  }

}

export default Car;