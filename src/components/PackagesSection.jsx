import React from "react";
import { PACKAGES } from "../data";

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Entry Packages[cite: 13, 15]</h2>
          <p className="text-slate-400">Select products that make up the required package PV[cite: 16]. Conversion Rate: ₦570/PV[cite: 12].</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-amber-400 transition-colors">
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-extrabold text-white mb-4">{pkg.price}</div>
                <div className="space-y-2 text-sm text-slate-300">
                  <p><strong className="text-slate-100">PV/BV:</strong> {pkg.pv}</p>
                  <p><strong className="text-slate-100">Direct Referral:</strong> {pkg.referralBonus}</p>
                  <p><strong className="text-slate-100">Binary Match:</strong> {pkg.pairingMatch}</p>
                  <p><strong className="text-slate-100">Max Daily Pairs:</strong> {pkg.maxDailyPairs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}