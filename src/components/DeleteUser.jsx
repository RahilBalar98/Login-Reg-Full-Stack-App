import React, {Component} from 'react';
import 'react-router-dom'
import axios from 'axios';
import './component.css'

class DeleteUser extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            email : ""
        }
        this.change=this.change.bind(this)
        this.delete=this.delete.bind(this)
    }
    render(){
        return(
            <div>
                <label>
                    Enter your email to delete your account
                </label>
                <input type="email" name="email" value={this.state.email} onChange={this.change}/><br/>
                <button onClick={this.delete}>Delete</button>
            </div>
        )
    }

    change(event){
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }

    delete(){
        axios.post("http://localhost:4000/api/delete/"+this.state.email)
        .then((result)=>{
            if(result.data=="Deleted")
            {
                alert(result.data)
                this.props.history.push("/dashboard")
            }
            else{
                alert(result.data)
            }
        })
    }
}

export default DeleteUser