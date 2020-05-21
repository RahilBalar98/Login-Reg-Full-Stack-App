import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './component.css';
import axios from 'axios';

class RegisterComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      firstname : "",
      lastname : "",
      email : "",
      password : "",
      address : ""
    }
    this.change= this.change.bind(this)
    this.save= this.save.bind(this)
  }
    render(){
      return (
        <div className="RegisterComponent">
          <h1>Registration</h1>
          <label className="firstname">Firstname : </label><input type="text" name="firstname" value={this.state.firstname} onChange={this.change}/><br/>
          <label className="lastname">Lastname : </label><input type="text" name="lastname" value={this.state.lastname} onChange={this.change}/><br/>
          <label className="email">Email Id : </label><input className="email"type="email" name="email" value={this.state.email} onChange={this.change}/><br/>
          <label className="password">Password : </label><input type="password" name="password" value={this.state.password} onChange={this.change}/><br/>
          <label className="address">Address : </label><textarea rows="4" cols="18" name="address" value={this.state.address} onChange={this.change}/><br/>
          
          <button onClick={this.save}>Register</button>

          <h4>If existing user click <Link to="/login">here</Link></h4>
        </div>
      );
    }

    save(){
      axios.post("http://localhost:4000/api/Users", this.state)
      .then((result)=>{
        if(result.data === "Added")
        {
          alert(result.data)
          this.props.history.push('/login')
        }
        else{
          alert(result.data)
        }
      })
    }

    change(event){
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }

  export default RegisterComponent