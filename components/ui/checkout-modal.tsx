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
  FileText,
  Phone,
  Building,
  UserCheck
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
  const [modality, setModality] = useState<'stripe' | 'opco' | 'virement'>('stripe');
  const [paymentInstallments, setPaymentInstallments] = useState<'1x' | '3x'>('1x');
  const [selectedOffer, setSelectedOffer] = useState(defaultPlan?.title || 'Formation IA Générative & Automatisation (RS6776)');
  const [amount, setAmount] = useState<number>(defaultPlan?.price && typeof defaultPlan.price === 'number' ? defaultPlan.price : 1490);
  
  // Participant details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [professionalStatus, setProfessionalStatus] = useState('independant');
  const [companyName, setCompanyName] = useState('');
  
  // Status states
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      const ref = 'OTOP-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setReferenceId(ref);
      setIsSuccess(true);
    }, 1000);
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
              <ShieldCheck size={18} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Inscription &amp; Modalités de Règlement • Ô&apos;TOP Formation
              </h2>
              <p className="text-xs text-slate-400">Accompagnement administratif &amp; transaction sécurisée</p>
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
          /* Confirmation Screen */
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              Demande Enregistrée avec Succès !
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Votre dossier de réservation réf. <span className="font-mono text-blue-300 font-bold">{referenceId}</span> a été transmis à notre équipe pédagogique.
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto mb-6 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Réf. Dossier :</span>
                <span className="font-mono text-blue-300 font-bold">{referenceId}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Formation :</span>
                <span className="text-white font-semibold">{selectedOffer}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Participant :</span>
                <span className="text-white font-semibold">{fullName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Modalité retenue :</span>
                <span className="text-emerald-400 font-semibold">
                  {modality === 'stripe' 
                    ? `Paiement en ligne sécurisé (${paymentInstallments === '3x' ? '3x sans frais' : '1x'})`
                    : modality === 'opco'
                    ? 'Dossier Financement OPCO / FAF'
                    : 'Facture Proforma & Virement'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 text-left max-w-md mx-auto mb-6 leading-relaxed">
              {modality === 'stripe' ? (
                <span>
                  💳 Un lien de règlement sécurisé Stripe (3D-Secure 2, cartes CB, Visa, Mastercard) vous a été préparé. Vous pouvez le confirmer directement avec Mélissa sur WhatsApp ou par téléphone.
                </span>
              ) : modality === 'opco' ? (
                <span>
                  📁 Mélissa et notre partenaire certifié Qualiopi Eloqone vont vous contacter sous 24h ouvrées pour collecter les documents nécessaires et soumettre votre demande de prise en charge à votre financeur.
                </span>
              ) : (
                <span>
                  📄 Votre devis et convention de formation vous sont envoyés par e-mail avec notre RIB officiel pour déclencher le virement bancaire.
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href={`https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20viens%20d'enregistrer%20ma%20demande%20(${referenceId})%20pour%20la%20formation%20${encodeURIComponent(selectedOffer)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Finaliser sur WhatsApp 💬</span>
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
          /* Registration Form Screen */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Offer Selection & Price */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">Parcours sélectionné</span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">{selectedOffer}</h4>
                <p className="text-xs text-slate-400">Inclus : accès plateforme + accompagnement pédagogique dédié</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-slate-400 block">Tarif indicatif TTC</span>
                <span className="text-2xl font-black text-emerald-400">{amount} €</span>
              </div>
            </div>

            {/* Mode de règlement tabs */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Sélectionnez votre modalité souhaitée :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setModality('stripe')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    modality === 'stripe'
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <CreditCard size={18} className="mx-auto mb-1 text-blue-400" />
                  <span className="block text-xs font-bold">Règlement en ligne</span>
                  <span className="block text-[11px] text-blue-300 mt-0.5">Lien Sécurisé Stripe</span>
                </button>

                <button
                  type="button"
                  onClick={() => setModality('opco')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    modality === 'opco'
                      ? 'bg-amber-600/20 border-amber-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldCheck size={18} className="mx-auto mb-1 text-amber-400" />
                  <span className="block text-xs font-bold">Dossier OPCO / FAF</span>
                  <span className="block text-[11px] text-amber-300 mt-0.5">Prise en charge</span>
                </button>

                <button
                  type="button"
                  onClick={() => setModality('virement')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    modality === 'virement'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileText size={18} className="mx-auto mb-1 text-indigo-400" />
                  <span className="block text-xs font-bold">Devis / Virement</span>
                  <span className="block text-[11px] text-indigo-300 mt-0.5">Facture Entreprise</span>
                </button>
              </div>
            </div>

            {modality === 'stripe' && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-300 font-medium">Échéancier :</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentInstallments('1x')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      paymentInstallments === '1x'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    1x ({amount} €)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentInstallments('3x')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      paymentInstallments === '3x'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    3x sans frais (3 × {calculatedMonthly} €)
                  </button>
                </div>
              </div>
            )}

            {modality === 'opco' && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-amber-300">
                  <ShieldCheck size={16} />
                  <span>Accompagnement Financement avec Eloqone</span>
                </div>
                <p>
                  Financement étudié selon votre statut et sous réserve d’accord de votre financeur. Notre partenaire certifié Qualiopi, Eloqone, monte et transmet votre dossier complet.
                </p>
              </div>
            )}

            {/* Participant Information Fields */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nom et Prénom *
                </label>
                <input 
                  type="text" 
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Adresse email *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jean.dupont@entreprise.fr"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Téléphone *
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Statut professionnel *
                  </label>
                  <select 
                    value={professionalStatus}
                    onChange={(e) => setProfessionalStatus(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white text-sm outline-none"
                  >
                    <option value="independant">Indépendant / Freelance / Libéral</option>
                    <option value="dirigeant">Dirigeant TPE / PME</option>
                    <option value="salarie">Salarié d&apos;entreprise</option>
                    <option value="demandeur">Demandeur d&apos;emploi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Entreprise / Raison Sociale (facultatif)
                  </label>
                  <input 
                    type="text" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Mon Entreprise SAS"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
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
                  <span>Enregistrement en cours...</span>
                </>
              ) : (
                <>
                  <Lock size={18} />
                  <span>
                    {modality === 'stripe'
                      ? `Valider & Recevoir le lien Stripe sécurisé (${paymentInstallments === '3x' ? `3 × ${calculatedMonthly} €` : `${amount} €`})`
                      : modality === 'opco'
                      ? 'Transmettre ma demande d’accompagnement OPCO'
                      : 'Demander le devis officiel & convention'}
                  </span>
                </>
              )}
            </button>

            {/* Legal Disclaimers & Guarantees */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col items-center gap-2 text-[11px] text-slate-400 text-center">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <Lock size={14} className="text-blue-400" />
                  Transaction &amp; données protégées (SSL / TLS)
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Partenaire Qualiopi : Eloqone
                </span>
              </div>
              <p className="text-[10.5px] text-slate-400 max-w-lg mx-auto leading-relaxed">
                Ô’TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l’accord de l’organisme financeur.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
