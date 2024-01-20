import { useState, useEffect } from "react";

function useCurrencyDetails(fromCurrency) {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`
    )
      .then((result) => result.json())
      .then((res) => setApiData(res[fromCurrency]));
  }, [fromCurrency]);

  return apiData;
}

export default useCurrencyDetails;
