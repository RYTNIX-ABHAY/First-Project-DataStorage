import React, { useEffect, useState } from 'react'

import axios from"axios";
import './user.css'; 
import { Link } from 'react-router';
import toast from 'react-hot-toast';
const User = () => {
  // fetch data
const [users, setusers]=useState([]);
 useEffect(()=>{
    const fetchdata= async()=>{
      try {
       const response= await axios.get("http://localhost:7000/api/users")
       setusers(response.data)

      } catch (error) {
        console.log("Error in Fetch",error);
      }
    };
    fetchdata()
  },[]);

  const DeleteUser =async(userID)=>{
  await axios.delete(`http://localhost:7000/api/delete/user/${userID}`)
  .then((response)=>{
     setusers((prevUser)=>prevUser.filter((user)=>user._id!=userID))
      toast.success(response.data,{position:'top-right'})
  })
  // toast.success(response.data,{position:'top-right'})
  .catch((err)=>{
    console.log(err);
  })
  
  }



  return (
   <div className="userTable">
    <Link to="/add" type="button" className ="btn btn-primary">Add User <i className="fa-duotone fa-solid fa-user-plus"></i></Link>
        <table className='table table-borderes'>
          <thead>
            <tr>
            <th scope='col'>S.no</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Address</th>
            <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index)=>{
              return(
            <tr key={user._id || index}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td className='Actions'>
              <Link to={`/update/`+user._id} type="button" className="btn btn-info"> <i className="fa-solid fa-pen-to-square"></i></Link>
                 | 
                <button onClick={()=>DeleteUser(user._id)} type="button" className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                 
              </td>
            </tr>
              )
            })}
          </tbody>
        </table>
   </div>
  )
}

export default User;
