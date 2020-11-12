import React, { useState } from 'react'
import Sidebar from '../container/SideBar'
import "./AddUser.css"
import axios from 'axios' 
import {useHistory } from 'react-router-dom'
function AddUser() {
    let history = useHistory()
    const [user, setuser] = useState({first_name:"", last_name:"",email:"",avatar:"",mobile_no:""})

    const {first_name, last_name,email,avatar,mobile_no} = user
    const onChange= e =>{  
    setuser({
       ...user,[e.target.name]:e.target.value
        
    })
    console.log(e)
    }
   const submitUserDetail =async e=>{
    const rawreponse = await axios.post("http://localhost:3003/data" , user)
    history.push("/user/adduser")
    console.log(rawreponse)
    if(rawreponse.request.status ==  201){
        alert(rawreponse.request.statusText)
    }
    }
    return (
        <div>
            <Sidebar />
            <h1>AdD user</h1>


            <form >
                        <input type="text" placeholder="First Name" name="first_name" onChange={e=> onChange(e)} />
                        <br />  <br />
                        <input type="text" placeholder="Last Name" name="last_name" onChange={e=> onChange(e)} />
                        <br />  <br />
                        <input type="text" placeholder="Email ID" name="email" onChange={e=> onChange(e)} />
                        <br />  <br />
                        <input type="text" placeholder="Mobile Number" name="mobile_no" onChange={e=> onChange(e)} />
                        <br />  <br />
                        <input type="text" placeholder="Avatar URL" name="avatar" onChange={e=> onChange(e)} />

                        <br />  <br />
                        <input type="button"  onClick={(e) =>submitUserDetail(e)} value="submit detail"/>
            </form>
  

        </div>
    )
}

export default AddUser
