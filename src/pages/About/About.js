import React from 'react';

class About extends React.Component {
  goToHomePage = () => {
    this.props.history.push({
      pathname: "/"
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.goToHomePage}>Home</button>
        <br />
      </div>
    )
  }
}

export default About;