import AvatarUploader from "./AvatarUploader";
import AvatarUploaderBasic from "./AvatarUploaderBasic";

const Avatar = (playarName) => {
  const randomAvatarUrl = "https://i.pravatar.cc/150";

  return (
    <div style={{ padding: 10, textAlign: "center" }}>
      {/* <h1>Mi Avatar</h1> */}
      <AvatarUploader
        initialScr="https://i.pravatar.cc/150"
        size={100}
        playerName={playarName}
      />
      {/* <p>Haz click en la imagen para cambiarla</p> */}
    </div>
  );
};

export default Avatar;
