import { Button } from "@/components/ui/button";
import { Coins, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/30 bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-500 rounded-lg flex items-center justify-center glow-hover">
              <Coins className="w-6 h-6 text-primary-foreground font-bold" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-neon-gold">VegasCasino</h1>
              <p className="text-xs text-muted-foreground">Premium Gaming</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Jogos</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Ao Vivo</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Promoções</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">VIP</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
              <Coins className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-neon-gold">R$ 1.250,00</span>
            </div>
            
            <Button variant="outline" size="sm" className="hidden sm:flex border-primary/30 hover:bg-primary/10">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            
            <Button className="btn-vegas">
              Cadastrar
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;