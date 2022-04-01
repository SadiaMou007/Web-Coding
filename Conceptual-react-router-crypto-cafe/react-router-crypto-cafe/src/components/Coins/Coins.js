import React, { useEffect, useState } from "react";
import Coin from "../Coin/Coin";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      <h2 className="text-xl font-semibold text-center py-5 text-gray-700">
        Total Coins: {coins.length}
      </h2>
      <div className="grid grid-cols-4 gap-8 m-4 mb-16">
        {coins.map((coin) => (
          <Coin coin={coin} key={coin.id}></Coin>
        ))}
      </div>
    </div>
  );
};

export default Coins;
