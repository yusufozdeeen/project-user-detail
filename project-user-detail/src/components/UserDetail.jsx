import React, { useEffect, useState } from 'react'
import axios from "axios";

const UserDetail = ({activeUserId}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
        .then((res)=>setUser(res.data))
        .finally(()=>setLoading(false));
    },[activeUserId])

  return (
    <div>
      <h2>Detail</h2>

      {
        loading && <div> Loading...</div>
      }
      {
        !loading && JSON.stringify(user,null,2)
      }
    </div>
  )
}

export default UserDetail
