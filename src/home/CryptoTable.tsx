import React, { useEffect } from "react";
import DropDownIcon from "../assets/svgs/DropDownIcon";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { MockWebSocket } from "../utils/mockWebSocket";

const cryptoData = [
  {
    id: 1,
    logo: "./imgs/bitcoin.png",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$64,000",
    change1h: 0.5,
    change24h: -1.2,
    change7d: 3.8,
    marketCap: "$1.2T",
    volume24h: "$35B",
    circulatingSupply: "19M BTC",
    maxSupply: "21M BTC",
    chart: "./imgs/chart.png",
  },
  {
    id: 2,
    logo: "./imgs/ethereum.png",
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,100",
    change1h: -0.2,
    change24h: 2.1,
    change7d: 5.5,
    marketCap: "$370B",
    volume24h: "$18B",
    circulatingSupply: "120M ETH",
    maxSupply: "-",
    chart: "./imgs/chart.png",
  },
  {
    id: 3,
    logo: "./imgs/tether.png",
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    change1h: 0.0,
    change24h: 0.0,
    change7d: 0.1,
    marketCap: "$100B",
    volume24h: "$80B",
    circulatingSupply: "100B USDT",
    maxSupply: "-",
    chart: "./imgs/chart.png",
  },
  {
    id: 4,
    logo: "./imgs/bnb.png",
    name: "BNB",
    symbol: "BNB",
    price: "$550",
    change1h: 0.8,
    change24h: -0.4,
    change7d: 1.2,
    marketCap: "$90B",
    volume24h: "$1.5B",
    circulatingSupply: "153M BNB",
    maxSupply: "200M BNB",
    chart: "./imgs/chart.png",
  },
  {
    id: 5,
    logo: "./imgs/solana.png",
    name: "Solana",
    symbol: "SOL",
    price: "$140",
    change1h: -1.5,
    change24h: -3.2,
    change7d: -2.0,
    marketCap: "$60B",
    volume24h: "$2B",
    circulatingSupply: "430M SOL",
    maxSupply: "-",
    chart: "./imgs/chart.png",
  },
];

const CryptoTable = () => {
  const coins = useAppSelector((state) => state.crypto.coins);
  console.log(coins, "---coins");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = new MockWebSocket(dispatch);
    socket.start(coins);

    return () => {
      socket.stop();
    };
  }, [dispatch, coins]);
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Coins Analysis</h1>
      <div className="overflow-x-auto border-[1px] border-green-500 rounded-lg">
        <table className="w-full bg-white rounded-lg shadow">
          <thead className="bg-linear-to-r from-green-500 to-green-600">
            <tr>
              {[
                "#",
                "Logo",
                "Name",
                "Symbol",
                "Price",
                "1h %",
                "24h %",
                "7d %",
                "Market Cap",
                "24h Volume",
                "Circulating Supply",
                "Max Supply",
                "7D Chart",
              ].map((header) => (
                <th
                  key={header}
                  className="p-2 text-left text-sm font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, idx) => (
              <tr
                key={coin.id}
                className="border-b border-b-gray-300 hover:bg-gray-100 text-sm"
              >
                <td className="p-2 w-[3%]">{idx}</td>
                <td className="p-2 w-[5%]">
                  <img src={coin.logo} alt={coin.symbol} className="w-6 h-6" />
                </td>
                <td className="p-2 w-[10%]">{coin.name}</td>
                <td className="p-2 w-[6%]">{coin.symbol}</td>
                <td className="p-2 w-[8%]">{coin.price}</td>

                <td
                  className={`p-2 w-[8%] relative ${
                    coin.percentChange1h >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <div className="h-full flex gap-2">
                    <span
                      className={`${
                        coin.percentChange1h >= 0 ? "rotate-180" : ""
                      }`}
                    >
                      <DropDownIcon
                        color={
                          coin.percentChange1h >= 0 ? "#00a63e" : "#e7000b"
                        }
                      />
                    </span>
                    <span>{coin.percentChange1h}%</span>
                  </div>
                </td>

                <td
                  className={`p-2 w-[8%] relative ${
                    coin.percentChange24h >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <div className="h-full flex gap-2">
                    <span
                      className={`${
                        coin.percentChange24h >= 0 ? "rotate-180" : ""
                      }`}
                    >
                      <DropDownIcon
                        color={
                          coin.percentChange24h >= 0 ? "#00a63e" : "#e7000b"
                        }
                      />
                    </span>
                    <span>{coin.percentChange24h}%</span>
                  </div>
                </td>

                <td
                  className={`p-2 w-[8%] relative ${
                    coin.percentChange7d >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <div className="h-full flex gap-2">
                    <span
                      className={`${
                        coin.percentChange7d >= 0 ? "rotate-180" : ""
                      }`}
                    >
                      <DropDownIcon
                        color={
                          coin.percentChange7d >= 0 ? "#00a63e" : "#e7000b"
                        }
                      />
                    </span>
                    <span>{coin.percentChange7d}%</span>
                  </div>
                </td>

                <td className="p-2 w-[12%]">{coin.marketCap}</td>
                <td className="p-2 w-[10%]">{coin.volume24h}</td>
                <td className="p-2 w-[10%]">{coin.circulatingSupply}</td>
                <td className="p-2 w-[10%]">{coin.maxSupply}</td>
                <td className="p-2 w-[12%]">
                  <img
                    src={coin.chart}
                    alt="7D Chart"
                    className="w-24 h-8 object-contain mix-blend-multiply"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
