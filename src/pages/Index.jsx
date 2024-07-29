import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, CreditCard } from "lucide-react";

const games = [
  { name: "Slots", icon: <Coins className="h-6 w-6" /> },
  { name: "Blackjack", icon: <CreditCard className="h-6 w-6" /> },
  { name: "Roulette", icon: <Coins className="h-6 w-6" /> },
  { name: "Poker", icon: <CreditCard className="h-6 w-6" /> },
];

const Index = () => {
  const [balance, setBalance] = useState(1000);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Lucky Streak Casino</h1>
        <p className="text-xl">Where Fortune Favors the Bold</p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 rounded-lg p-4 mb-8 text-center">
          <p className="text-2xl">Your Balance: ${balance}</p>
          <Button onClick={() => setBalance(balance + 100)} className="mt-2">Add $100</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game) => (
            <Card key={game.name} className="bg-white/5 border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {game.name}
                  {game.icon}
                </CardTitle>
                <CardDescription className="text-gray-300">Try your luck!</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt={game.name} className="mx-auto object-cover w-full h-[200px] rounded-md" />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
