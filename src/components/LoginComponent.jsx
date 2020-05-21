import React, {Component} from 'react';
import './component.css';
import axios from 'axios';

class LoginComponent extends Component {

    constructor(props){
      super(props);
      this.state = {
        email : "",
        password : ""
      }
      this.show = this.show.bind(this);
      this.change = this.change.bind(this);
    }

    render(){
      return (

        <div className="LoginComponent">
          <h1>Login</h1>
          <label className="email">Email Id : </label><input type="email" name="email" value={this.state.email} onChange={this.change}/><br/>
          <label className="password">Password : </label><input type="password" name="password" value={this.state.password} onChange={this.change}/><br/>
          <button onClick={this.show}>Login</button>
        </div>
      );
    }

    show(){
      axios.post("http://localhost:4000/api/verify",this.state).then((result)=>{
        console.log(result.data);
        if((result.data)==="Successful"){
          alert(result.data)
          this.props.history.push('/dashboard')
        }
        else{
          alert(result.data)
        }
      }


      )
    }

    change(event){
      this.setState({
        [event.target.name] : event.target.value
      })
    }

  
  }

export default LoginComponent

 