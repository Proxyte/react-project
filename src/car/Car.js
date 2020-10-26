import React from 'react';
import "../styles/Car.scss";
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';

class Car extends React.Component {
  componentDidMount() {
    if(this.props.index === 1) {
      this.inputRef.current.focus();
    }
  }

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    console.log('car component render');

    const inputClasses = [
      this.props.carName !== '' ? 'successInput' : 'errorInput',
      this.props.carName && this.props.carName.length > 4 ?  'boldInput' : null
    ];
    
    return (
      <React.Fragment>
        <h3>Car name: {this.props.carName}</h3>
        <h3>Year: {this.props.year}</h3>
        <input 
          type="text" 
          ref={this.inputRef }
          index={this.props.index}
          className={inputClasses.join(' ')} 
          value={this.props.carName} 
          onChange={this.props.onChangeName
          }/>
  
        <button onClick={this.props.onDelete}>Delete</button> 
      </React.Fragment>
    )
  }
}

Car.propTypes = {
  carName: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
};

export default withClass(Car, 'car');