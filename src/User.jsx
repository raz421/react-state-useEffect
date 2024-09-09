import { useEffect, useState } from "react";

export default function User(){
    let [count,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data =>setUser(data))
    },[])
    let t_count={
        margin:"10px",
        border:"2px solid black",
        padding:"15px",
        borderRadius:"10px"
    }
    return (
        <h3 style={t_count}>total count:{count.length}</h3>
        
    )
}