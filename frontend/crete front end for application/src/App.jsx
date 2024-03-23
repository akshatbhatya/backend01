import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {

  const [user,setuser]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080")
    .then((response)=>setuser(response.data))
    .catch((err)=>{console.log(err)})
  },[])

  if(user.length===0){
    return;
  }

  return (
    <>
      <h2>{user.length}</h2>

      {user.map((user)=>{
        return <div key={user.id}>
          <h5>TITLE : {user.title}</h5>
          <h6>body : {user.body}</h6>

        </div>
      })}
    </>
  )
}

export default App
