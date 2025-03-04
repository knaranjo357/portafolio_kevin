import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
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
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // FormSubmit will handle the form submission
    setIsSubmitting(true);
    
    // We'll simulate the form submission process for UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <motion.form
      action="https://formsubmit.co/alejandronaranjo357@gmail.com"
      method="POST"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 md:p-8 premium-gradient-border"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_next" value="https://kevinnaranjo.com/" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New contact form submission!" />
      
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          {t('contact.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field premium-input"
          placeholder={t('contact.yourName')}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          {t('contact.phoneNumber')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input-field premium-input"
          placeholder={t('contact.yourPhone')}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          {t('contact.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field premium-input"
          placeholder={t('contact.yourEmail')}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          {t('contact.writeMessage')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="input-field resize-none premium-input"
          placeholder={t('contact.howCanIHelp')}
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary flex items-center justify-center premium-button"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {t('contact.sending')}
          </span>
        ) : (
          <span className="flex items-center">
            {t('contact.send')} <Send size={16} className="ml-2" />
          </span>
        )}
      </motion.button>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center"
        >
          {t('contact.successMessage')}
        </motion.div>
      )}

      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center"
        >
          {submitError}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;