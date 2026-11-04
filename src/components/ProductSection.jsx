import React, { useMemo } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { PRODUCTS } from "../data";
import { FaArrowRight } from "react-icons/fa";
import { shuffleArray } from "../utils/utils";

export default function ProductsSection({ limit }) {
  const displayedProducts = useMemo(() => {
    if (limit) {
      const shuffled = shuffleArray(PRODUCTS);
      return shuffled.slice(0, limit);
    }
    return PRODUCTS;
  }, [limit]);

  return (
    <section className="py-20 bg-vitaluxe-green-900 text-white border-y border-vitaluxe-green-800 my-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-header uppercase tracking-widest text-vitaluxe-gold-400 font-bold block mb-2">
              Natural Formulations
            </span>
            <h2 className="text-3xl sm:text-4xl font-header font-bold text-white">
              Premium Wellness Products
            </h2>
            <p className="text-vitaluxe-green-100 text-sm sm:text-base mt-2 max-w-xl">
              Natural formulations crafted for health, energy, and complete
              vitality.
            </p>
          </div>

          {limit && (
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-header text-sm font-bold text-vitaluxe-gold-400 hover:text-vitaluxe-gold-300 transition-colors self-start sm:self-auto"
            >
              View All Products <FaArrowRight />
            </Link>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between text-slate-800 border border-vitaluxe-green-800/20"
            >
              {/* Product Image Placeholder Slot */}
              <div className="h-52 bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="max-h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/300x200/e8f5e9/0f5132?text=Vitaluxe+Product";
                  }}
                />
              </div>

              {/* Product Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-header font-bold text-vitaluxe-gold-600 uppercase tracking-wider">
                      {prod.category}
                    </span>
                    <span className="text-xs font-header font-bold bg-vitaluxe-green-100 text-vitaluxe-green-900 px-2.5 py-0.5 rounded-full">
                      PV: {prod.pv}
                    </span>
                  </div>
                  <h3 className="text-lg font-header font-bold text-slate-900 mt-1 mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {prod.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xl font-header font-bold text-vitaluxe-green-900">
                    {prod.price}
                  </span>
                  <Link
                    to={`/products/${prod.id}`}
                    className="bg-vitaluxe-gold-500 hover:bg-vitaluxe-gold-600 text-vitaluxe-navy-950 font-header text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-xs"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
