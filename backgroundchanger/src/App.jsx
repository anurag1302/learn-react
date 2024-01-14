import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const colors = ["red", "blue", "green", "black", "teal"];

  const buttons = colors.map((color) => {
    //You must write return explicitly if your => is followed by a { curly brace!
    return (
      <button
        onClick={() => setColor(color)}
        className="px-4 py-3 rounded-3xl shadow-xl"
        style={{ backgroundColor: color, color: "white" }}
      >
        {color}
      </button>
    );
  });
  return (
    <>
      <div style={{ backgroundColor: color, width: "100%", height: "100vh" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>
          BG Color Changer
        </h1>
        <div
          style={{
            marginTop: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>{buttons}</div>
        </div>
      </div>
    </>
  );
}

export default App;
