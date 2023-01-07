import axios from 'axios';
import React, { useEffect, useState } from 'react';
const GetData=async(text,setData)=>{
    let res=await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${text}`)
    setData(res.data.items)  
  }

const Items = ({text}) => {
  
   // {full_name,owner,description,forks,stargazers_count}
    const [fata,setData]=useState([])
    //const [text,setText]=useState("all")

  
  useEffect(()=>{
    GetData(text,setData)
  },[text])
 
    return (
        <>
        {
            fata.map((items)=>{
         return (<div key={items.id}>
            <img src={items.owner.avatar_url} alt="avatar_url" />
            <h1>{items.full_name}</h1>
            <p>{items.description}</p>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <button>{items.forks}</button>
                <button>{items.stargazers_count}</button>

            </div>

            
        </div>)})}</>
    );
};

export default Items;