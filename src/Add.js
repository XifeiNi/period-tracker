import React from 'react';
import Button from '@material-ui/core/Button';
import MaterialUIPickers from './Add_date';
import './Add_date.css'

class Add extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleChangeCurrentPage("Home");
  }

  render() {
    return (
      <div className = "container">
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            X
          </Button>
          <div>
          <MaterialUIPickers variant="contained" color="primary"/>
          </div>
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Done
          </Button>
      </div>
    );
  }
}

export default Add;
