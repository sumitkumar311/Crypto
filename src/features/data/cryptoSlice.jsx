import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptodata: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$93,759.48",
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: "$1,861,618,902,186",
      volume24h: "$43,874,950,947",
      volumeUnit: "467.81K BTC",
      supply: "19.85M BTC",
      image:
        "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      chart: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$1,802.46",
      change1h: -1,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: "$217,581,279,327",
      volume24h: "$23,547,469,307",
      volumeUnit: "467.81K BTC",
      supply: "120.71M ETH",
      image:
        "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
      chart: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      price: "$1.46",
      change1h: -1,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: "$217,581,279,327",
      volume24h: "$23,547,469,307",
      volumeUnit: "467.81K BTC",
      supply: "145.8M USDT",
      image:
        "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
      chart: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
    },
    {
      id: 4,
      name: "XRP",
      symbol: "XRP",
      price: "$2.32",
      change1h: -1,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: "$217,581,279,327",
      volume24h: "$23,547,469,307",
      volumeUnit: "467.81K BTC",
      supply: "59.392M XRP",
      image:
        "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
      chart: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1958.svg",
    },
    {
      id: 5,
      name: "BNB",
      symbol: "BNB",
      price: "$606.46",
      change1h: -1,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: "$217,581,279,327",
      volume24h: "$23,547,469,307",
      volumeUnit: "467.81K BTC",
      supply: "140.12M BNB",
      image:
        "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
      chart: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20947.svg",
    },
    {
      id: 6,
      name: "Solana",
      symbol: "SOL",
      price: "$121.46",
      change1h: -1,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: "$217,581,279,327",
      volume24h: "$23,547,469,307",
      volumeUnit: "467.81K BTC",
      supply: "517.32M SOL",
      image:
        "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
      chart: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7326.svg",
    },
  ],
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrice: (state) => {
      state.cryptodata = state.cryptodata.map((crypto) => {
        const random = () => (Math.random() * 2 - 1).toFixed(2);

        const rawPrice = parseFloat(crypto.price.replace(/[$,]/g, ""));
        const rawVolume = parseFloat(crypto.volume24h.replace(/[$,]/g, ""));
        const rawMarketCap = parseFloat(crypto.marketCap.replace(/[$,]/g, ""));

        const newPrice = rawPrice * (1 + parseFloat(random()) / 100);
        const newVolume = rawVolume * (1 + parseFloat(random()) / 100);
        
        const newMarketCap = rawMarketCap * (1 + parseFloat(random()) / 100);
        const volumeShort =
          newVolume >= 1e9
            ? `${(newVolume / 1e9).toFixed(2)}B ${crypto.symbol}`
            : newVolume >= 1e6
            ? `${(newVolume / 1e6).toFixed(2)}M ${crypto.symbol}`
            : `${(newVolume / 1e3).toFixed(2)}K ${crypto.symbol}`;

        return {
          ...crypto,
          price: `$${newPrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`,
          change1h: random(),
          change24h: random(),
          change7d: random(),
          volume24h: `$${newVolume.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}`,
          volumeUnit: volumeShort,
          marketCap: `$${newMarketCap.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}`,
        };
      });
    },
  },
});

export const { updatePrice } = cryptoSlice.actions;
export default cryptoSlice.reducer;
