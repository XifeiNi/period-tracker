import React from 'react';
import Button from '@material-ui/core/Button';

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
      <Button variant="contained" color="primary" onClick={this.handleClick}>
        Add
      </Button>
    );
  }
}

export default Add;
