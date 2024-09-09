export default function Friend({friend}){
    console.log(friend)
    let {name,username}=friend
    
    return(
        <div className="box">
        <h3>Name:{name} </h3>
        <p>username: {username}</p>
    </div>
    )
    

}