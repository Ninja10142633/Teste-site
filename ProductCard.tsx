
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Zap, Crown, Flame } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  level?: string;
  robux?: string;
  popular?: boolean;
  category?: 'starter' | 'premium' | 'elite';
}

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

const ProductCard = ({ product, onBuy }: ProductCardProps) => {
  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'starter': return 'bg-neon-green/20 text-neon-green border-neon-green/30';
      case 'premium': return 'bg-neon-blue/20 text-neon-blue border-neon-blue/30';
      case 'elite': return 'bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-purple border-neon-purple/30';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'starter': return <Shield className="h-3 w-3" />;
      case 'premium': return <Star className="h-3 w-3" />;
      case 'elite': return <Crown className="h-3 w-3" />;
      default: return <Zap className="h-3 w-3" />;
    }
  };

  return (
    <Card className="bg-dark-800/80 border-dark-600/50 hover:border-neon-purple/50 transition-all duration-300 group relative overflow-hidden h-full flex flex-col backdrop-blur-sm">
      {product.popular && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium border-0">
            <Flame className="h-3 w-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}

      {product.category && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className={`text-xs font-medium border ${getCategoryColor(product.category)}`}>
            {getCategoryIcon(product.category)}
            <span className="ml-1 capitalize">{product.category}</span>
          </Badge>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/90 via-dark-800/20 to-transparent" />
        
        {/* Price overlay */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-dark-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-dark-600/50">
            <span className="text-lg sm:text-xl font-bold text-neon-green">{product.price}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm flex-1 line-clamp-2">
          {product.description}
        </p>

        {/* Stats */}
        {(product.level || product.robux) && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {product.level && (
              <div className="bg-dark-700/50 rounded-lg p-3 border border-dark-600/30">
                <div className="flex items-center text-xs text-gray-400 mb-1">
                  <Star className="h-3 w-3 mr-1" />
                  Level
                </div>
                <div className="text-sm font-semibold text-white">{product.level}</div>
              </div>
            )}
            {product.robux && (
              <div className="bg-dark-700/50 rounded-lg p-3 border border-dark-600/30">
                <div className="flex items-center text-xs text-gray-400 mb-1">
                  <Zap className="h-3 w-3 mr-1" />
                  Robux
                </div>
                <div className="text-sm font-semibold text-neon-green">{product.robux}</div>
              </div>
            )}
          </div>
        )}

        {/* Features */}
        <div className="space-y-2">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start text-sm">
              <div className="bg-neon-purple/20 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                <Shield className="h-2 w-2 text-neon-purple" />
              </div>
              <span className="text-gray-400 text-xs sm:text-sm line-clamp-1">{feature}</span>
            </div>
          ))}
          {product.features.length > 3 && (
            <div className="text-xs text-gray-500 ml-5">
              +{product.features.length - 3} recursos adicionais
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button 
          onClick={() => onBuy(product)}
          className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white py-3 font-semibold text-sm sm:text-base transition-all duration-300"
        >
          Comprar Agora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
