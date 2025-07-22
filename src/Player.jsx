import {useState} from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick () {
        setIsEditing((editing) => !editing );
        if (isEditing) {
            onChangeName(symbol, playerName);
        } 
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaprtion = 'Edit';

    //if is editing is true, that is if the player name fiels is being edited(BELOW)
    if (isEditing) {
        editablePlayerName =( 
            <input type="text" required value={playerName} onChange={handleChange}/>
        );
            // let btnCaprtion = 'Save';

    }
    return (
        <li className={isActive ?'active' : undefined}>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          {/* If is editing is TRUE then SAVE if not, the button shows EDIT*/}
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> 
        </li>    
    );
}