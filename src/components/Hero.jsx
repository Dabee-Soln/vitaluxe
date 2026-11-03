import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-vitaluxe-gold-100/50 via-vitaluxe-bg to-white py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-vitaluxe-green-100 border border-vitaluxe-green-600/30 text-vitaluxe-green-900 font-header text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-bold mb-6">
            Clean • Sustainable • Competitive[cite: 1]
          </span>
          <h1 className="text-4xl sm:text-6xl font-header font-black tracking-tight text-slate-900 mb-6">
            The Luxury of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vitaluxe-green-800 to-vitaluxe-gold-600">
              Vitality[cite: 1]
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg sm:text-xl mb-10 leading-relaxed font-body">
            Empowering wellness and financial independence through premium natural formulations and a rewarding business model[cite: 3, 52].
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 bg-vitaluxe-green-800 hover:bg-vitaluxe-green-900 text-white font-header font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Explore Products <FaArrowRight />
            </Link>
            <Link
              to="/about"
              className="bg-white border border-slate-300 hover:border-vitaluxe-gold-500 text-slate-800 font-header font-bold px-8 py-3.5 rounded-xl transition-all shadow-xs"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}