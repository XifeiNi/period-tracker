import React from 'react';
import Button from '@material-ui/core/Button';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleChangeCurrentPage("Add");
  }

  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.handleClick}>
        Home
      </Button>
    );
  }
}

export default Home;
