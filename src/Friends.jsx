
import { useEffect, useState } from "react"
import Friend from "./Friend"
export default function(){
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriends(data))
    }, [])
    const teamStyle = {
        border : '2px solid tomato',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }
    return(
        <div style={teamStyle}>
            <h4>Friends : {friends.length}</h4>
            {
                friends.map(friend => <Friend></Friend>)
            }

        </div>
    )
}