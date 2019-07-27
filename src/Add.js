import React from 'react';
import Button from '@material-ui/core/Button';
import MaterialUIPickers from './Add_date';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';
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
              <IconButton edge="end" color="inherit">
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
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
      </div>
    );
  }
}

export default Add;
