import React, { useState } from 'react';
import { MOCK_REPORTS } from '../constants';
import { MeetingReport } from '../types';

const MeetingReports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<MeetingReport>(MOCK_REPORTS[0]);

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-160px)] min-h-[600px] flex flex-col">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
        <div>
           <h2 className="text-3xl font-serif font-bold text-white">Comptes Rendus</h2>
           <p className="text-slate-400 mt-1">Transparence totale des décisions et des échanges.</p>
        </div>
        <a 
          href="https://www.notion.so/21dfc447acf8803e82b6c9895a913a30?v=21dfc447acf88093965b000cd34b1835&source=copy_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-full transition-colors shadow-lg shadow-amber-500/20"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4v16h16V4H4zm14 14H6V6h12v12zM8 11h8v2H8v-2zm0 4h8v2H8v-2zm0-8h8v2H8V7z"/>
          </svg>
          Accéder à tous les CRs (Notion)
        </a>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        {/* Liste des CRs (Sidebar) */}
        <div className="lg:col-span-4 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-900/50 border-b border-slate-700 font-bold text-slate-300">
            Dernières Réunions
          </div>
          <div className="overflow-y-auto p-2 space-y-2 flex-1">
            {MOCK_REPORTS.map((report) => (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 border group ${
                  selectedReport.id === report.id
                    ? 'bg-amber-500/10 border-amber-500 shadow-[inset_4px_0_0_0_#F59E0B]'
                    : 'bg-slate-800 border-transparent hover:bg-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    selectedReport.id === report.id ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {new Date(report.date).toLocaleDateString('fr-FR')}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    {report.participants}
                  </span>
                </div>
                <h3 className={`font-bold truncate ${selectedReport.id === report.id ? 'text-amber-500' : 'text-slate-200'}`}>
                  {report.title}
                </h3>
                <div className="mt-2 flex gap-1 flex-wrap">
                  {report.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-900 text-slate-500 px-1.5 py-0.5 rounded border border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Contenu du CR (Main) */}
        <div className="lg:col-span-8 bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
          <div className="p-6 md:p-8 bg-slate-800 border-b border-slate-700">
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedReport.tags.map(tag => (
                <span key={tag} className="bg-amber-500/20 text-amber-500 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide border border-amber-500/20">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
              {selectedReport.title}
            </h1>
            <div className="text-slate-400 text-sm flex items-center gap-4">
              <span>Le {new Date(selectedReport.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
              <span>{selectedReport.participants} participants</span>
            </div>
          </div>
          
          <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-slate-800/50">
            <div className="prose prose-invert prose-amber max-w-none">
              {selectedReport.content.split('\n').map((line, i) => {
                 if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-amber-500 mt-6 mb-3">{line.replace('### ', '')}</h3>;
                 if (line.startsWith('* ')) return <li key={i} className="ml-4 list-disc text-slate-300">{line.replace('* ', '')}</li>;
                 if (line.trim() === '') return <br key={i}/>;
                 return <p key={i} className="text-slate-300 leading-relaxed mb-2">{line}</p>;
              })}
            </div>
          </div>

          <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
             <span>ID: {selectedReport.id}</span>
             <button className="hover:text-amber-500 transition-colors flex items-center gap-1">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
               Télécharger PDF
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingReports;