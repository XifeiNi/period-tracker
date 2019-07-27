import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';

// https://www.npmjs.com/package/react-calendar
// https://reactjsexample.com/ultimate-calendar-for-your-react-app/
import Calendar from 'react-calendar' 

import './Home.css';

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
      margin: {
        margin: theme.spacing(1),
      }
    }));

    return (
      <div>
          <div className={useStyles.root}>
            <AppBar position="static" className="app-bar">
              <Toolbar>
                <Typography variant="h6" color="inherit" className={useStyles.title}>
                  Period Tracker
                </Typography>
                <IconButton edge="end" color="inherit" target="_blank"
                    href="https://github.com/XifeiNi/period-tracker">
                  <MoreIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </div>

          <Container maxWidth="xs">
            <Calendar value={[new Date(2019,7,27), new Date(2019,7,28)]}
                onChange={(value) => alert('New date is: ', value)}/>
          </Container>
          
          <div className="container-div">
          <div className="sub-container">
          <Fab size="medium" color="secondary" aria-label="add" 
               className={useStyles.margin} onClick={this.handleClick}>
            <AddIcon />
          </Fab>
          </div>
          </div>
          </div>
    );
  }
}

export default Home;
