import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false); 

    function handleEditClick(){
        setIsEditing(!isEditing); 
    }

    let playerName = <span className="player-name">{name}</span>; 

    if(isEditing){
        playerName = <input/>
    }

    return (
        <li>
            <span className="player">
                
                {playerName}

                {/* alternate way, using ternary operater */}
                {/* {
                    isEditing ? (
                        <input></input>
                    ) : (
                        <span className="player-name">{name}</span>
                    )    
                } */}
                
                
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>edit</button>
        </li>
    );
}