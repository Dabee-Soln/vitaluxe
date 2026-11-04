import React from "react";
import { EARNING_STREAMS, RANKS, STOCKISTS } from "../data";

export default function CompensationSection() {
  return (
    <section id="compensation" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">14 Ways to Earn[cite: 17, 18]</h2>
          <p className="text-slate-400">A hybrid model rewarding retail, team building, and leadership excellence.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {EARNING_STREAMS.map((stream) => (
            <div key={stream.id} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded">
                Stream {stream.id}
              </span>
              <h3 className="text-lg font-bold text-white mt-3 mb-2">{stream.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{stream.desc}</p>
            </div>
          ))}
        </div>

        <div id="ranks" className="mb-24">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Rank Advancement Rewards[cite: 47]</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-slate-900 rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-slate-800 text-amber-400 border-b border-slate-700">
                  <th className="p-4">Rank</th>
                  <th className="p-4">Package Req</th>
                  <th className="p-4">Team Req</th>
                  <th className="p-4">Lesser Leg PV</th>
                  <th className="p-4">Reward</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {RANKS.map((r) => (
                  <tr key={r.rank} className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">{r.rank}</td>
                    <td className="p-4">{r.packReq}</td>
                    <td className="p-4">{r.teamReq}</td>
                    <td className="p-4 text-emerald-400 font-semibold">{r.pvReq}</td>
                    <td className="p-4 font-bold text-amber-400">{r.reward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="stockists">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Stockist Opportunities[cite: 48]</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STOCKISTS.map((st) => (
              <div key={st.type} className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
                <h3 className="text-lg font-bold text-amber-400 mb-2">{st.type}</h3>
                <p className="text-slate-300 text-sm mb-1">Investment: <strong>{st.investment}</strong></p>
                <p className="text-emerald-400 text-sm font-semibold">{st.commission}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}