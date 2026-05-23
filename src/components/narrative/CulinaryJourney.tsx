import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '../../data/menuData';

const CulinaryJourney = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  // Psychological pricing: strip '$' if present
  const formatPrice = (priceStr: string | undefined) => {
    if (!priceStr) return '';
    return priceStr.replace('$', '').replace('.00', '');
  };

  const currentCategory = menuCategories.find(c => c.id === activeCategory);

  return (
    <section className="py-32 bg-navy-950 relative" id="culinary-journey">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-widest text-sm uppercase font-sans mb-4 block">The Art of Plating</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-pearl mb-6">
            A Culinary <span className="italic text-gold">Journey</span>
          </h2>
        </motion.div>

        {/* Category Explorer */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-sans text-sm tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gold text-navy-950 shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                  : 'bg-navy-900 text-sand-400 hover:text-gold hover:bg-navy-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            >
              {currentCategory?.items.map((item, idx) => (
                <div key={item.id} className="group relative">
                  {item.tags?.includes('chefs-choice') && (
                    <span className="absolute -top-3 -left-3 text-gold text-[10px] uppercase tracking-widest bg-navy-900 px-2 py-1 rounded border border-gold/20 z-10">
                      Signature
                    </span>
                  )}
                  
                  <div className="flex justify-between items-baseline border-b border-navy-800/50 pb-2 mb-3">
                    <h3 className={`font-display text-2xl text-pearl group-hover:text-gold transition-colors duration-300 ${item.tags?.includes('chefs-choice') ? 'text-3xl' : ''}`}>
                      {item.name}
                    </h3>
                    <span className="font-sans text-sand-400 text-lg ml-4">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  
                  <p className="text-sand-300 font-light text-sm leading-relaxed pr-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CulinaryJourney;
