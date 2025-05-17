import { useState } from "react";

export default function Player({name, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false); 
    const [playerName, setPlayerName] = useState(name); 

    function handleEditClick(){

        // We pass a function, it is automatically called by react 
        // it will get the current state value as an input 
        // this is because this method !not called instantly, it is scheduled
        // setIsEditing(!isEditing); 
        setIsEditing(editing => !editing); 
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>; 

    if(isEditing){
        editablePlayerName = <input value={playerName} onChange={handleChange}/>
    }

    return (
        //adds active class to this player component if isActive is true
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                
                {editablePlayerName}

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