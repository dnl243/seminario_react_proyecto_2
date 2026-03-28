import { useState } from "react";

export default function Player({
  initialName = "Please edit me!",
  symbol,
  isActive,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleEditClick = () => {
    setEditing((isEditing) => !isEditing);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
