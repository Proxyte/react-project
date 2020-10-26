import React, {Component} from 'react';
import appClasses from './styles/App.module.scss';
import Car from './car/Car';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import Counter from './counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    console.log('app constructor')
    super(props);

    this.state = {
      clicked: false,
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
    }
  }

  // state = {
  //   cars: [
  //     { name: "Ford", year: 208},
  //     { name: "Audi", year: 2019},
  //     { name: "Audi2", year: 2019},
  //   ],
  //   paragraphStyle: {
  //     'backgroundColor': 'yellow',
  //     'color': "purple",
  //     'fontSize': '20px'
  //   },
  //   pageTitle: "React Application",
  //   showCars: false
  // };

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

  componentWillMount() {
    console.log('App component will mount');
  }

  componentDidMount() {
    console.log('App component did mount');
  }

  render() {
    console.log('App component render');
    let carsTemplate = null

    if(this.state.showCars) {
      carsTemplate = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car 
              key={index}
              carName={car.name} 
              year={car.year} 
              index={index}
              onDelete = {this.onDelete.bind(this, index)}
              onChangeName={(event) => this.onChangeName(event.target.value, index)} 
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div className={appClasses.App}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <hr />
        <br />

        <button onClick={this.toggleCarsHandler}>Change title</button>

        <button onClick={() => this.setState({clicked: true})}>Change clicked</button>

        <br />
        
        <div style={{ width: "400px", margin: "auto", paddingTop: "20px"}}>
          { carsTemplate }
        </div>

      </div>
    );
  }

}

export default App;
