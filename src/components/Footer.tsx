import { Coins, Shield, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-500 rounded-lg flex items-center justify-center">
                <Coins className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-neon-gold">VegasCasino</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A plataforma de cassino online mais confiável e emocionante do Brasil. 
              Jogos premium, pagamentos seguros e suporte 24/7.
            </p>
            <div className="flex items-center space-x-2 text-neon-green">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Licenciado & Seguro</span>
            </div>
          </div>

          {/* Jogos */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Jogos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Slots Online</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Roleta</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blackjack</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Poker</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cassino Ao Vivo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Crash Games</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jogo Responsável</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Verificação de Conta</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+55 11 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">suporte@vegascasino.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Chat 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 VegasCasino. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground">+18 anos</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">Jogue com responsabilidade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;