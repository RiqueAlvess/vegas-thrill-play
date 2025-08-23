import GameCard from "./GameCard";
import { Button } from "@/components/ui/button";
import { Flame, Crown, Zap, Star } from "lucide-react";
import fortuneTiger from "@/assets/fortune-tiger.jpg";
import blazeDice from "@/assets/blaze-dice.jpg";
import roulette from "@/assets/roulette.jpg";
import poker from "@/assets/poker.jpg";

const GamesSection = () => {
  const games = [
    {
      title: "Fortune Tiger",
      image: fortuneTiger,
      category: "Slots",
      isHot: true,
    },
    {
      title: "Blaze Dice",
      image: blazeDice,
      category: "Dados",
      isNew: true,
    },
    {
      title: "Roleta Brasileira",
      image: roulette,
      category: "Mesa",
      isHot: true,
    },
    {
      title: "Poker Texas",
      image: poker,
      category: "Cartas",
    }
  ];

  const categories = [
    { name: "Populares", icon: Flame, color: "text-neon-red" },
    { name: "Slots", icon: Crown, color: "text-neon-gold" },
    { name: "Ao Vivo", icon: Zap, color: "text-neon-green" },
    { name: "Novos", icon: Star, color: "text-primary" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-gold">Jogos</span>
            <span className="text-foreground"> Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção exclusiva de jogos com os maiores prêmios e a melhor experiência
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className={`border-border/50 hover:border-primary/50 hover:bg-primary/10 ${
                  index === 0 ? 'bg-primary/20 border-primary/50' : ''
                }`}
              >
                <Icon className={`w-4 h-4 mr-2 ${category.color}`} />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              image={game.image}
              category={game.category}
              isHot={game.isHot}
              isNew={game.isNew}
            />
          ))}
        </div>

        {/* Jackpot Section */}
        <div className="bg-gradient-to-r from-card to-card/50 border border-primary/30 rounded-2xl p-8 text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-neon-gold mb-4">🏆 JACKPOT PROGRESSIVO</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-2">Mega Jackpot</p>
                <p className="text-2xl font-bold text-neon-red">R$ 2.345.678</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-2">Major Jackpot</p>
                <p className="text-2xl font-bold text-neon-gold">R$ 456.789</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-2">Minor Jackpot</p>
                <p className="text-2xl font-bold text-neon-green">R$ 89.012</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-vegas text-lg px-8 py-4">
            Ver Todos os Jogos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;