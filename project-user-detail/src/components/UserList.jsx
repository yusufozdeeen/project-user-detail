import React,{useEffect, useState} from 'react'
import axios from "axios";

const UserList = ({setActiveUserId}) => {
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .finally(()=>setLoading(false))
    },[])

  return (
    <div>
      <h2>Users</h2>
      {
        loading&& <div>Loading...</div>
      }
      <ul className='user-list'>
      {
        users.map((user,i)=>(
            <li key={i} onClick={()=>setActiveUserId(user.id)}>{user.name}</li>
        ))
      }
        </ul>

    </div>
  )
}

export default UserList
