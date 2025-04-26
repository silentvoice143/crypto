// utils/mockWebSocket.ts
import { AppDispatch } from "../store/store";
import { updateCoin } from "../store/slices/cryptoSlice";

export class MockWebSocket {
  private dispatch: AppDispatch;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  start(coins: any[]) {
    this.intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * coins.length);
      const coin = coins[randomIndex];

      const randomChange = (percent: number) => {
        const change = (Math.random() * 2 - 1) * percent; // -1% to +1%
        return change;
      };

      const updatedCoin = {
        ...coin,
        price: +(coin.price * (1 + randomChange(0.01) / 100)).toFixed(2),
        percentChange1h: +(coin.percentChange1h + randomChange(0.5)).toFixed(2),
        percentChange24h: +(coin.percentChange24h + randomChange(2)).toFixed(2),
        percentChange7d: +(coin.percentChange7d + randomChange(3)).toFixed(2),
        volume24h: Math.round(coin.volume24h * (1 + randomChange(5) / 100)),
      };

      this.dispatch(updateCoin(updatedCoin));
    }, 1000 + Math.random() * 1000); // every 1-2 seconds
  }

  stop() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
