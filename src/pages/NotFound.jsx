import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaHome, FaShoppingBag, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center bg-gradient-to-b from-vitaluxe-gold-100/30 via-vitaluxe-bg to-white px-4 py-16 overflow-hidden">
      
      {/* Background Floating Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-10, 10, -10],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-1/4 w-72 h-72 bg-vitaluxe-green-100 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [-15, 15, -15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-1/4 w-80 h-80 bg-vitaluxe-gold-100 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-8">
        
        {/* Animated Icon & 404 Header Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative inline-block"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl bg-white shadow-xl border border-slate-200/80 flex items-center justify-center text-vitaluxe-green-800">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaExclamationTriangle className="text-4xl sm:text-5xl text-vitaluxe-gold-500" />
            </motion.div>
          </div>

          <span className="absolute -bottom-3 -right-2 bg-vitaluxe-green-900 text-white font-header text-xs font-bold px-3 py-1 rounded-full shadow-md border border-vitaluxe-green-700">
            Error 404
          </span>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-5xl font-header font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-600 font-body text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            The page you are looking for might have been moved, removed, or never existed in our wellness repository.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-vitaluxe-green-800 hover:bg-vitaluxe-green-900 text-white font-header font-bold px-6 py-3.5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <FaHome className="text-vitaluxe-gold-400" />
            Back to Home
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-header font-bold px-6 py-3.5 rounded-xl border border-slate-300 shadow-xs transition-all hover:border-vitaluxe-gold-500 hover:-translate-y-0.5"
          >
            <FaShoppingBag className="text-vitaluxe-green-800" />
            Browse Products
          </Link>
        </motion.div>

        {/* Go Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-xs font-header font-bold text-slate-500 hover:text-vitaluxe-green-800 transition-colors cursor-pointer"
          >
            <FaArrowLeft /> Go back to previous page
          </button>
        </motion.div>

      </div>
    </div>
  );
}