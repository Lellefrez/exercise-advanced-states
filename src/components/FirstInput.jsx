import { useState } from "react";

const FirstInput = () => {
  const [userName, setUserName] = useState("");
  const [isP, setIsP] = useState(false);
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setIsP(true);
        }}
      >
        Invia
      </button>
      {isP && <p>Saluti da {userName}</p>}
    </div>
  );
};
export default FirstInput;
