import { useEffect, useState } from "react";

function CoinApp() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [usd, setUsd] = useState(0);
  const [won, setWon] = useState(0);
  const [coinPrice, setCoinPrice] = useState("");
  const [coinSymbol, setCoinSymbol] = useState("Not Selected Coin yet");
  const coinQuantity = usd / coinPrice;
  const selectChange = (event) => {
    setCoinPrice(event.target.value);
    const index = event.target.selectedIndex;
    setCoinSymbol(event.target.childNodes[index].getAttribute("symbol"));
  };
  const onChangeWON = (event) => {
    setWon(event.target.value);
    setUsd(won * 0.00754);
  };
  const onChangeUSD = won * 0.000754;
  const reset = () => {
    setUsd(0);
    setWon(0);
  };

  return (
    <div>
      <h1>코인프로젝트{loading ? "" : `코인종류:${coins.length}`}</h1>

      <h2>￦원화</h2>
      <input value={won} type='number' onChange={onChangeWON}></input>
      <button onClick={reset}>리셋</button>
      <h2>$달러</h2>
      <input value={onChangeUSD} type='number' disabled></input>
      <br />
      {loading ? (
        <strong>loading</strong>
      ) : (
        <select onChange={selectChange}>
          <option>Select coin</option>
          {coins.map((coin) => (
            <option
              key={coin.id}
              value={coin.quotes.USD.price}
              symbol={coin.symbol}
            >
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <div>
        <h2>{coinSymbol}</h2>
        <input value={coinQuantity} type='number' disabled />
      </div>
    </div>
  );
}

export default CoinApp;
