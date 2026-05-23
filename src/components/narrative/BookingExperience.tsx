import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const BookingExperience = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
  });

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <section className="relative py-32 bg-navy-950 overflow-hidden" id="reserve">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop"
          alt="Sunset Dining"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-widest text-sm uppercase font-sans mb-4 block">Secure Your Moment</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-pearl mb-6">
            Reserve Your <span className="italic text-gold">Table</span>
          </h2>
          <p className="text-sand-300 max-w-lg mx-auto font-light">
            Due to our intimate setting and high demand, we recommend securing your reservation well in advance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full glass-panel p-8 md:p-12 rounded-2xl border border-gold/10"
        >
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.form 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="relative">
                  <label className="text-sand-400 text-xs uppercase tracking-wider mb-2 block">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                    <input 
                      type="date" 
                      className="w-full bg-navy-900/50 border border-navy-700 text-pearl py-4 pl-12 pr-4 rounded-lg focus:outline-none focus:border-gold/50 transition-colors"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-sand-400 text-xs uppercase tracking-wider mb-2 block">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                    <select 
                      className="w-full bg-navy-900/50 border border-navy-700 text-pearl py-4 pl-12 pr-4 rounded-lg focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="">Select Time</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label className="text-sand-400 text-xs uppercase tracking-wider mb-2 block">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                    <select 
                      className="w-full bg-navy-900/50 border border-navy-700 text-pearl py-4 pl-12 pr-4 rounded-lg focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-3 flex justify-center mt-6">
                  <button 
                    onClick={handleNext}
                    className="group flex items-center gap-4 bg-gold hover:bg-gold/90 text-navy-950 px-10 py-4 rounded-full transition-all duration-300 font-sans tracking-widest uppercase text-sm"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <h3 className="text-2xl font-display text-pearl mb-4">Request Received</h3>
                <p className="text-sand-300 font-light mb-8">
                  Our concierge will contact you shortly to confirm your reservation for {formData.guests} guests on {formData.date || 'the selected date'} at {formData.time || 'the selected time'}.
                </p>
                <button 
                  onClick={() => setStep(1)}
                  className="text-gold border border-gold hover:bg-gold/10 px-8 py-3 rounded-full transition-colors font-sans tracking-widest uppercase text-xs"
                >
                  Make Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingExperience;
