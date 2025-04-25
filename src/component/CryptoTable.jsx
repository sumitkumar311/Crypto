import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../features/data/webcryptoSlice';  

const YourComponent = () => {
  const assets = useSelector((state) => state.webcrypto.assets);  
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);
  console.log(assets)

  return (
    <div className="w-full overflow-x-auto px-4 md:px-10 py-6">
      <table className="w-full min-w-[1000px] bg-white text-sm md:text-base text-black rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            <th className="p-3"></th>
            <th className="p-3 text-center">#</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-right">Price</th>
            <th className="p-3 text-right">M.Cap 24h %</th>
            <th className="p-3 text-right">24h %</th>
            <th className="p-3 text-right">7d %</th>
            <th className="p-3 text-right">Market Cap</th>
            <th className="p-3 text-right">Volume(24h)</th>
            <th className="p-3 text-right">Low 24</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {assets.map((coin, index) => (
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
                  coin.price_change_percentage_24h >= 0 ? "text-green-800" : "text-red-900"
                }`}
              >
                ${coin.current_price}
              </td>
              <td
                className={`p-3 text-right ${
                  coin.market_cap_change_percentage_24h >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {coin.market_cap_change_percentage_24h >= 0 ? "▲" : "▼"} {coin.market_cap_change_percentage_24h}%
              </td>
              <td
                className={`p-3 text-right ${
                  coin.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h >= 0 ? "▲" : "▼"} {coin.price_change_percentage_24h}%
              </td>
              <td
                className={`p-3 text-right ${
                  coin.change7d >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {coin.change7d >= 0 ? "▲" : "▼"} {coin.change7d}%
              </td>
              <td className="p-3 text-right">{coin.market_cap}</td>
              <td className="p-3 text-right flex flex-col items-end">
                {coin.total_volume}
                <span className="text-gray-500 font-medium uppercase text-xs">
                  {coin.volumeUnit}
                </span>
              </td>
              <td className="p-3 text-right">{coin.low_24h}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;
