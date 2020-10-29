import React from 'react';
import PropTypes from 'prop-types';
import withClass from '../hoc/withClass';
import { withRouter } from 'react-router-dom';  

const Car = props => {
  return (
    <div onClick={() => props.history.push('/cars/' + props.carName.toLowerCase())}>
      <h3>Car name: {props.carName}</h3>
      <h3>Year: {props.year}</h3>
    </div>
      
  )
};

Car.propTypes = {
  carName: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
};

export default withRouter(withClass(Car, 'car'));