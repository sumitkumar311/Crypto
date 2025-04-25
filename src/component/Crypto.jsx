import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePrice } from "../features/data/cryptoSlice";

const CryptoTable = () => {
  const sampleData = useSelector((state) => state.crypto.cryptodata);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrice());
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="w-full overflow-x-auto px-4 md:px-10 py-6">
      <table className="w-full min-w-[1000px] bg-white text-sm md:text-base text-black rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            <th className="p-3"></th>
            <th className="p-3 text-center">#</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-right">Price</th>
            <th className="p-3 text-right">1h %</th>
            <th className="p-3 text-right">24h %</th>
            <th className="p-3 text-right">7d %</th>
            <th className="p-3 text-right">Market Cap</th>
            <th className="p-3 text-right">Volume(24h)</th>
            <th className="p-3 text-right">Circulating Supply</th>
            <th className="p-3 text-center">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sampleData.map((coin, index) => (
            <tr key={coin.id} className="hover:bg-gray-100 transition-all">
              <td className="p-3 text-center">☆</td>
              <td className="p-3 text-center">{index + 1}</td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <p className="font-semibold">{coin.name}</p>
                    <p className="text-xs text-gray-400 font-medium uppercase">
                      {coin.symbol}
                    </p>
                  </div>
                </div>
              </td>
              <td
                className={`p-2 text-right font-semibold ${
                  coin.change24h >= 0 ? "text-green-800" : "text-red-900"
                }`}
              >
                {coin.price}
              </td>
              <td
                className={`p-3 text-right ${
                  coin.change1h >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {coin.change1h >= 0 ? "▲" : "▼"} {coin.change1h}%
              </td>
              <td
                className={`p-3 text-right ${
                  coin.change24h >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {coin.change24h >= 0 ? "▲" : "▼"} {coin.change24h}%
              </td>
              <td
                className={`p-3 text-right ${
                  coin.change7d >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {coin.change7d >= 0 ? "▲" : "▼"} {coin.change7d}%
              </td>
              <td className="p-3 text-right">{coin.marketCap}</td>
              <td className="p-3 text-right flex flex-col items-end">
                {coin.volume24h}
                <span className="text-gray-500 font-medium uppercase text-xs">
                  {coin.volumeUnit}
                </span>
              </td>
              <td className="p-3 text-right">{coin.supply}</td>
              <td className="p-3 text-center">
                <img
                  src={coin.chart}
                  alt="chart"
                  className="w-24 h-8 object-cover mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
