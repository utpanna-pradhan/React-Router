import React, { useEffect, useState } from 'react'
import {Link} from 'react-router'

function Github() {
    const[data,setData]= useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/utpanna-pradhan")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data)
            
        })
    })
  return (
   <div className='text-center mt-10 flex flex-col items-center justify-center text-2xl gap-2 bg-gray-100 p-5 rounded-lg w-1/2 mx-auto mb-12'>
    <h1> {data.login}</h1>
    
    <img src={data.avatar_url} alt="avatar"   />
    <p className='text-center'>{data.bio}</p>
    <h2>Followers : {data.followers}</h2>
    <h2>Following : {data.following}</h2>
    <Link to = {data.html_url} target="_blank" className='text-purple-700 underline'>Visit Profile</Link>
   </div>
  )
}

export default Github
