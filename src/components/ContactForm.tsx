import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
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
    
    // FormSubmit works via standard HTML action, but we prevent default to show a premium success state
    // In a real scenario, you'd fetch() the POST request
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

  if (submitSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4">{t('contact.successMessage')}</h3>
        <button 
          onClick={() => setSubmitSuccess(false)}
          className="text-gold font-bold uppercase tracking-widest text-xs hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      action="https://formsubmit.co/alejandronaranjo357@gmail.com"
      method="POST"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Nuevo contacto desde Portafolio!" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-4 text-slate-900 focus:outline-none focus:border-gold transition-all duration-300 peer placeholder-transparent"
            placeholder={t('contact.name')}
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-4 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-black peer-not-placeholder-shown:uppercase"
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
            className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-4 text-slate-900 focus:outline-none focus:border-gold transition-all duration-300 peer placeholder-transparent"
            placeholder={t('contact.phoneNumber')}
          />
          <label
            htmlFor="phone"
            className="absolute left-0 top-4 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-black peer-not-placeholder-shown:uppercase"
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
          className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-4 text-slate-900 focus:outline-none focus:border-gold transition-all duration-300 peer placeholder-transparent"
          placeholder={t('contact.email')}
        />
        <label
          htmlFor="email"
          className="absolute left-0 top-4 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-black peer-not-placeholder-shown:uppercase"
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
          className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-4 text-slate-900 focus:outline-none focus:border-gold transition-all duration-300 peer placeholder-transparent resize-none"
          placeholder={t('contact.writeMessage')}
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-0 top-4 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:font-black peer-not-placeholder-shown:uppercase"
        >
          {t('contact.howCanIHelp')}
        </label>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-gold transition-all duration-500 shadow-xl hover:shadow-gold/20"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <>
            {t('contact.send')} <Send size={18} />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;