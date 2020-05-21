import React, {Component} from 'react';
import 'react-router-dom'
import axios from 'axios';
import './component.css'

class DashBoard extends Component{

    constructor(props){
        super(props)
        this.state = {
            email : "",
            alldata : []
        }
        this.showall = this.showall.bind(this)
        this.editdata = this.editdata.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.deleteAll = this.deleteAll.bind(this)
    }
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <button onClick={this.showall}>List of all Users</button>
                <button onClick={this.editdata}>Edit Data Entry</button>
                <button onClick={this.deleteUser}>Delete User</button>
                <button onClick={this.deleteAll}>Delete All</button>
                    <table className="center">
                        <tbody>
                            {
                                this.state.alldata.map((numList,i)=>(
                                    <tr key ={i}>
                                    {
                                        Object.values(numList).map((num,j)=>
                                        <td key={j}>{num}</td>
                                        )
                                    }
                                    </tr>
                                ))
                            }    
                        </tbody>
                    </table>
                <br/>
                    <div id = "display"></div>
            </div>
        )
    }

    showall(){
        axios.get("http://localhost:4000/api/Users")
        .then(response=>{
            this.setState({
                alldata : Object.values(response.data)
            })
        })
    }

    editdata(){
        this.props.history.push('/editdata')
    }

    deleteUser(){
        this.props.history.push("/delete")
    }

    deleteAll(){
        axios.get("http://localhost:4000/api/delete/users")
        .then((result)=>{
            if(result.data=="Deleted")
            {
                alert(result.data)
            }
            else{
                alert(result.data)
            }
        })
    }
}



export default DashBoard