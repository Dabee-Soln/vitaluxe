import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { PRODUCTS } from "../data";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <Link to="/products" className="inline-flex items-center gap-2 font-header text-sm font-bold text-slate-600 hover:text-vitaluxe-green-800 mb-8">
        <FaArrowLeft /> Back to Products
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs grid md:grid-cols-2 gap-12"
      >
        {/* Large Product Image Placeholder Slot */}
        <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center border border-slate-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-80 object-contain"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/400x300/e2e8f0/0f5132?text=Vitaluxe+Product";
            }}
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-xs font-header font-bold text-vitaluxe-gold-600 uppercase tracking-widest">{product.category}</span>
            <h1 className="text-3xl font-header font-bold text-slate-900 mt-1 mb-3">{product.name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-header font-bold text-vitaluxe-green-800">{product.price}</span>
              <span className="bg-vitaluxe-green-100 text-vitaluxe-green-900 text-xs font-header font-bold px-3 py-1 rounded-full">
                Point Value (PV): {product.pv}
              </span>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed font-body">{product.shortDesc}</p>

          <div>
            <h3 className="font-header font-bold text-slate-900 mb-3">Key Benefits & Health Indications:</h3>
            <ul className="space-y-2.5">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-body">
                  <FaCheckCircle className="text-vitaluxe-green-600 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}