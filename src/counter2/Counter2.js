import React from 'react';
import { ClickedContext } from '../App'

export default props => {
  return (
    <div style={{border: "1px solid #ccc", marginBottom: 20, width: 200, margin: '0 auto 20px auto'}}>
      <h3>Counter 2</h3>
      <ClickedContext.Consumer>
        {clicked => clicked ? <p>Clicked!</p> : null}
      </ClickedContext.Consumer>
    </div>
  )
};
