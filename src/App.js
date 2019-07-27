// import third party library
import React from 'react';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

// import user defined js file
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
    } else if (state["currentPage"] === "Add") {
      return (
        <Add handleChangeCurrentPage={this.handleChangeCurrentPage}/>
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
