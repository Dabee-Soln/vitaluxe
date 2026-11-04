import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { PRODUCTS } from "../data";

export default function Products() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-header font-bold text-slate-900 mb-3">Our Product Range</h1>
        <p className="text-slate-600">Pure, organic, and effective health solutions crafted for everyday vigor.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((prod, idx) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
          >
            {/* Product Image Placeholder Slot */}
            <div className="h-52 bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100">
              <img 
                src={prod.image} 
                alt={prod.name} 
                className="max-h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://placehold.co/300x200/e2e8f0/0f5132?text=Vitaluxe+Product";
                }}
              />
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-header font-bold text-vitaluxe-gold-600 uppercase tracking-wider">{prod.category}</span>
                  <span className="text-xs font-header font-bold bg-vitaluxe-green-100 text-vitaluxe-green-900 px-2.5 py-0.5 rounded-full">PV: {prod.pv}</span>
                </div>
                <h2 className="text-xl font-header font-bold text-slate-900 mb-2">{prod.name}</h2>
                <p className="text-slate-600 text-sm mb-4">{prod.shortDesc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xl font-header font-bold text-vitaluxe-green-800">{prod.price}</span>
                <Link
                  to={`/products/${prod.id}`}
                  className="bg-vitaluxe-green-800 hover:bg-vitaluxe-green-900 text-white font-header text-sm font-bold px-4 py-2 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}