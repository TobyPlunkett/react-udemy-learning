import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false); 

    function onClick(){
        setIsEditing(!isEditing); 
    }

    return (
        <li>
            <span className="player">
                
                {
                    isEditing ? (
                        <span className="player-name">{name}</span>
                    ) : (
                        <input></input>
                    )    
                }
                
                
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onClick}>edit</button>
        </li>
    );
}