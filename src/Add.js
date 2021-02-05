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
import b1_click from './ICON/bleed/1_click.png'
import b2_click from './ICON/bleed/2_click.png'
import b3_click from './ICON/bleed/3_click.png'
import b4_click from './ICON/bleed/4_click.png'
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
import EmptyUserData from './dataset/EmptyUserData';

class Add extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.state = {"currentPage": "blood",
        "userData": JSON.parse(JSON.stringify(EmptyUserData))};
        }


  handleOnSave() {
    // save change and go home
    let appState = this.props.state;
    let thisState = this.state;
    const currentDate = appState["currentDate"];
    appState["userData"][currentDate] = thisState["userData"];
    appState["currentPage"] = "Home";
    this.props.handleChangeState(appState);
  }

  onChangePictureBlood1 = () => {

  }
  nextState = () => {
    let state = this.state;
    if (state["currentPage"] === "blood"){
      this.setState({currentPage: "mood"});
    }
  }

  handleOnCancel() {
    // discard change and go home
    let appState = this.props.state;
    appState["currentPage"] = "Home";
    this.props.handleChangeState(appState);
  }

  handleClick(e) {
    const id = e.target.id;
    let appState = this.props.state;
    let thisState = this.state;
    const currentDate = appState["currentDate"];
    if (id.search(/b/) === 0) {
      // console.log("Blood")
      thisState["userData"]["Blood"] = parseInt(id.substring(1,2));
      thisState["currentPage"] = "mood";
      this.setState(thisState);
    }
    else if (id.search(/m/) === 0) {
      // console.log("Mood")
      thisState["userData"]["Mood"] = parseInt(id.substring(1,2));
      thisState["currentPage"] = "pain";
      this.setState(thisState);
    }
    else if (id.search(/p/) === 0) {
      // console.log("Pain")
      thisState["userData"]["Pain"] = parseInt(id.substring(1,2));
      thisState["currentPage"] = "sex";
      this.setState(thisState);
    }
    else if (id.search(/s/) === 0) {
      // console.log("Sex")
      thisState["userData"]["Sex"] = parseInt(id.substring(1,2));
      appState["userData"][currentDate] = thisState["userData"];
    }
    else {
      console.log(e);
    }
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
              <Button variant="contained" color="primary" onClick={this.handleOnCancel}>
              X
              </Button>
              <Button variant="contained" color="primary" onClick={this.handleOnSave}>
                Done
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="head">
          <img className="image" alt="404" src={ bt } />
        </div>
        <div className="bleed_choice">
        <img className="image" alt="404" src={ b1 } id = "b1"  onClick={this.handleClick}/>
        <img className="image" alt="404" src={ b2 } id = "b2"  onClick={this.handleClick}/>
        </div>
        <div className="bleed_choice">
        <img className="image" alt="404" src={ b3 } id = "b3"  onClick={this.handleClick}/>
        <img className="image" alt="404" src={ b4 } id = "b4"  onClick={this.handleClick}/>
        </div>
        </div>
    )}
    else if (state["currentPage"] === "mood"){
      return (
        <div>
          <div className={useStyles.root}>
            <AppBar position="static" className="app-bar">
              <Toolbar>
                <Button variant="contained" color="primary" onClick={this.handleOnCancel}>
                X
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleOnSave}>
                  Done
                </Button>
              </Toolbar>
            </AppBar>
          </div>
          <div className="head">
            <img className="image" alt="404" src={ mt } />
          </div>
          <div className="bleed_choice">
          <img className="image" alt="404" src={ m1 } id="m1"  onClick={this.handleClick}/>
          <img className="image" alt="404" src={ m2 } id='m2' onClick={this.handleClick}/>
          </div>
          <div className="bleed_choice">
          <img className="image" alt="404" src={ m3 } id='m3' onClick={this.handleClick}/>
          <img className="image" alt="404" src={ m4 } id='m4' onClick={this.handleClick}/>
          </div>
          </div>
      )}
    else if (state["currentPage"] === "pain"){
      return (
        <div>
          <div className={useStyles.root}>
            <AppBar position="static" className="app-bar">
              <Toolbar>
                <Button variant="contained" color="primary" onClick={this.handleOnCancel}>
                X
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleOnSave}>
                  Done
                </Button>
              </Toolbar>
            </AppBar>
          </div>
          <div className="head">
            <img className="image" alt="404" src={ pt } />
          </div>
          <div className="bleed_choice">
          <img id="blood1"className="image" onmouseover={this.onChangePictureBlood1} alt="404" src={ p1 } onClick={this.nextState}/>
          <img className="image" alt="404" src={ p2 } onClick={this.nextState}/>
          </div>
          <div className="bleed_choice">
          <img className="image" alt="404" src={ p3 } id='p3'onClick={this.handleClick}/>
          <img className="image" alt="404" src={ p4 } id='p4'onClick={this.handleClick}/>
          </div>
          </div>
      )}
      else if (state["currentPage"] === "sex"){
        return (
          <div>
            <div className={useStyles.root}>
              <AppBar position="static" className="app-bar">
                <Toolbar>
                  <Button variant="contained" color="primary" onClick={this.handleOnCancel}>
                  X
                  </Button>
                  <Button variant="contained" color="primary" onClick={this.handleOnSave}>
                    Done
                  </Button>
                </Toolbar>
              </AppBar>
            </div>
            <div className="head">
              <img className="image" alt="404" src={ st } />
            </div>
            <div className="bleed_choice">
            <img className="image" alt="404" src={ s1 } id='s1' onClick={this.handleClick}/>
            <img className="image" alt="404" src={ s2 } id='s2' onClick={this.handleClick}/>
            </div>
            </div>
        )}
  }
}
export default Add;
