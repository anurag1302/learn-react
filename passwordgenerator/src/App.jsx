import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setincludeCharacters] = useState(false);
  const [password, setPassword] = useState("");

  function passwordGenerator(length, includeNumbers, includeCharacters) {
    let uniquePassword = "";
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialCharacters = "!#%&'()*+,-./:;<=>?@[]^_`{|}~$";

    if (includeNumbers) {
      alphabets += numbers;
      console.log("1", alphabets);
    }
    if (includeCharacters) {
      alphabets += specialCharacters;
      console.log("2", alphabets);
    }

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * alphabets.length + 1);
      console.log("3", index);
      uniquePassword += alphabets.charAt(index);
    }

    console.log("4", uniquePassword);
    setPassword(uniquePassword);
  }

  function copy() {
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    passwordGenerator(length, includeNumbers, includeCharacters);
  }, [length, includeNumbers, includeCharacters]);

  return (
    <>
      <div style={{ border: "2px solid white", padding: "20px" }}>
        <h1>Password Generator</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="text"
            placeholder="password"
            readOnly
            value={password}
            style={{ width: "450px", height: "30px", fontSize: "20px" }}
          />
          <button onClick={copy}>Copy</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <input
            type="range"
            min="10"
            max="50"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>({length})</label>
          <input
            type="checkbox"
            defaultChecked={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
          />
          <label>Include Numbers</label>
          <input
            type="checkbox"
            defaultChecked={includeCharacters}
            onChange={() => setincludeCharacters((prev) => !prev)}
          />
          <label>Include Characters</label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            marginTop: "20px",
          }}
        >
          <p>
            <i>
              • Use the range control & the checkboxes to generate random
              passwords
            </i>
          </p>
        </div>
      </div>
      <footer style={{ marginTop: "100px" }}>
        <a>Github Repo</a>
      </footer>
    </>
  );
}

export default App;
