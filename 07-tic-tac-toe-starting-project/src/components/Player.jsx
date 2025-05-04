import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false); 

    function handleEditClick(){

        // We pass a function, it is automatically called by react 
        // it will get the current state value as an input 
        // this is because this method !not called instantly, it is scheduled
        setIsEditing(editing => !editing); 
        // setIsEditing(!isEditing); 
    }

    let playerName = <span className="player-name">{name}</span>; 

    if(isEditing){
        playerName = <input value={name}/>
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
            <button onClick={handleEditClick}>{ isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}