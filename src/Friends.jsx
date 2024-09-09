import "./Friend.css"
import Friend from "./Friend";
import { useEffect, useState } from "react";
export default function Friends(){
    let [friends,setCount ]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>resp.json())
        .then(data =>setCount(data))
    },[])
    console.log(friends)    
        return (
           
            <div>
                <h3 className="box"> Friends count: {friends.length} </h3>
                
                {
                    
                    friends.map(friend=><Friend friend={friend}></Friend>)
                }
            </div>
        )
}