import React,{Component} from 'react';
import LoginComponent from './components/LoginComponent.jsx'
import RegisterComponent from './components/RegisterComponent.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import DashBoard from './components/DashBoard.jsx'
import EditData from './components/EditData.jsx'
import DeleteUser from './components/DeleteUser.jsx'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route path = "/" exact component={RegisterComponent}/>
              <Route path = "/login" component={LoginComponent}/>
              <Route path = "/dashboard" component={DashBoard}/>
              <Route path = "/editdata" component={EditData}/>
              <Route path = "/delete" component={DeleteUser}/>
              <Route component={ErrorComponent}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

function ErrorComponent(){
  return(
    <div>An error occurred. </div>
  )
}

export default App;
