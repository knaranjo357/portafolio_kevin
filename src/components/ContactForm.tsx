import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      setIsSubmitting(false);
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }
    }).catch(error => {
      setIsSubmitting(false);
      console.error(error);
    });

    e.preventDefault();
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="text-center py-20 px-8 glass-card border-green-500/20 bg-green-500/5 rounded-[2.5rem]"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30"
            >
              <CheckCircle size={48} />
            </motion.div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{t('contact.successMessage')}</h3>
            <p className="text-slate-500 font-light mb-10 max-w-sm mx-auto">
              I'll review your inquiry and get back to you within 24 hours. Let's build something epic!
            </p>
            <button 
              onClick={() => setSubmitSuccess(false)}
              className="group flex items-center gap-3 mx-auto text-gold font-black uppercase tracking-[0.2em] text-xs hover:text-slate-900 transition-colors"
            >
              {t('projects.clearFilters')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action="https://formsubmit.co/alejandronaranjo357@gmail.com"
            method="POST"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nuevo contacto desde Portafolio!" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-slate-900 focus:outline-none focus:border-gold transition-all duration-500 peer placeholder-transparent font-medium"
                  placeholder={t('contact.name')}
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-5 text-slate-400 text-lg transition-all duration-500 peer-focus:-top-6 peer-focus:text-gold peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-black peer-not-placeholder-shown:uppercase pointer-events-none"
                >
                  {t('contact.name')}
                </label>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-slate-900 focus:outline-none focus:border-gold transition-all duration-500 peer placeholder-transparent font-medium"
                  placeholder={t('contact.phoneNumber')}
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-5 text-slate-400 text-lg transition-all duration-500 peer-focus:-top-6 peer-focus:text-gold peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-black peer-not-placeholder-shown:uppercase pointer-events-none"
                >
                  {t('contact.phoneNumber')}
                </label>
              </div>
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-slate-900 focus:outline-none focus:border-gold transition-all duration-500 peer placeholder-transparent font-medium"
                placeholder={t('contact.email')}
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-5 text-slate-400 text-lg transition-all duration-500 peer-focus:-top-6 peer-focus:text-gold peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-black peer-not-placeholder-shown:uppercase pointer-events-none"
              >
                {t('contact.email')}
              </label>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-slate-900 focus:outline-none focus:border-gold transition-all duration-500 peer placeholder-transparent resize-none font-medium leading-relaxed"
                placeholder={t('contact.writeMessage')}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-5 text-slate-400 text-lg transition-all duration-500 peer-focus:-top-6 peer-focus:text-gold peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-black peer-not-placeholder-shown:uppercase pointer-events-none"
              >
                {t('contact.howCanIHelp')}
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-white py-7 rounded-[1.5rem] font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-gold transition-all duration-700 shadow-2xl hover:shadow-gold/30 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  {t('contact.send')} <Send size={20} />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;