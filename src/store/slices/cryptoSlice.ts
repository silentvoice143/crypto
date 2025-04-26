// store/cryptoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Coin = {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number;
  chart: string;
};

type CryptoState = {
  coins: Coin[];
};

const initialState: CryptoState = {
  coins: [
    {
      id: "btc",
      logo: "./imgs/bitcoin.png",
      name: "Bitcoin",
      symbol: "BTC",
      price: 64000,
      percentChange1h: 0.5,
      percentChange24h: 2.1,
      percentChange7d: 5.2,
      marketCap: 1200000000000,
      volume24h: 30000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      chart: "./imgs/chart.png",
    },
    {
      id: "ethereum",
      logo: "./imgs/ethereum.png",
      name: "Ethereum",
      symbol: "ETH",
      price: 64000,
      percentChange1h: 0.5,
      percentChange24h: 2.1,
      percentChange7d: 5.2,
      marketCap: 1200000000000,
      volume24h: 30000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      chart: "./imgs/chart.png",
    },
    {
      id: "tether",
      logo: "./imgs/tether.png",
      name: "Tether",
      symbol: "USDT",
      price: 64000,
      percentChange1h: 0.5,
      percentChange24h: 2.1,
      percentChange7d: 5.2,
      marketCap: 1200000000000,
      volume24h: 30000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      chart: "./imgs/chart.png",
    },
    {
      id: "bnb",
      logo: "./imgs/bnb.png",
      name: "BNB",
      symbol: "BNB",
      price: 64000,
      percentChange1h: 0.5,
      percentChange24h: 2.1,
      percentChange7d: 5.2,
      marketCap: 1200000000000,
      volume24h: 30000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      chart: "./imgs/chart.png",
    },
    {
      id: "sol",
      logo: "./imgs/solana.png",
      name: "Solana",
      symbol: "SOL",
      price: 64000,
      percentChange1h: 0.5,
      percentChange24h: 2.1,
      percentChange7d: 5.2,
      marketCap: 1200000000000,
      volume24h: 30000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      chart: "./imgs/chart.png",
    },
  ],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateCoin(state, action: PayloadAction<Coin>) {
      const index = state.coins.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.coins[index] = action.payload;
      }
    },
  },
});

export const { updateCoin } = cryptoSlice.actions;
export default cryptoSlice.reducer;
