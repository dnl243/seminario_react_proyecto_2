import { useState } from "react";

const AvatarUploaderBasic = ({ initialScr, size = 100, playerName }) => {
  const [avatar, setAvatar] = useState(initialScr);

  const handleClick = () => {
    const input = document.getElementById(`${playerName.playerName + "-avatar-upload"}`);
    if (input) input.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={avatar}
        alt="Avatar al azar"
        title="Aqui va el score"
        width={size}
        height={size}
        onClick={handleClick}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          cursor: "pointer",
          border: "2px solid #ccc",
        }}
      />
      <input
        id={`${playerName.playerName + "-avatar-upload"}`}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default AvatarUploaderBasic;
