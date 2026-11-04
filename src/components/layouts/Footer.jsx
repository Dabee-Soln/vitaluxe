import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-vitaluxe-navy-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          
          {/* Footer Logo & Info Slot */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="/icon.png" 
                alt="Vitaluxe Brand Logo" 
                className="w-9 h-9 object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <span className="text-lg font-header font-bold tracking-wider text-white block leading-none">
                  VITALUXE
                </span>
                <span className="text-[9px] font-header tracking-widest text-vitaluxe-gold-400 uppercase font-semibold">
                  International Ltd
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Transforming life through premium organic wellness formulations and sustainable empowerment models.
            </p>
          </div>

          <div>
            <h4 className="font-header font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-vitaluxe-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-vitaluxe-gold-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-vitaluxe-gold-400 transition-colors">Products</Link></li>
              <li><Link to="/complan" className="hover:text-vitaluxe-gold-400 transition-colors">Complan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-header font-bold text-white mb-4">Wellness Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/liveup-date-coffee" className="hover:text-vitaluxe-gold-400 transition-colors">Date Seed Coffee</Link></li>
              <li><Link to="/products/noir-vigor" className="hover:text-vitaluxe-gold-400 transition-colors">Noir Vigor Ganoderma+</Link></li>
              <li><Link to="/products/zestyl-man" className="hover:text-vitaluxe-gold-400 transition-colors">Zestyl Syrup</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-header font-bold text-white mb-4">Contact Us</h4>
            <p className="text-sm leading-relaxed">
              Have questions regarding products or compensation tiers? Connect with our support line.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500 font-header">
          © {new Date().getFullYear()} Vitaluxe International Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}