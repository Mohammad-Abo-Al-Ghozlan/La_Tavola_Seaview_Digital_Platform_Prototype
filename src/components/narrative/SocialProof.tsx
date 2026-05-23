import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "An ethereal experience. The way the sunset colors hit the plate before the first bite is purely poetic. La Tavola doesn't just serve food; they serve memories.",
    author: "Elena R.",
    role: "Gastronomy Critic",
  },
  {
    quote: "The architecture, the sound of the waves, and the incredible attention to detail in every dish makes this the crown jewel of the Mediterranean coast.",
    author: "Marcus V.",
    role: "Local Architect",
  },
  {
    quote: "We flew in just for this reservation. The truffle risotto paired with the sea breeze is an emotion I cannot adequately describe. Unforgettable.",
    author: "Sarah & James",
    role: "Travel Curators",
  }
];

const SocialProof = () => {
  return (
    <section className="relative py-32 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        {/* Subtle background pattern or texture could go here */}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-widest text-sm uppercase font-sans mb-4 block">Echoes of Delight</span>
          <h2 className="text-4xl md:text-5xl font-display text-pearl">
            Words from our <span className="italic">Guests</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="glass-panel p-10 relative group hover:bg-white/5 transition-colors duration-500 rounded-lg"
            >
              <div className="text-gold text-6xl font-display absolute top-4 left-6 opacity-20 group-hover:opacity-40 transition-opacity">"</div>
              <p className="text-sand-200 font-light leading-relaxed mb-8 relative z-10 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-navy-800 border border-gold/30 flex items-center justify-center mr-4">
                  <span className="text-gold font-display">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-pearl font-sans tracking-wide text-sm">{testimonial.author}</p>
                  <p className="text-sand-500 text-xs font-sans uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
