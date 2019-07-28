import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Add.css'
import b1 from './ICON/bleed/1.png'
import b2 from './ICON/bleed/2.png'
import b3 from './ICON/bleed/3.png'
import b4 from './ICON/bleed/4.png'
import m1 from './ICON/mood/1.png'
import m2 from './ICON/mood/2.png'
import m3 from './ICON/mood/3.png'
import m4 from './ICON/mood/4.png'
import p1 from './ICON/pain/1.png'
import p2 from './ICON/pain/2.png'
import p3 from './ICON/pain/3.png'
import p4 from './ICON/pain/4.png'
import s1 from './ICON/sex/1.png'
import s2 from './ICON/sex/2.png'
import bt from './ICON/bleed/theme.png'
import mt from './ICON/mood/theme.png'
import pt from './ICON/pain/theme.png'
import st from './ICON/sex/theme.png'




class Add extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {"currentPage": "blood"};
  }

  nextState = (e) => {
    // console.log(e.target.id);
    let state = this.state;
    if (state["currentPage"] === "blood"){
      this.setState({currentPage: "mood"});
    }
    else if (state["currentPage"] === "mood"){
      this.setState({currentPage: "pain"});
    }
    else if (state["currentPage"] === "pain"){
      this.setState({currentPage: "sex"});
    }
    else if (state["currentPage"] === "sex"){
      let state = this.props.state;
      state["currentPage"] = "Home";
      this.props.handleChangeState(state);
    }
  }

  handleClick(e) {
    let state = this.props.state;
    state["currentPage"] = "Home";
    this.props.handleChangeState(state);
  }

  render() {
    let state = this.state;
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
    // console.log(state["currentPage"]);
    if (state["currentPage"] === "blood"){
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
          <img className="image" alt="404" src={ bt } />
        </div>
        <div className="bleed_choice">
        <img className="image" alt="404" src={ b1 } id = "b1"  onClick={this.nextState}/>
        <img className="image" alt="404" src={ b2 } id = "b2"  onClick={this.nextState}/>
        </div>
        <div className="bleed_choice">
        <img className="image" alt="404" src={ b3 } id = "b3"  onClick={this.nextState}/>
        <img className="image" alt="404" src={ b4 } id = "b4"  onClick={this.nextState}/>
        </div>
        </div>
    )}
    else if (state["currentPage"] === "mood"){
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
            <img className="image" alt="404" src={ mt } />
          </div>
          <div className="bleed_choice">
          <img className="image" alt="404" src={ m1 } id="m1"  onClick={this.nextState}/>
          <img className="image" alt="404" src={ m2 } id='m2' onClick={this.nextState}/>
          </div>
          <div className="bleed_choice">
          <img className="image" alt="404" src={ m3 } id='m3' onClick={this.nextState}/>
          <img className="image" alt="404" src={ m4 } id='m4' onClick={this.nextState}/>
          </div>
          </div>
      )}
    else if (state["currentPage"] === "pain"){
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
            <img className="image" alt="404" src={ pt } />
          </div>
          <div className="bleed_choice">
          <img className="image" alt="404" src={ p1 } id='p1' onClick={this.nextState}/>
          <img className="image" alt="404" src={ p2 } id='p2' onClick={this.nextState}/>
          </div>
          <div className="bleed_choice">
          <img className="image" alt="404" src={ p3 } id='p3'onClick={this.nextState}/>
          <img className="image" alt="404" src={ p4 } id='p4'onClick={this.nextState}/>
          </div>
          </div>
      )}
      else if (state["currentPage"] === "sex"){
        return (
          <div>
            <div className={useStyles.root}>
              <AppBar position="static" className="app-bar">
                <Toolbar>
                  <Button variant="contained" color="primary" id='x1' onClick={this.handleClick}>
                  X
                  </Button>
                  <Button variant="contained" color="primary" id='x2' onClick={this.handleClick}>
                    Done
                  </Button>
                </Toolbar>
              </AppBar>
            </div>
            <div className="head">
              <img className="image" alt="404" src={ st } />
            </div>
            <div className="bleed_choice">
            <img className="image" alt="404" src={ s1 } id='s1' onClick={this.nextState}/>
            <img className="image" alt="404" src={ s2 } id='s2' onClick={this.nextState}/>
            </div>
            </div>
        )}
  }
}
export default Add;