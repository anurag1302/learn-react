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

  const APIURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`;

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`
    )
      .then((result) => result.json())
      .then((res) => setData(res[fromCurrency]));
  }, [fromCurrency]);

  const options = Object.keys(data);

  console.log("options", options);

  const calculate = () => {
    let final = amount * data[toCurrency];
    setConvertedAmount(final.toFixed(2));
  };

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <>
      <div
        style={{
          padding: "30px",
          margin: "20px",
          backgroundImage: "linear-gradient(#DAE2F8,#D6A4A4)",
          width: "100%",
          borderRadius: "25px",
        }}
      >
        <h1>Currency Converter</h1>
        <InputField
          label={from}
          amount={amount}
          onInputFieldChange={(e) => setAmount(Number(e.target.value))}
          selectedOption={fromCurrency}
          selectOptions={options}
          disable={false}
          onSelectChange={(e) => setFromCurrency(e.target.value)}
        />
        <div style={{ marginTop: "30px", marginBottom: "20px" }}>
          <button onClick={swap}>SWAP</button>
        </div>
        <InputField
          label={to}
          amount={convertedAmount}
          selectedOption={toCurrency}
          selectOptions={options}
          disable={true}
          onSelectChange={(e) => setToCurrency(e.target.value)}
        />
        <div style={{ marginTop: "50px" }}>
          <button onClick={calculate}>
            Calculate {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>
        </div>
        <footer style={{ marginTop: "20px" }}>
          <a
            style={{ color: "black" }}
            href="https://github.com/anurag1302/learn-react/tree/main/currencyconverter"
            target="_blank"
          >
            Github
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
