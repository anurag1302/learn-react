import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import "./App.css";

function App() {
  const [currency, setCurrency] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [data, setData] = useState([]);
  const APIURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  useEffect(() => {
    console.log("curr", currency);
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((result) => result.json())
      .then((res) => setData(res[currency]));

    console.log("data", data);
  }, [currency]);

  const calculate = () => {
    let final = amount * 50;
    setConvertedAmount(final);
    setCurrency("inr");
  };

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
        <InputField
          label="From"
          amount={amount}
          onInputFieldChange={(e) => setAmount(Number(e.target.value))}
          currency={currency}
        />
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
            type="number"
            placeholder="Currency"
            style={{ width: "300px", height: "20px" }}
            value={convertedAmount}
            readOnly
          />
          <select>
            <option>inr</option>
            <option>usd</option>
          </select>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={calculate}>Calculate USD to INR</button>
        </div>
      </div>
    </>
  );
}

export default App;
