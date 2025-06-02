
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GamepadIcon, Star, Shield, Zap, MessageCircle, ArrowRight, Trophy, Users, Clock } from "lucide-react";

const Index = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as contas Roblox disponíveis.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-4 border-b border-dark-600/50 backdrop-blur-sm bg-dark-900/95">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="bg-neon-purple/20 p-2 rounded-lg">
              <GamepadIcon className="h-6 w-6 sm:h-7 sm:w-7 text-neon-purple" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-white">RobloxVault</span>
              <div className="text-xs text-gray-400 hidden sm:block">Premium Accounts</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/products">
              <Button variant="ghost" className="text-gray-300 hover:text-white hidden sm:inline-flex">
                Produtos
              </Button>
            </Link>
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-neon-green hover:bg-neon-green/80 text-white px-4 py-2 text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contato
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-sm font-medium mb-8">
            <Trophy className="h-4 w-4 mr-2" />
            Loja #1 em Contas Premium
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Contas <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Roblox Premium</span>
            <br />com Muito Robux
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Adquira contas verificadas com milhares de Robux, levels altos e itens exclusivos. 
            Entrega instantânea e suporte 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/products">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Ver Produtos
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            
            <Button 
              onClick={handleWhatsAppContact}
              variant="outline" 
              className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg rounded-lg"
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-neon-green mb-1">500+</div>
              <div className="text-sm text-gray-400">Contas Vendidas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-neon-blue mb-1">24/7</div>
              <div className="text-sm text-gray-400">Suporte Online</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-neon-purple mb-1">5min</div>
              <div className="text-sm text-gray-400">Entrega Rápida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Por que escolher a RobloxVault?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Somos especialistas em contas Roblox premium com anos de experiência no mercado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-dark-700/50 border border-dark-600/50 rounded-xl p-8 hover:border-neon-purple/50 transition-all duration-300">
              <div className="bg-neon-purple/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 transition-colors">
                <Shield className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">100% Seguro</h3>
              <p className="text-gray-400 leading-relaxed">
                Todas as contas são verificadas e garantimos a segurança total da sua compra com suporte completo.
              </p>
            </div>

            <div className="group bg-dark-700/50 border border-dark-600/50 rounded-xl p-8 hover:border-neon-blue/50 transition-all duration-300">
              <div className="bg-neon-blue/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
                <Clock className="h-6 w-6 text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Entrega Instantânea</h3>
              <p className="text-gray-400 leading-relaxed">
                Receba sua conta em até 5 minutos após a confirmação do pagamento, sem complicações.
              </p>
            </div>

            <div className="group bg-dark-700/50 border border-dark-600/50 rounded-xl p-8 hover:border-neon-green/50 transition-all duration-300">
              <div className="bg-neon-green/10 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors">
                <Users className="h-6 w-6 text-neon-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Suporte 24/7</h3>
              <p className="text-gray-400 leading-relaxed">
                Nossa equipe está sempre disponível para te ajudar com qualquer dúvida ou problema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 border border-dark-600/50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Escolha sua conta premium e comece a jogar com vantagem hoje mesmo!
            </p>
            <Link to="/products">
              <Button className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Ver Todos os Produtos
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
