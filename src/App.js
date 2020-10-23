import React, {Component} from 'react';
import './App.css';
import Car from './car/Car';

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 208},
      { name: "Audi", year: 2019},
      { name: "Audi2", year: 2019},
    ],
    paragraphStyle: {
      'backgroundColor': 'yellow',
      'color': "purple",
      'fontSize': '20px'
    },
    pageTitle: "React Application",
    showCars: false
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, carIndex) => {
    const car = this.state.cars[carIndex];
    const cars = [...this.state.cars];

    car.name = name;
    cars[carIndex] = car;
    this.setState({
      cars
    })
  } 

  onDelete = (index) => {
    let cars = [...this.state.cars];
    cars.splice(index, 1);

    this.setState({
      cars
    })
  }

  render() {
    let carsTemplate = null

    if(this.state.showCars) {
      carsTemplate = this.state.cars.map((car, index) => {
        return (
          <Car 
            key={index}
            carName={car.name} 
            year={car.year} 
            onDelete = {this.onDelete.bind(this, index)}
            onChangeName={(event) => this.onChangeName(event.target.value, index)} 
            />
        )
      })
    }

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <br />

        <button onClick={this.toggleCarsHandler}>Change title</button>

        <br />

        { carsTemplate }

      </div>
    );
  }

}

export default App;
