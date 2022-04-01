import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CoinDetail = () => {
  const { coinId } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  console.log(detail);

  return (
    <div className="gap-2 m-8 min-h-screen  grid grid-cols-2">
      <div className="bg-gray-100 border-2 text-xl p-4 ">
        <p> Id: {detail?.id}</p>
        <p> Name: {detail?.name}</p>
        <p> Description: {detail?.description?.en?.slice(0, 100)}</p>
      </div>
      <div className="bg-white">
        <img src={detail?.image?.thumb} className="h-64 w-64"></img>
      </div>
    </div>
  );
};

export default CoinDetail;
