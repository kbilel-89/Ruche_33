import React from 'react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-24 animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden rounded-3xl border border-amber-500/20 shadow-2xl shadow-amber-900/20 isolate min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <svg className="absolute right-0 top-0 h-full w-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path fill="#F59E0B" d="M0 0 L100 0 L100 100 Z" />
          </svg>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10"></div>
        </div>
        
        <div className="relative px-6 py-16 sm:px-12 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm font-bold tracking-wider uppercase">
            Mouvement Citoyen Girondin
          </div>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-8 leading-tight">
            La Ruche 33
            <span className="block text-2xl sm:text-3xl mt-4 font-sans font-light text-slate-300">
              Construire une guillotine contre l'oligarchie
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-slate-400">
            Un collectif horizontal, sans chef, pour une transformation radicale de nos institutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#discord" className="rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all">
              Rejoindre l'Essaim
            </a>
            <button 
              onClick={() => setActiveTab('governance')} 
              className="rounded-full bg-slate-800 border border-slate-600 px-8 py-4 text-base font-bold text-white hover:bg-slate-700 hover:border-amber-500 transition-all"
            >
              Voir les actions en cours
            </button>
          </div>
        </div>
      </div>

      {/* 1. Identité & Objectif */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-4">
        <div>
           <h2 className="text-3xl font-serif font-bold text-white mb-6 border-l-4 border-amber-500 pl-4">Identité & Objectif Politique</h2>
           <div className="prose prose-invert text-slate-300 space-y-6 text-lg">
             <p>
               La Ruche 33 est un <strong>collectif citoyen girondin</strong> qui se positionne en rupture totale avec la « domination oligarchique ».
             </p>
             <p>
               Notre but explicite est de soutenir et incarner le projet politique de <strong>Juan Branco</strong>. Nous visons une transformation radicale de nos institutions via la conscientisation politique et l'auto-organisation populaire.
             </p>
             <div className="bg-slate-800 p-4 rounded-r-xl border-l-2 border-amber-500 italic text-slate-400 text-base">
               "Il ne s'agit pas de réformer le système, mais de construire la force capable de le remplacer."
             </div>
           </div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center text-center">
           <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
             <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
             </svg>
           </div>
           <h3 className="text-2xl font-bold text-white mb-2">Conscientisation</h3>
           <p className="text-slate-400 max-w-xs">Comprendre les mécanismes du pouvoir pour mieux les démanteler.</p>
        </div>
      </section>

      {/* 2. Organisation */}
      <section className="relative px-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-800"></div>
        </div>
        <div className="relative flex justify-center mb-12">
          <span className="bg-slate-900 px-6 text-sm text-amber-500 uppercase tracking-widest font-bold border border-slate-800 rounded-full py-1">
            Organisation Horizontale
          </span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors group">
             <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform origin-left">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Sans Chef</h3>
             <p className="text-slate-400">Structure plane sans hiérarchie figée. La transparence est notre seule règle absolue.</p>
           </div>
           <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors group">
             <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform origin-left">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Référents Tournants</h3>
             <p className="text-slate-400">Des coordinateurs élus pour un temps court, chargés de l'organisation, et <strong>révocables à tout moment</strong>.</p>
           </div>
           <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors group">
             <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform origin-left">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Consensus</h3>
             <p className="text-slate-400">Les décisions se prennent collectivement, par consensus ou consentement à la majorité qualifiée.</p>
           </div>
        </div>
      </section>

      {/* 3. Les Membres (Abeilles & Butineurs) */}
      <section className="bg-amber-950/30 rounded-3xl p-8 md:p-16 border border-amber-500/10 mx-4">
        <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">La Métaphore de la Ruche</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Abeilles */}
          <div className="flex flex-col items-center text-center space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-amber-500/20 shadow-lg hover:border-amber-500/50 transition-all">
             <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 shadow-[0_0_25px_rgba(245,158,11,0.4)]">
               <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
             </div>
             <div>
               <h3 className="text-2xl font-bold text-amber-400 mb-2">Abeilles Actives</h3>
               <p className="text-slate-300 leading-relaxed">
                 Les membres réguliers qui participent aux réunions hebdomadaires et aux prises de décisions stratégiques. Elles organisent, votent et bâtissent.
               </p>
             </div>
          </div>
          {/* Butineurs */}
          <div className="flex flex-col items-center text-center space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-slate-500 transition-all">
             <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 border-4 border-slate-600">
               <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>
             </div>
             <div>
               <h3 className="text-2xl font-bold text-slate-200 mb-2">Butineurs</h3>
               <p className="text-slate-400 leading-relaxed">
                 Les soutiens ponctuels ou logistiques. Ils apportent ressources, compétences ou présence lors des actions, sans contrainte de régularité. La porte est toujours ouverte.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Philosophie d'action */}
      <section className="mx-4 grid md:grid-cols-12 gap-0 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
         <div className="md:col-span-4 bg-amber-500 p-12 flex flex-col justify-center text-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10"></div>
            <h3 className="text-2xl font-bold mb-2 relative z-10">Philosophie Offensive</h3>
            <div className="text-5xl font-serif font-black relative z-10 leading-none">ACTION<br/>PRIME<br/>SUR<br/>PAROLE</div>
         </div>
         <div className="md:col-span-8 p-12 flex flex-col justify-center">
            <p className="text-xl text-slate-200 mb-6 font-light">
              "Toute proposition doit être accompagnée d'un <strong>engagement concret de mise en œuvre</strong>."
            </p>
            <p className="text-slate-400 mb-8">
              C'est un mouvement d'activisme politique militant. Nous rejetons le blabla stérile pour privilégier des actes qui construisent un véritable rapport de force politique.
            </p>
            <div>
               <button onClick={() => setActiveTab('agenda')} className="text-amber-500 hover:text-amber-400 font-bold flex items-center gap-2 group">
                 Voir l'agenda militant <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
               </button>
            </div>
         </div>
      </section>

      {/* Security Footer Note */}
      <div className="mx-4 mt-8 bg-slate-950 border-t border-slate-800 p-6 text-center rounded-lg opacity-60 hover:opacity-100 transition-opacity">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Note de Sécurité</h4>
        <p className="text-slate-500 text-xs max-w-2xl mx-auto">
          Ce site ne collecte aucune donnée personnelle. Pour une sécurité optimale de vos échanges militants, privilégiez les communications chiffrées (Signal) et les systèmes d'exploitation respectueux de la vie privée.
        </p>
      </div>
    </div>
  );
};

export default Home;