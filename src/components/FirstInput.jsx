import { useState } from "react";

const FirstInput = () => {
  const [userName, setUserName] = useState("");
  const [isP, setIsP] = useState(false);
  const [newName, setNewName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setIsP(true);
          setUserName(newName);
          setNewName("");
        }}
      >
        Invia
      </button>
      {isP && <p>Saluti da {userName}</p>}
    </div>
  );
};
export default FirstInput;
