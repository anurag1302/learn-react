// Work in Progress

import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import "./App.css";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [data, setData] = useState({});
  const [from, setFrom] = useState("FROM");
  const [to, setTo] = useState("TO");
  const selectedOptions = ["usd", "inr", "cad"];

  const APIURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`;

  useEffect(() => {
    console.log("curr", fromCurrency);
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`
    )
      .then((result) => result.json())
      .then((res) => setData(res[fromCurrency]));

    console.log("data", data);
  }, [fromCurrency]);

  const calculate = () => {
    let final = amount * 50;
    setConvertedAmount(final);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
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
          label={from}
          amount={amount}
          onInputFieldChange={(e) => setAmount(Number(e.target.value))}
          currency={fromCurrency}
          selectOptions={selectedOptions}
          disable={false}
          onSelectChange={(e) => setFromCurrency(e.target.value)}
        />
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <button onClick={swap}>Swap</button>
        </div>
        <InputField
          label={to}
          amount={convertedAmount}
          currency={toCurrency}
          selectOptions={selectedOptions}
          disable={true}
          onSelectChange={(e) => setToCurrency(e.target.value)}
        />
        <div style={{ marginTop: "20px" }}>
          <button onClick={calculate}>
            Calculate {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
