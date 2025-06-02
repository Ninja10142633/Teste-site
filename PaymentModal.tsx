
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, MessageCircle, CreditCard, Smartphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const PaymentModal = ({ isOpen, onClose, product }: PaymentModalProps) => {
  const pixKey = "11999999999"; // Chave PIX fictícia
  const bankDetails = {
    bank: "Banco Example",
    agency: "1234",
    account: "12345-6",
    name: "RobloxVault LTDA"
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para sua área de transferência.",
    });
  };

  const sendWhatsAppMessage = () => {
    if (!product) return;
    
    const message = encodeURIComponent(
      `Olá! Gostaria de comprar: ${product.name} - ${product.price}\n\nJá fiz o pagamento via PIX. Aguardo as instruções para receber a conta.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-dark-800 border-dark-600 text-white max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-neon-purple mb-2">
            Finalizar Compra
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          {/* Product Info */}
          <Card className="bg-dark-700 border-dark-600">
            <CardContent className="p-4">
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">{product.name}</h3>
              <p className="text-xl sm:text-2xl font-bold text-neon-green">{product.price}</p>
            </CardContent>
          </Card>

          {/* Payment Instructions */}
          <div className="space-y-4">
            <h4 className="font-bold text-white flex items-center text-sm sm:text-base">
              <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-neon-blue" />
              Instruções de Pagamento
            </h4>

            {/* PIX Payment */}
            <Card className="bg-dark-700 border-dark-600">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-neon-green" />
                  <h5 className="font-semibold text-white text-sm sm:text-base">PIX (Recomendado)</h5>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm mb-1">Chave PIX:</p>
                    <div className="flex items-center gap-2">
                      <code className="bg-dark-900 px-2 py-1 rounded text-xs sm:text-sm flex-1">
                        {pixKey}
                      </code>
                      <Button
                        onClick={copyPixKey}
                        size="sm"
                        className="bg-neon-purple hover:bg-neon-purple/80 px-2 py-1"
                      >
                        <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-xs sm:text-sm text-gray-400 space-y-1">
                    <p>• Valor: <span className="text-neon-green font-semibold">{product.price}</span></p>
                    <p>• Após o pagamento, envie o comprovante via WhatsApp</p>
                    <p>• Entrega em até 5 minutos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bank Transfer Alternative */}
            <Card className="bg-dark-700 border-dark-600">
              <CardContent className="p-4">
                <h5 className="font-semibold text-white mb-3 text-sm sm:text-base">Transferência Bancária</h5>
                <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <p>Banco: {bankDetails.bank}</p>
                  <p>Agência: {bankDetails.agency}</p>
                  <p>Conta: {bankDetails.account}</p>
                  <p>Favorecido: {bankDetails.name}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp Contact */}
          <div className="space-y-3">
            <Button
              onClick={sendWhatsAppMessage}
              className="w-full bg-neon-green hover:bg-neon-green/80 text-white py-2 sm:py-3 font-semibold text-sm sm:text-base"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Confirmar Pagamento no WhatsApp
            </Button>
            
            <p className="text-xs text-gray-400 text-center">
              Clique no botão acima após fazer o pagamento para receber sua conta rapidamente
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
