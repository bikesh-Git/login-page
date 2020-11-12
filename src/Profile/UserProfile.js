import React, { useState ,useEffect} from 'react'
import Sidebar from '../container/SideBar'
import {Card} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './UserProfile.css'

export default function UserProfile() {
    const [user, setuser] = useState([])

    useEffect(() => {
   loadUser();
    }, [])

     const  loadUser= async ()=>{
        const  rawresponse = await axios.get("http://localhost:3003/data")
        
        console.log(rawresponse)
        setuser(rawresponse.data.reverse());
    }

    const deleteUser =async id =>{
            await axios.delete(`http://localhost:3003/data/${id}`)
            loadUser()
    }
  
    return (
        <div>
            <Sidebar/>
            <h1>User Detail</h1>
            <Link to="/user/adduser" class="btn btn-primary">Add User</Link>
        
            <div className="userdata">
                {user.map((user,index)=>{
                 return(
                <Card style={{ width: '18rem' }} key={user.id} className="card" >
                    <Card.Img variant="top" src={user.avatar} />
                    <Card.Body>
                 <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                        <Card.Text>
                           {user.email}
                        </Card.Text>
                        <Card.Text>
                       {user.mobile_no}
                        </Card.Text>
                    </Card.Body>
                    <div className="userlink">
                    <Link class="btn btn-info" to={`/userview/${user.id}`}>View User</Link>&nbsp;
                     <Link to={`user/update/${user.id}`} class="btn btn-success">Update</Link>&nbsp;
                    <Link class="btn btn-danger" onClick={()=>deleteUser(user.id)} >Delete</Link>&nbsp;
                    </div>
                </Card>
                
                 )
                })}
            </div>
        </div>
    )
}
