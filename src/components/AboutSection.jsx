import React from "react";
import { motion } from "framer-motion";
import { CORE_VALUES } from "../data";

export default function AboutSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 space-y-16">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs"
        >
          <span className="text-xs font-header uppercase tracking-widest text-vitaluxe-gold-600 font-bold mb-2 block">Our Purpose</span>
          <h2 className="text-2xl font-header font-bold text-slate-900 mb-4">Our Mission[cite: 3]</h2>
          <p className="text-slate-600 leading-relaxed">
            To provide innovative, high-quality wellness products that improve lives while creating sustainable opportunities for personal growth, financial empowerment, and community development worldwide[cite: 3].
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs"
        >
          <span className="text-xs font-header uppercase tracking-widest text-vitaluxe-green-800 font-bold mb-2 block">Our Destination</span>
          <h2 className="text-2xl font-header font-bold text-slate-900 mb-4">Our Vision[cite: 4]</h2>
          <p className="text-slate-600 leading-relaxed">
            To become a globally trusted leader in health and wellness, empowering millions of people to live healthier, more prosperous, and purpose-driven lives[cite: 4].
          </p>
        </motion.div>
      </div>

      <div>
        <h2 className="text-2xl font-header font-bold text-slate-900 text-center mb-8">Our Core Values[cite: 2]</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-vitaluxe-green-500/50 transition-colors"
            >
              <h3 className="font-header font-bold text-vitaluxe-green-800 mb-2">{val.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}