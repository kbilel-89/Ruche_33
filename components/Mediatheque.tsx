
import React, { useState } from 'react';
import { MOCK_MEDIA } from '../constants';
import { MediaType } from '../types';

const Mediatheque: React.FC = () => {
  const [filter, setFilter] = useState<MediaType | 'Tous'>('Tous');

  const filteredMedia = filter === 'Tous' 
    ? MOCK_MEDIA 
    : MOCK_MEDIA.filter(m => m.type === filter);

  const filters: (MediaType | 'Tous')[] = ['Tous', 'Livre', 'Vidéo', 'Site Web'];

  const getIcon = (type: MediaType) => {
    switch (type) {
      case 'Livre':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'Vidéo':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'Site Web':
      default:
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif font-bold text-white">Médiathèque Indé</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Pour s'armer intellectuellement, il faut sortir du prêt-à-penser des médias dominants.
          Voici une sélection de ressources essentielles pour la Ruche.
        </p>
        
        <div className="pt-4 flex justify-center">
            <a 
              href="https://www.notion.so/M-diath-que-Ruche33-275fc447acf880a29160d1edd62c977c?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]"
            >
              <span>Accéder à la Médiathèque Complète (Notion)</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 py-4">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              filter === f 
                ? 'bg-slate-100 text-slate-900 scale-105' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map(item => (
          <div key={item.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-amber-500/50 hover:shadow-xl transition-all group flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${
                  item.type === 'Livre' ? 'bg-amber-900/30 text-amber-500' : 
                  item.type === 'Vidéo' ? 'bg-red-900/30 text-red-500' : 
                  'bg-blue-900/30 text-blue-400'
                }`}>
                  {getIcon(item.type)}
                </div>
                <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">
                  {item.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 font-medium mb-3">
                {item.author}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-900 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 p-4 border-t border-slate-700 flex justify-end">
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-amber-500 hover:text-amber-400 flex items-center gap-1 group/link"
              >
                Voir la ressource
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mediatheque;
