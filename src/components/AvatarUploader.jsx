import { useState } from "react";

const AvatarUploader = ({ initialScr, size = 100, playerName }) => {
  const [avatar, setAvatar] = useState(initialScr);

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
      <label htmlFor={`${playerName.playerName + "-avatar-upload"}`}>
        <img
          src={avatar}
          alt="Avatar"
          width={size}
          height={size}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
            border: "2px solid #ccc",
          }}
        />
      </label>
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

export default AvatarUploader;
