import React, { useEffect, useState } from 'react'
import Sidebar from '../container/SideBar'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './UserView.css'

function UserView() {
    let history = useHistory()
    const { id } = useParams()

    const [user, setuser] = useState({ first_name: "", last_name: "", email: "", avatar: "",mobile_no :""})

    const { first_name, last_name, email, avatar ,mobile_no} = user
    const onChange = e => {
        setuser({
            ...user, [e.target.name]: e.target.value

        })
        console.log(e)
    }
    useEffect(() => {
        loaduser()
    }, [])

    const loaduser = async e => {
        const rawreponse = await axios.get(`http://localhost:3003/data/${id}`)
        setuser(rawreponse.data)
    }
    return (
        <div>
            <Sidebar />
            <h1>User Profile</h1>

            
            <Card style={{ width: '18rem' }}  className="card" >
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
                    {user.mobile_no}
                </Card>

                



        </div>
    )
}

export default UserView
