

import React, { useEffect, useState } from 'react'
import "./update.css"; 
import { Link,useNavigate ,useParams} from 'react-router';
import axios from"axios";
import toast from 'react-hot-toast';

const Update = () => {

      const users={
        name:"",
        email:"",
        address:"",
      };

const [Uerr,setUserr]= useState(users);
const navigate=useNavigate();
const {id}=useParams();

const inputHandler= (e)=>{
  const {name,value} =e.target
 setUserr({...Uerr, [name]: value});
  // console.log(name,value);
}

useEffect(()=>{
    axios.get(`http://localhost:7000/api/users/${id}`)
    .then((response)=>{
        setUserr(response.data)
    })
    .catch((err)=>{
        console.log(err);
    });
},[id])


const Submitform= async(e)=>{
  e.preventDefault();
 await axios.put(`http://localhost:7000/api/update/user/${id}`, Uerr)
  .then((response)=>{
    toast.success(response.data,{position:"top-right"})
    navigate("/");
  })
  .catch((err)=>{
    console.log(err);
  })
}


  return (
    <div className='adduser'>
      <Link to="/" type="button" className="btn btn-secondary">Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={Submitform} >
          <div className='inputGroup'>
             <label htmlFor="name">Name:</label>
             <input type='text' id='name'
             value={Uerr.name}
             onChange={inputHandler} name='name' autoComplete='off'
             placeholder='Enter your Name'/>
          </div>
           <div className='inputGroup'>
             <label htmlFor="email">E-mail:</label>
             <input type='email' id='email'
             value={Uerr.email}
             onChange={inputHandler}  name='email' autoComplete='off'
             placeholder='Enter your E-mail'/>
             </div>
           <div className='inputGroup'>
             <label htmlFor="address">Address:</label>
             <input type='text' id='address'
             value={Uerr.address}
             onChange={inputHandler}  name='address' autoComplete='off'
             placeholder='Enter your Address'/>
             </div>
           <div className='inputGroup'>
              <button type="submit" className="btn btn-primary">Submit </button>
             </div>

        </form>



    </div>
  )
}




export default Update
