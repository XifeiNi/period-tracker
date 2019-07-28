import React from 'react';
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
    this.handleClickDay = this.handleClickDay.bind(this);
    this.handleRenderCalendar = this.handleRenderCalendar.bind(this);
  }

  handleClick(e) {
    let state = this.props.state;
    state["currentPage"] = "Add";
    this.props.handleChangeState(state);
  }

  handleClickDay(date) {
    let state = this.props.state;
    state["currentDate"] = date;
    this.props.handleChangeState(state);
  }

  handleRenderCalendar(value) {
    /*className
      blood-0
      blood-1
      blood-2
      blood-3
      blood-4
      predict-0
      predict-1
    */
    const view = value["view"];
    const date = value["date"].toString();
    const userData = this.props.state["userData"];
    const startDate = this.props.state["startDate"];
    const totaolDuration = this.props.state["totaolDuration"];
    const periodDuration = this.props.state["periodDuration"];
    const msPerDay = 60*60*24*1000;
    if (view !== "month") {
      // not in month view
      return null;
    } else if (!(date in userData)) {
      // no data, render class predict-n
      const fromStartDateMs = Date.parse(date) - Date.parse(startDate);
      const fromStartDateDay = fromStartDateMs / msPerDay;
      const fromStartDate = fromStartDateDay % totaolDuration;
      if (fromStartDate <= 0) {
        return null;
      } else if (fromStartDate < periodDuration) {
        return "predict-1";
      } else {
        return "predict-0";
      }
    } else {
      // has data, render class blood-n
      return "blood-" + userData[date]["Blood"];
    }
  }

  render() {
    const state = this.props.state;
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
          {/* App Bar */}
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
          {/* Container */}
          <Container maxWidth="xs">
            <Calendar value={state["currentDate"]}
                  onClickDay={this.handleClickDay}
                  tileClassName={this.handleRenderCalendar}/>
          </Container>
          {/* Add Button */}
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
