import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaBullseye, FaEye, FaShieldAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-8 sm:p-12 overflow-hidden relative">
        
        {/* Soft Background Accent Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-vitaluxe-gold-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual / Image Slot Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="aspect-4/3 rounded-2xl bg-vitaluxe-green-100/50 border border-vitaluxe-green-500/20 overflow-hidden shadow-inner p-2">
                <img
                  src="/images/about-preview.png"
                  alt="About Vitaluxe"
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x450/e8f5e9/0f5132?text=Vitaluxe+Story";
                  }}
                />
              </div>

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-5 -right-3 bg-vitaluxe-green-900 text-white p-4 rounded-2xl shadow-xl border border-vitaluxe-green-700 flex items-center gap-3"
              >
                <div className="p-2.5 bg-vitaluxe-gold-500 rounded-xl text-vitaluxe-navy-950 font-bold">
                  <FaShieldAlt className="text-lg" />
                </div>
                <div>
                  <p className="font-header text-xs font-bold text-vitaluxe-gold-300 uppercase tracking-wider">Our Promise</p>
                  <p className="font-header text-sm font-black text-white">Wellness First</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-header uppercase tracking-widest text-vitaluxe-gold-600 font-bold block mb-2">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-header font-extrabold text-slate-900 tracking-tight leading-tight">
                Pioneering Natural Vitality & Global Empowerment
              </h2>
            </div>

            <p className="text-slate-600 font-body text-base sm:text-lg leading-relaxed">
              Vitaluxe International LTD combines high-grade organic formulations with an inclusive compensation structure designed to elevate standard living, health resilience, and economic potential.
            </p>

            {/* Concise Mission & Vision Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-vitaluxe-green-800 font-header text-sm font-bold">
                  <FaBullseye className="text-vitaluxe-gold-600" /> Our Mission
                </div>
                <p className="text-slate-600 text-xs font-body leading-normal line-clamp-2">
                  Providing innovative wellness products while creating sustainable growth and financial empowerment worldwide.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-vitaluxe-green-800 font-header text-sm font-bold">
                  <FaEye className="text-vitaluxe-gold-600" /> Our Vision
                </div>
                <p className="text-slate-600 text-xs font-body leading-normal line-clamp-2">
                  To become a globally trusted leader empowering millions to live healthier, purpose-driven lives.
                </p>
              </div>
            </div>

            {/* Read More CTA */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-vitaluxe-green-800 hover:bg-vitaluxe-green-900 text-white font-header font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Read Our Full Story <FaArrowRight className="text-vitaluxe-gold-400 text-xs" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}