import React from 'react';
import Button from '@material-ui/core/Button';

// https://www.npmjs.com/package/react-calendar
// https://reactjsexample.com/ultimate-calendar-for-your-react-app/
import Calendar from 'react-calendar' 

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleChangeCurrentPage("Add");
  }

  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
      },
    }));
    return (
      <div>
          <div className={useStyles.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Photos
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <Container maxWidth="xs">
            <Calendar />
          </Container>
          

          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Home
          </Button>
          </div>
    );
  }
}

export default Home;
