// import third party library
import React from 'react';
import Chip from '@material-ui/core/Chip';

// import user defined js file
import './App.css';
import Home from './Home';
import Add from './Add';
import TestUserData from './dataset/TestUserData';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleChangeState = this.handleChangeState.bind(this);
    /*
    currentPage: Home, Add,
    currentDate: new Date()
    userData: {
      "Date()":{
        "Blood": 0,
        "Pain": 0,
        ...
      }
        ...
    }
    */
    this.state = {"currentPage": "Home",
                  "currentDate": new Date(),
                  "userData": JSON.parse(JSON.stringify(TestUserData))
                 };
  }


  handleChangeState(state) {
    this.setState(state);
  }


  render() {
    let state = this.state;
    if (state["currentPage"] === "Home") {
      return (
        <Home handleChangeState={this.handleChangeState} state={state}/>
      )
    } else if (state["currentPage"] === "Add") {
      return (
        <Add handleChangeState={this.handleChangeState}  state={state}/>
      )
    } else {
      console.log(state);
      return (
        <Chip
          label="Error! See console for detail"
          color="secondary"
        />
      )
    }
  }
}

export default App;
