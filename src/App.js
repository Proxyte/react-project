import React, {Component} from 'react';
import './styles/App.scss';
import Car from './car/Car';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import Counter from './counter/Counter';

// Pages components
import Cars from './pages/Cars/Cars';
import About from './pages/About/About';
import CarDetail from './CarDetail/CarDetail';
// 

// Router libraries
import { Route, NavLink, Switch } from "react-router-dom";
// 

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
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
    return (
      <div className="App">
        {/* <h1>{this.state.pageTitle}</h1> */}

        <div>
          <nav className="AppRouteTab">
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color: 'purple' }}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: '/cars' }}>Cars</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <hr />

        <Route path="/" exact render={() => {
          return (
            <React.Fragment>
              <h1>{this.props.title}</h1>
              
              <ClickedContext.Provider value={this.state.clicked}>
                <Counter />
              </ClickedContext.Provider>

              <hr />

              <button onClick={() => this.setState({clicked: true})}>Change clicked</button>
              <hr />
            </React.Fragment>

          )
        }} />

        <Switch >
          <Route path="/about" exact component={About} />
          <Route path="/cars" exact component={Cars} />
          <Route path="/cars/:carName" exact component={CarDetail} />
          <Route render={() => <h2 style={{ color: 'red', textAlgin: 'center'}}>404 not found</h2>}/>
        </Switch>
      </div>
    );
  }

}

export default App;
