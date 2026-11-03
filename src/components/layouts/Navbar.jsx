import { useState } from "react";
import { Link, useLocation } from "react-router";
import { NAV_LINKS } from "../../data";
import { FaBars, FaTimes, FaUserLock } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Header Logo Slot */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-vitaluxe-green-100 flex items-center justify-center border border-vitaluxe-green-500/20 group-hover:scale-105 transition-transform">
              <img 
                src="/icon.png" 
                alt="Vitaluxe Brand Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-xl font-header font-black tracking-wider text-vitaluxe-green-900 block leading-none">
                VITALUXE
              </span>
              <span className="text-[10px] font-header tracking-widest text-vitaluxe-gold-600 uppercase font-bold">
                International Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              const isLogin = link.href === "/login";

              if (isLogin) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center gap-2 bg-vitaluxe-green-800 hover:bg-vitaluxe-green-900 text-white font-header text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
                  >
                    <FaUserLock className="text-vitaluxe-gold-400" />
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-header text-sm font-semibold transition-colors ${
                    isActive ? "text-vitaluxe-green-800 border-b-2 border-vitaluxe-gold-500 pb-1" : "text-slate-600 hover:text-vitaluxe-green-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-vitaluxe-green-900 p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-header text-slate-700 hover:text-vitaluxe-green-800 font-semibold text-base py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}