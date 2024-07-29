import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cherry, Lemon, Seven, Clover } from "lucide-react";

const symbols = [Cherry, Lemon, Seven, Clover];

const Index = () => {
  const [balance, setBalance] = useState(1000);
  const [reels, setReels] = useState([0, 0, 0]);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (balance < 10) return;
    setBalance(balance - 10);
    setSpinning(true);
    const newReels = reels.map(() => Math.floor(Math.random() * symbols.length));
    setReels(newReels);
    setTimeout(() => {
      setSpinning(false);
      if (newReels.every((val, i, arr) => val === arr[0])) {
        setBalance(balance + 100);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 to-yellow-500 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Lucky Streak Slots</h1>
        <p className="text-xl">Spin to Win!</p>
      </header>

      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8 shadow-2xl">
        <div className="bg-yellow-400 rounded-lg p-4 mb-8 text-center text-gray-800">
          <p className="text-3xl font-bold">Balance: ${balance}</p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {reels.map((symbolIndex, index) => {
            const Symbol = symbols[symbolIndex];
            return (
              <div key={index} className="bg-white w-24 h-24 rounded-lg flex items-center justify-center">
                <Symbol className={`h-16 w-16 ${spinning ? 'animate-spin' : ''}`} />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center">
          <Button
            onClick={spin}
            disabled={spinning || balance < 10}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl"
          >
            SPIN
          </Button>
          <div className="w-16 h-48 bg-gray-300 rounded-full relative">
            <div className={`w-8 h-8 bg-red-600 rounded-full absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${spinning ? 'top-full -translate-y-full' : 'top-0'}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
