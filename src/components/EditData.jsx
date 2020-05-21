import React, {Component} from 'react';
import 'react-router-dom'
import axios from 'axios';
import './component.css'

class EditData extends Component{
    constructor(props){
        super(props);

        this.state = {
            email : "",
            firstname : "",
            lastname : "",
            password : "",
            address : ""
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }
    render(){
        return (
          <div className="EditData">
            <h1>Edit your data</h1>
            <label>Enter your email to update data: </label><input className = "box" type="email" name="email" value={this.state.email} onChange={this.change}/><br/>
            <br/><br/>
            <label className="firstname">Firstname : </label><input type="text" name="firstname" value={this.state.firstname} onChange={this.change}/><br/>
            <label className="lastname">Lastname : </label><input type="text" name="lastname" value={this.state.lastname} onChange={this.change}/><br/>
            <label className="password">Password : </label><input type="password" name="password" value={this.state.password} onChange={this.change}/><br/>
            <label className="address">Address : </label><textarea rows="4" cols="18" name="address" value={this.state.address} onChange={this.change}/><br/>
            <button className="btn btn-success" onClick={this.submit}>Submit</button>
          </div>
        );
      }
      change(event){
          this.setState({
            [event.target.name] : event.target.value
          })
      }
      submit(){
          axios.post("http://localhost:4000/api/find/"+this.state.email,this.state)
          .then((result)=>{
              if(result.data === "Updated")
              {
                alert(result.data)
                this.props.history.push('/dashboard')            
              }
              else{
                alert(result.data)
              }
            }
          )
      }
}

export default EditData
