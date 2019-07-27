import React from 'react';
import Button from '@material-ui/core/Button';
import MaterialUIPickers from './Add_date';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Add_date.css'
import testImg from './pikachu.png'
import './Add.css'
import b1 from './ICON/bleed/1.png'
import b2 from './ICON/bleed/2.png'
import b3 from './ICON/bleed/3.png'
import b4 from './ICON/bleed/4.png'
import EmptyUserData from './dataset/EmptyUserData';


class Add extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let state = this.props.state;
    state["currentPage"] = "Home";
    this.props.handleChangeState(state);
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
              <Button variant="contained" color="primary" onClick={this.handleClick}>
              X
              </Button>
              <Button variant="contained" color="primary" onClick={this.handleClick}>
                Done
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="head">
          <img className="image" alt="404" src={ testImg } />
        </div>
        <div className="bleed_choice">
        <img className="image" alt="404" src={ b1 } />
        <img className="image" alt="404" src={ b2 } />
        </div>
        <div className="bleed_choice">
        <img className="image" alt="404" src={ b3 } />
        <img className="image" alt="404" src={ b4 } />
        </div>
        </div>
    );
  }
}

export default Add;
