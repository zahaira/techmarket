import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <CheckCircle2 className="text-green-600 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Paiement réussi</h1>
      <p className="text-gray-600 mb-8">
        Merci ! Votre paiement a été traité avec succès.
      </p>

      <Link
        href="/"
        className="bg-primary-dark hover:bg-primary-main text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default PaymentSuccess;
