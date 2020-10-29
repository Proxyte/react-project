import React from 'react';
import Car from '../../carRouter/Car';

class Cars extends React.Component {
  state = {
    cars: [
      { name: "Ford", year: 2018},
      { name: "Audi", year: 2019},
      { name: "Audi2", year: 2019},
    ]
  }; 

  render() {
    let carsTemplate = null

    carsTemplate = this.state.cars.map((car, index) => {
      return (
        <Car 
          key={index}
          carName={car.name} 
          year={car.year} 
          index={index}
        />
      )
    })

    return (
      <div style={{ width: "400px", margin: "auto", paddingTop: "20px"}}>
        { carsTemplate }
      </div>
    )
  }
}

export default Cars;