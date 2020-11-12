import React ,{useState,useEffect} from 'react'
import Sidebar from '../container/SideBar'
import axios from 'axios' 
import {useHistory ,useParams } from 'react-router-dom'
import './UpdateUser.css'

function UpdateUser() {
    let history = useHistory()
    const {id}= useParams()
    
    const [user, setuser] = useState({first_name:"", last_name:"",email:"",avatar:"",mobile_no:""})

    const {first_name, last_name,email,avatar,mobile_no} = user
    const onChange= e =>{  
    setuser({
       ...user,[e.target.name]:e.target.value
        
    })
    console.log(e)
    }
    useEffect(() => {
 loaduser()
    }, [])

   const submitUserDetail =async e=>{
    await axios.put(`http://localhost:3003/data/${id}`, user)
    history.push("/userprofile")
    }

    const loaduser = async e =>{
        const rawreponse = await axios.get(`http://localhost:3003/data/${id}` )
      setuser(rawreponse.data)
    }
    return (
        <div>
            <Sidebar />
            <h1>Update User</h1>


            <form >
                        <input type="text" value={first_name} placeholder="First Name" name="first_name" onChange={e=> onChange(e)} />
                        <br />  <br />
                        <input type="text" value={last_name} placeholder="Last Name" name="last_name" onChange={e=> onChange(e)} />
                        <br />  <br />
                        <input type="text"  value={email} placeholder="Email ID" name="email" onChange={e=> onChange(e)} />
                        <br />  <br />
                        <input type="text" value={avatar} placeholder="Avatar URL" name="avatar" onChange={e=> onChange(e)} />
                        <br />  <br />
                        <input type="text" value={mobile_no} placeholder="Mobile Number" name="mobile_no" onChange={e=> onChange(e)} />

                        <br />  <br />
                        <input type="button" className="submit" onClick={(e) =>submitUserDetail(e)} value="Submit Detail"/>
            </form>
  

        </div>
    )
}

export default UpdateUser
