import React from 'react';


export default class CarDetail extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center'}}>
        <h1>{ this.props.match.params.carName} </h1>
      </div>
    )
  }
}