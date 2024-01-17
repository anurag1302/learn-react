import { useState } from "react";
import "./App.css";

function App() {
  const [currency, setCurrency] = useState("usd");
  const APIURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  return (
    <>
      <div
        style={{
          padding: "30px",
          border: "1px solid white",
          backgroundColor: "#242424",
        }}
      >
        <h1>Currency Converter</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>From</label>
          <input
            type="text"
            placeholder="Currency"
            style={{ width: "300px", height: "20px" }}
          />
          <select>
            <option>usd</option>
            <option>inr</option>
          </select>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button>Swap</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <label>To</label>
          <input
            type="text"
            placeholder="Currency"
            style={{ width: "300px", height: "20px" }}
          />
          <select>
            <option>inr</option>
            <option>usd</option>
          </select>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button>Calculate USD to INR</button>
        </div>
      </div>
    </>
  );
}

export default App;
