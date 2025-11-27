import React, { useState } from 'react';

// Simple markdown component for rendering content
const SimpleMarkdown = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-4 text-slate-300 leading-relaxed font-light">
      {lines.map((line, idx) => {
        if (line.startsWith('# ')) return <h3 key={idx} className="text-3xl font-serif font-bold text-amber-500 mt-8 mb-4 border-b border-amber-500/20 pb-2">{line.replace('# ', '')}</h3>;
        if (line.startsWith('## ')) return <h4 key={idx} className="text-xl font-bold text-amber-100 mt-6 mb-3">{line.replace('## ', '')}</h4>;
        if (line.startsWith('### ')) return <h5 key={idx} className="text-lg font-semibold text-amber-500/80 mt-4 mb-2">{line.replace('### ', '')}</h5>;
        if (line.startsWith('* ') || line.startsWith('- ')) return <li key={idx} className="ml-6 list-disc text-slate-300 pl-2">{line.replace(/^[*-] /, '')}</li>;
        if (line.startsWith('> ')) return <blockquote key={idx} className="border-l-4 border-amber-500 pl-4 italic text-slate-400 my-4 bg-slate-800/30 p-2 rounded-r">{line.replace('> ', '')}</blockquote>;
        if (line.trim() === '') return <div key={idx} className="h-2"></div>;
        return <p key={idx} className="text-justify">{line}</p>;
      })}
    </div>
  );
};

// Static content database
const MODULES = [
  {
    id: 'oligarchie',
    title: "Comprendre l'Oligarchie",
    summary: "Analyse des structures de pouvoir et de la captation démocratique.",
    content: `# Comprendre l'Oligarchie

L'oligarchie (du grec *oligos*, petit nombre, et *arkhê*, commandement) désigne une forme de gouvernement où le pouvoir est réservé à un petit groupe de personnes qui forment une classe dominante.

## Les Mécanismes de Domination
Contrairement à la dictature, l'oligarchie moderne maintient souvent une façade démocratique. Cependant, les mécanismes de décision sont verrouillés par :
* **La consanguinité sociale** : Les élites politiques, médiatiques et économiques sortent des mêmes écoles.
* **Le verrouillage institutionnel** : La Constitution de la Ve République concentre les pouvoirs (article 49.3, présidentialisme).
* **La dépendance médiatique** : 90% des médias français sont détenus par 9 milliardaires.

## La Rupture Nécessaire
Pour sortir de l'oligarchie, il ne suffit pas de changer les têtes, il faut changer les règles du jeu. C'est le sens de l'action de La Ruche 33 : construire une force citoyenne capable d'imposer un rapport de force.`
  },
  {
    id: 'institutions',
    title: "Nos Institutions : Le Problème",
    summary: "Pourquoi la Ve République bloque toute initiative populaire.",
    content: `# La Ve République : Un Régime à Bout de Souffle

## Le Coup d'État Permanent
François Mitterrand qualifiait lui-même la Ve République de "Coup d'État permanent" avant d'y adhérer. Ce régime a été conçu en temps de crise (guerre d'Algérie) pour donner un pouvoir fort à l'exécutif, au détriment du Parlement et du peuple.

## Les Symptômes du Mal
1. **L'impuissance du vote** : Le citoyen n'a de pouvoir que le jour de l'élection. Ensuite, il signe un chèque en blanc pour 5 ans.
2. **L'absence de contre-pouvoirs réels** : Le Conseil Constitutionnel est nommé par les politiques.
3. **La centralisation** : Tout se décide à Paris, loin des réalités locales de la Gironde.

## L'Alternative : L'Assemblée Constituante
La seule solution démocratique est la réécriture de la Constitution par les citoyens eux-mêmes, tirés au sort, et non par les professionnels de la politique.`
  },
  {
    id: 'action',
    title: "Philosophie de l'Action Directe",
    summary: "Théorie et pratique de l'activisme selon Juan Branco.",
    content: `# L'Action prime sur la Parole

> "Il ne s'agit pas de convaincre, mais de vaincre."

## Sortir de l'Attentisme
Les mouvements sociaux traditionnels (manifestations promenade, pétitions) ont montré leurs limites face à un pouvoir sourd. La Ruche 33 prône une méthode différente.

### 1. La Conscientisation par l'Acte
Une action forte vaut mille discours. Bloquer un symbole de l'oppression (préfecture, multinationale polluante) force le débat public.

### 2. L'Auto-organisation
Pas de chef pour dire quoi faire. Chaque "Abeille" est autonome et responsable. Si une idée fait consensus, elle est exécutée.

### 3. La Solidarité
Face à la répression, la solidarité est notre arme. Nous ne laissons personne derrière.`
  }
];

const PopularUniversity: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const selectedModule = MODULES.find(m => m.id === selectedModuleId);

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-white mb-4">Université Populaire</h2>
        <p className="text-slate-400 text-lg">
          L'émancipation passe par le savoir. Accédez à nos modules de formation politique, 
          historique et stratégique pour armer votre esprit critique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar / List of modules */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-4 border-b border-slate-700 pb-2">
            Programme des Cours
          </h3>
          {MODULES.map(module => (
            <button
              key={module.id}
              onClick={() => setSelectedModuleId(module.id)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                selectedModuleId === module.id
                  ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-amber-500/50 hover:bg-slate-750'
              }`}
            >
              <h4 className="font-bold text-lg mb-1">{module.title}</h4>
              <p className={`text-xs ${selectedModuleId === module.id ? 'text-slate-800' : 'text-slate-500'}`}>
                {module.summary}
              </p>
            </button>
          ))}
          
          <div className="p-4 bg-slate-900/50 border border-dashed border-slate-700 rounded-xl text-center">
            <p className="text-slate-500 text-sm mb-2">Vous souhaitez proposer un cours ?</p>
            <button className="text-amber-500 text-sm font-bold hover:underline">
              Soumettre un sujet aux Abeilles
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-8">
          {selectedModule ? (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-2xl animate-fade-in min-h-[500px]">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-amber-500/10 text-amber-500 text-xs px-2 py-1 rounded border border-amber-500/20">
                  Module de Formation
                </span>
                <button 
                  onClick={() => setSelectedModuleId(null)}
                  className="text-slate-500 hover:text-white md:hidden"
                >
                  Retour
                </button>
              </div>
              
              <SimpleMarkdown content={selectedModule.content} />
              
              <div className="mt-12 pt-8 border-t border-slate-700 flex justify-between items-center">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Télécharger PDF
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Partager
                  </button>
                </div>
                <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  Marquer comme lu
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center bg-slate-800/50 border border-slate-800 rounded-xl text-center p-12 min-h-[500px]">
              <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mb-6 text-slate-500">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sélectionnez un module</h3>
              <p className="text-slate-400 max-w-sm">
                Choisissez un sujet dans le menu de gauche pour commencer votre lecture et accéder aux ressources de la Ruche.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularUniversity;