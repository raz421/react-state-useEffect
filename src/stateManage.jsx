import { useState } from "react";

export default function HandleState(){
let [count,setcount]=useState(0);
let Addcount=()=>{
let newcount=count+1;
setcount(newcount)
}
let Reducecount=()=>{
    if(count>0){
        let newcount=count-1;
        setcount(newcount)
    }
   
}
console.log(count)
return(
    <div style={{
        border:"2px solid blueviolet"
    }}>
        <h2>Counter:{count}</h2>;
        <button className="bg-color" onClick={Addcount} >Add button</button>
        <button className="bg-color" onClick={Reducecount}>Reduce button</button>
    </div>
    
)
}