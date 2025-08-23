import { Play, Star } from "lucide-react";

interface GameCardProps {
  title: string;
  image: string;
  category: string;
  isHot?: boolean;
  isNew?: boolean;
}

const GameCard = ({ title, image, category, isHot, isNew }: GameCardProps) => {
  return (
    <div className="card-game group relative overflow-hidden">
      {/* Badge */}
      {(isHot || isNew) && (
        <div className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-bold ${
          isHot ? 'bg-secondary text-secondary-foreground' : 'bg-accent text-accent-foreground'
        }`}>
          {isHot ? 'HOT' : 'NOVO'}
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="btn-vegas transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 mr-2" />
            Jogar Agora
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-foreground group-hover:text-neon-gold transition-colors">
            {title}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm text-muted-foreground">4.8</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">{category}</p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="text-sm text-neon-green font-medium">
            RTP: 96.5%
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;