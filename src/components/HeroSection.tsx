import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Gift } from "lucide-react";
import heroImage from "@/assets/hero-casino.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Casino Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-neon-gold">VEGAS</span>
              <span className="text-foreground"> CASINO</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Viva a emoção de Las Vegas no conforto da sua casa. 
              <span className="text-neon-red font-semibold"> Ganhe grande</span> com os melhores jogos!
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center space-x-2 text-neon-gold">
              <Sparkles className="w-5 h-5" />
              <span>Jogos Premium</span>
            </div>
            <div className="flex items-center space-x-2 text-neon-green">
              <TrendingUp className="w-5 h-5" />
              <span>RTP Alto</span>
            </div>
            <div className="flex items-center space-x-2 text-neon-red">
              <Gift className="w-5 h-5" />
              <span>Bônus Diários</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-vegas text-lg px-8 py-4 pulse-neon">
              <Sparkles className="w-5 h-5 mr-2" />
              Começar a Jogar
            </Button>
            <Button className="btn-danger text-lg px-8 py-4">
              <Gift className="w-5 h-5 mr-2" />
              Bônus de R$ 500
            </Button>
          </div>

          {/* Promo Banner */}
          <div className="bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="text-lg font-bold text-neon-gold">🎰 MEGA JACKPOT</p>
                <p className="text-2xl font-bold text-neon-red">R$ 2.345.678</p>
                <p className="text-sm text-muted-foreground">Próximo sorteio em 2h 15min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float delay-1000 blur-sm"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float delay-2000 blur-sm"></div>
    </section>
  );
};

export default HeroSection;