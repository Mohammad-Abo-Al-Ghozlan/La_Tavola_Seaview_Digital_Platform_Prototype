import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Arrival = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy-950">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
          alt="Seaview Mediterranean Restaurant"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-overlay" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.3em] text-sm md:text-base uppercase mb-6 font-sans font-light"
        >
          A Seaside Culinary Story
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl text-pearl font-display leading-tight mb-8"
        >
          Where the Ocean <br/> Meets the Plate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-sand-200 font-sans font-light max-w-2xl mx-auto mb-12"
        >
          Experience Mediterranean dining redefined. Every dish is a narrative of tradition, passion, and the endless horizon.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-sand-400 text-sm font-sans tracking-widest uppercase mb-4 opacity-70">Begin the Journey</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-6 h-6 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Arrival;
