// import third party library
import React from 'react';
import Button from '@material-ui/core/Button';

// import user defined js file
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Add from './Add';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleChangeCurrentPage = this.handleChangeCurrentPage.bind(this);
    this.state = {"currentPage": "Home"};

  }


  handleChangeCurrentPage(currentPage) {
    let state = this.state;
    state["currentPage"] = currentPage;
    this.setState(state);
  }


  render() {
    let state = this.state;
    if (state["currentPage"] === "Home") {
      return (
        <Home handleChangeCurrentPage={this.handleChangeCurrentPage}/>
      )
    } else {
      return (
        <Add handleChangeCurrentPage={this.handleChangeCurrentPage}/>
      )
    }
  }
}

export default App;
