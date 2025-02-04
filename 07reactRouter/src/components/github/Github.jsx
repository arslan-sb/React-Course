import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/arslan-sb')
    //     .then(response=>response.json())
    //     .then(response=>{
    //         setData(response)
    //     })
    // },[])

  return (
    <div className='text-center m-4 text-white bg-gray-600 '>Github followers: {data.followers} 
    <img src={data.avatar_url} alt="" srcset=""  width={300} />
    </div>
  )
}

export default Github;

export const githubInfoLoader= async ()=>{
    const response = await fetch('https://api.github.com/users/arslan-sb')

    return response.json();
}