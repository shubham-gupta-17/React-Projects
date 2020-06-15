import React from "react";
import {Navigation} from "./Components/Navigation";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';  //this is a router 
import {AddTrip} from "./Components/trip/AddTrip";
import {TripList} from "./Components/trip/TripList"
// function App() {
 
//    return <div className="App">
//       HELLO WORLD!
//     </div>;
// }
export class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      allTrips:[

      {
        place:"Delhi",
        date:"2020-06-06",
        type:"Club",
      },

      {
        place:"Mumbai",
        date:"2020-01-08",
        type:"trek",
      },

      ],
    };
    this.addTrip = this.addTrip.bind(this);
  }

/*
 this addtrip is a function which takes newTrip as input and appends in alltrips now we are passing this.addTrip
 to AddTrip.js which means we are passing newTrip to it and that file will return newTrip which this function 
 will take as input and appends it in current state
*/
  addTrip(newTrip) {                   
    this.setState((prevState) => {
      return {
        allTrips: [...prevState.allTrips, newTrip],
      };
    });
  }

  render()
  {
    return (
      <Router>
      <div className="route-container">     {/*to route all components*/}
      <Navigation/>
     <Switch>
            <Route
              path="/list"
              render={(props) => (
                <TripList {...props} trips={this.state.allTrips} />
              )}
            />
            <Route
              path="/add"
              render={(props) => (
                <AddTrip {...props} AddNewTrip={this.addTrip} />
              )}
            />
          </Switch>
      </div>
      </Router>
      );
  }

}
export default App;


