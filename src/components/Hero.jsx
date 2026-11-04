import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaLeaf, FaAward } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-vitaluxe-gold-100/40 via-vitaluxe-bg to-white py-16 sm:py-24 border-b border-slate-200">
      
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vitaluxe-green-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-vitaluxe-gold-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LHS: Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            <span className="inline-block bg-vitaluxe-green-100 border border-vitaluxe-green-600/30 text-vitaluxe-green-900 font-header text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-bold">
              Clean • Sustainable • Competitive
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-header font-black tracking-tight text-slate-900 leading-tight">
              The Luxury of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vitaluxe-green-800 via-vitaluxe-green-600 to-vitaluxe-gold-600">
                Vitality
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empowering wellness and financial independence through premium natural formulations and a rewarding business model.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/products"
                className="flex items-center justify-center gap-2 bg-vitaluxe-green-800 hover:bg-vitaluxe-green-900 text-white font-header font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Products <FaArrowRight />
              </Link>
              <Link
                to="/about"
                className="bg-white border border-slate-300 hover:border-vitaluxe-gold-500 text-slate-800 font-header font-bold px-8 py-3.5 rounded-xl transition-all shadow-xs hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* RHS: Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md bg-gradient-to-tr from-vitaluxe-green-900 to-vitaluxe-green-800 p-3 sm:p-4 rounded-3xl shadow-2xl border border-vitaluxe-green-700/50">
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white aspect-4/5 flex items-center justify-center p-6 shadow-inner">
                <img
                  src="/images/hero-showcase.png"
                  alt="Vitaluxe Premium Wellness Showcase"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/500x600/f8fafc/0f5132?text=Vitaluxe+Wellness+Products";
                  }}
                />
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-vitaluxe-gold-100 flex items-center justify-center text-vitaluxe-gold-600">
                  <FaAward className="text-lg" />
                </div>
                <div>
                  <p className="font-header text-xs font-bold text-slate-900">100% Certified</p>
                  <p className="text-[10px] text-slate-500 font-body">Organic Formulations</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-vitaluxe-green-100 flex items-center justify-center text-vitaluxe-green-800">
                  <FaLeaf className="text-lg" />
                </div>
                <div>
                  <p className="font-header text-xs font-bold text-slate-900">Natural Vitality</p>
                  <p className="text-[10px] text-slate-500 font-body">Daily Herbal Boost</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}