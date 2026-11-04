import React from "react";
import { motion } from "framer-motion";
import { CORE_VALUES } from "../data";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function About() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <span className="text-xs font-header uppercase tracking-widest text-vitaluxe-gold-600 font-bold block">
          About Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-header font-black text-slate-900 tracking-tight">
          About Vitaluxe International
        </h1>
        <p className="text-slate-600 font-body text-lg leading-relaxed">
          Dedicated to promoting holistic vitality through organic natural science and structured wealth creation opportunities worldwide.
        </p>
      </motion.div>

      {/* Full Mission & Vision Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-vitaluxe-green-100 flex items-center justify-center text-vitaluxe-green-800 text-xl font-bold">
            <FaBullseye className="text-vitaluxe-gold-600" />
          </div>
          <div>
            <span className="text-xs font-header uppercase tracking-widest text-vitaluxe-gold-600 font-bold block mb-1">Our Purpose</span>
            <h2 className="text-2xl font-header font-bold text-slate-900">Our Mission</h2>
          </div>
          <p className="text-slate-600 font-body leading-relaxed">
            To provide innovative, high-quality wellness products that improve lives while creating sustainable opportunities for personal growth, financial empowerment, and community development worldwide.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-vitaluxe-green-100 flex items-center justify-center text-vitaluxe-green-800 text-xl font-bold">
            <FaEye className="text-vitaluxe-gold-600" />
          </div>
          <div>
            <span className="text-xs font-header uppercase tracking-widest text-vitaluxe-green-800 font-bold block mb-1">Our Destination</span>
            <h2 className="text-2xl font-header font-bold text-slate-900">Our Vision</h2>
          </div>
          <p className="text-slate-600 font-body leading-relaxed">
            To become a globally trusted leader in health and wellness, empowering millions of people to live healthier, more prosperous, and purpose-driven lives.
          </p>
        </motion.div>
      </div>

      {/* Full Core Values List */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-header font-bold text-slate-900">Our Core Values</h2>
          <p className="text-slate-500 font-body text-sm mt-1">The foundational principles guiding every product and partnership.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-vitaluxe-green-500/50 hover:shadow-md transition-all space-y-2"
            >
              <h3 className="font-header font-bold text-vitaluxe-green-800 text-lg">{val.title}</h3>
              <p className="text-slate-600 text-sm font-body leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}