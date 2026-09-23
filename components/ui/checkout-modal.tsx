'use client';

import React, { useState } from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  X, 
  Sparkles, 
  Clock, 
  ArrowRight,
  Download,
  AlertCircle
} from 'lucide-react';

export interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: {
    title: string;
    price: number | string;
    description: string;
  };
}

export default function CheckoutModal({ isOpen, onClose, defaultPlan }: CheckoutModalProps) {
  const [paymentOption, setPaymentOption] = useState<'1x' | '3x' | 'opco'>('1x');
  const [selectedOffer, setSelectedOffer] = useState(defaultPlan?.title || 'Formation IA Générative & Automatisation (RS6776)');
  const [amount, setAmount] = useState<number>(defaultPlan?.price && typeof defaultPlan.price === 'number' ? defaultPlan.price : 1490);
  
  // Card form state
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Status states
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  if (!isOpen) return null;

  // Format card number with spaces (#### #### #### ####)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  // Format expiry (MM/AA)
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 3) {
      raw = raw.slice(0, 2) + '/' + raw.slice(2);
    }
    setCardExpiry(raw);
  };

  // Format CVC (3 digits)
  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardCvc(e.target.value.replace(/\D/g, '').slice(0, 3));
  };

  // Detect card brand
  const getCardType = () => {
    const clean = cardNumber.replace(/\s/g, '');
    if (clean.startsWith('4')) return 'VISA';
    if (/^(5[1-5]|2[2-7])/.test(clean)) return 'MASTERCARD';
    if (/^3[47]/.test(clean)) return 'AMEX';
    return 'CB';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate real 3D secure verification
    setTimeout(() => {
      setIsProcessing(false);
      setTransactionId('OTOP-' + Math.random().toString(36).substring(2, 9).toUpperCase());
      setIsSuccess(true);
    }, 1800);
  };

  const calculatedMonthly = Math.round(amount / 3);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl my-8 rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Lock size={18} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Paiement Sécurisé SSL • Ô&apos;TOP Formation
              </h2>
              <p className="text-xs text-slate-400">Transaction chiffrée de bout en bout (PCI-DSS Niveau 1)</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              Paiement &amp; Inscription Validés !
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Votre transaction a été confirmée avec succès. Vous recevrez immédiatement votre reçu de paiement ainsi que vos accès par e-mail.
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto mb-6 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Réf. Transaction :</span>
                <span className="font-mono text-blue-300 font-bold">{transactionId}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Formation réservée :</span>
                <span className="text-white font-semibold">{selectedOffer}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Montant réglé :</span>
                <span className="text-emerald-400 font-bold text-sm">
                  {paymentOption === '3x' ? `${calculatedMonthly} € (1ère mensualité)` : `${amount} €`}
                </span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Mode :</span>
                <span>{paymentOption === '3x' ? 'Paiement 3x sans frais' : 'Carte Bancaire (1x)'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href={`https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20viens%20d'effectuer%20mon%20paiement%20(${transactionId})%20pour%20${encodeURIComponent(selectedOffer)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Confirmer sur WhatsApp</span>
              </a>
              <button 
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-colors"
              >
                Fermer la fenêtre
              </button>
            </div>
          </div>
        ) : (
          /* Payment Form Screen */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Offer Selection & Price */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">Parcours sélectionné</span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">{selectedOffer}</h4>
                <p className="text-xs text-slate-400">Inclus : accès immédiat + 5h de coaching individuel sur-mesure</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Total TTC</span>
                <span className="text-2xl font-black text-emerald-400">{amount} €</span>
              </div>
            </div>

            {/* Mode de règlement tabs */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Choisissez votre modalité de règlement :
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentOption('1x')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paymentOption === '1x'
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="block text-xs font-bold">Paiement 1x</span>
                  <span className="block text-sm font-extrabold text-blue-400 mt-0.5">{amount} €</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentOption('3x')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paymentOption === '3x'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="block text-xs font-bold">3x Sans Frais</span>
                  <span className="block text-sm font-extrabold text-indigo-400 mt-0.5">3 × {calculatedMonthly} €</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentOption('opco')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paymentOption === 'opco'
                      ? 'bg-amber-600/20 border-amber-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="block text-xs font-bold">OPCO / FAF</span>
                  <span className="block text-xs font-bold text-amber-400 mt-1">Prise en charge</span>
                </button>
              </div>
            </div>

            {paymentOption === 'opco' ? (
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <ShieldCheck size={18} />
                  <span>Dossier Financement (OPCO / FAF / CPF)</span>
                </div>
                <p>
                  Financement possible selon votre statut et sous réserve d’acceptation par votre financeur. Dossier accompagné avec notre partenaire certifié Qualiopi Eloqone.
                </p>
                <p className="text-[11px] text-amber-300/80">
                  Note : L&apos;inscription directe par carte bancaire et la démarche de financement par un tiers sont deux parcours distincts.
                </p>
                <div className="pt-2">
                  <a 
                    href="tel:+33767246825"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                  >
                    <span>Appeler Mélissa pour monter le dossier : 07 67 24 68 25</span>
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* Credit Card Visual Graphic Preview */}
                <div className="relative h-44 rounded-2xl p-5 bg-gradient-to-tr from-slate-950 via-blue-950 to-indigo-900 border border-blue-500/30 shadow-xl flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-7 rounded bg-amber-400/80 border border-amber-300/60 flex items-center justify-center">
                        <div className="w-6 h-4 border border-amber-800/40 rounded-sm" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Sans contact</span>
                    </div>
                    <span className="font-mono font-black text-sm tracking-wider text-blue-200">
                      {getCardType()}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="font-mono text-lg sm:text-xl font-bold tracking-widest text-white drop-shadow">
                      {cardNumber || '•••• •••• •••• ••••'}
                    </div>
                  </div>

                  <div className="flex justify-between items-end relative z-10 text-xs">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Titulaire</span>
                      <span className="font-semibold text-slate-200 tracking-wide uppercase">
                        {cardHolder || 'VOTRE NOM'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Expire</span>
                      <span className="font-mono font-semibold text-slate-200">
                        {cardExpiry || 'MM/AA'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Numéro de carte bancaire *
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="4970 0000 0000 0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-mono text-sm placeholder:text-slate-600 outline-none"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-bold">
                        {getCardType()}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Date d&apos;expiration *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={cardExpiry}
                        onChange={handleExpiryChange}
                        placeholder="MM/AA"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-mono text-sm placeholder:text-slate-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Cryptogramme (CVC) *
                      </label>
                      <input 
                        type="password" 
                        required
                        value={cardCvc}
                        onChange={handleCvcChange}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-mono text-sm placeholder:text-slate-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nom complet inscrit sur la carte *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                      placeholder="JEAN DUPONT"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email pour le reçu de paiement *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contact@entreprise.fr"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Téléphone pour validation 3D-Secure *
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sécurisation bancaire en cours...</span>
                    </>
                  ) : (
                    <>
                      <Lock size={18} />
                      <span>
                        Régler {paymentOption === '3x' ? `${calculatedMonthly} € (1/3)` : `${amount} €`} en toute sécurité
                      </span>
                    </>
                  )}
                </button>
              </>
            )}

            {/* Badges and Guarantees */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col items-center gap-2 text-[11px] text-slate-400 text-center">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <Lock size={14} className="text-blue-400" />
                  Paiement sécurisé par carte via Stripe (3D-Secure 2)
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Conforme PCI-DSS Niveau 1
                </span>
              </div>
              <p className="text-[10.5px] text-slate-400 max-w-md mx-auto">
                Paiement sécurisé par carte — conditions d’annulation et de rétractation disponibles dans nos <a href="/cgv" target="_blank" className="underline text-blue-400 hover:text-blue-300">CGV</a>. L&apos;inscription directe et la demande de prise en charge financière sont deux parcours distincts.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
