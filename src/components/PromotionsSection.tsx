import { Button } from "@/components/ui/button";
import { Gift, Percent, Clock, Users } from "lucide-react";

const PromotionsSection = () => {
  const promotions = [
    {
      title: "Bônus de Boas-vindas",
      description: "100% até R$ 1.000 + 50 giros grátis",
      icon: Gift,
      color: "text-neon-gold",
      bgColor: "from-primary/20 to-yellow-500/20",
      borderColor: "border-primary/30"
    },
    {
      title: "Cashback Diário",
      description: "10% de volta em todas as suas perdas",
      icon: Percent,
      color: "text-neon-green",
      bgColor: "from-accent/20 to-green-500/20",
      borderColor: "border-accent/30"
    },
    {
      title: "Happy Hour",
      description: "Multiplicador 2x das 20h às 22h",
      icon: Clock,
      color: "text-neon-red",
      bgColor: "from-secondary/20 to-red-500/20",
      borderColor: "border-secondary/30"
    },
    {
      title: "Clube VIP",
      description: "Benefícios exclusivos para membros",
      icon: Users,
      color: "text-primary",
      bgColor: "from-primary/10 to-primary/20",
      borderColor: "border-primary/50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-red">Promoções</span>
            <span className="text-foreground"> Exclusivas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aproveite ofertas imperdíveis e multiplique suas chances de ganhar
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <div
                key={index}
                className={`card-casino border ${promo.borderColor} bg-gradient-to-br ${promo.bgColor} hover:scale-105 cursor-pointer group`}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br from-background/50 to-background/30 rounded-full flex items-center justify-center ${promo.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{promo.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{promo.description}</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className={`w-full border-current hover:bg-current/10 ${promo.color}`}
                  >
                    Resgatar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Banner */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-neon-gold mb-4">👑 PROGRAMA VIP EXCLUSIVO</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Acesso a jogos exclusivos, gerente pessoal, saques prioritários e muito mais
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-background/30 rounded-lg p-4">
                <h4 className="font-bold text-primary mb-2">Bronze</h4>
                <p className="text-sm text-muted-foreground">Cashback 5%</p>
              </div>
              <div className="bg-background/30 rounded-lg p-4">
                <h4 className="font-bold text-secondary mb-2">Prata</h4>
                <p className="text-sm text-muted-foreground">Cashback 7%</p>
              </div>
              <div className="bg-background/30 rounded-lg p-4">
                <h4 className="font-bold text-accent mb-2">Ouro</h4>
                <p className="text-sm text-muted-foreground">Cashback 10%</p>
              </div>
            </div>
            <Button className="btn-vegas px-8 py-3">
              Tornar-se VIP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;