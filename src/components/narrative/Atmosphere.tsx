import React from 'react';
import { motion } from 'framer-motion';

const Atmosphere = () => {
  return (
    <section className="relative py-32 bg-navy-950 overflow-hidden" id="atmosphere">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-tr-[100px] overflow-hidden relative glass-panel p-2">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Restaurant Atmosphere" 
              className="w-full h-full object-cover rounded-tr-[90px] rounded-bl-[90px]"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-10 -right-10 w-64 aspect-square rounded-tl-[80px] overflow-hidden border-8 border-navy-950 hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
              alt="Wine and Dine" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-display text-pearl mb-6">
            A Symphony of <span className="text-gold italic">Senses</span>
          </h2>
          <div className="w-12 h-1 bg-gold mb-8"></div>
          <p className="text-sand-200 text-lg font-light leading-relaxed mb-6">
            At La Tavola, we believe that dining is not merely about sustenance, but about narrative. Located on the edge of the Mediterranean, every breeze carries a story, and every wave sets the rhythm for your evening.
          </p>
          <p className="text-sand-300 font-light leading-relaxed mb-10">
            Our architecture is designed to dissolve the boundaries between the sea and your table. The ambient glow, the subtle clinking of crystal, and the scent of the ocean combine to create an emotionally immersive sanctuary.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-navy-800">
            <div>
              <p className="text-gold font-display text-4xl mb-2">12</p>
              <p className="text-sand-400 text-sm font-sans tracking-wider uppercase">Signature Tables</p>
            </div>
            <div>
              <p className="text-gold font-display text-4xl mb-2">180°</p>
              <p className="text-sand-400 text-sm font-sans tracking-wider uppercase">Panoramic Views</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Atmosphere;
