import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageSquare, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import AnimatedText from '../components/AnimatedText';
import BackgroundParticles from '../components/BackgroundParticles';
import GeometricShapes from '../components/GeometricShapes';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/kevin0naranjo',
      color: 'bg-slate-800 hover:bg-slate-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/kevin-alejandro-naranjo-reyes-2573351a2/',
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      <BackgroundParticles />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 relative overflow-hidden">
        <GeometricShapes />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            >
              {t('contact.title')}
            </motion.h1>
            <AnimatedText
              text={t('contact.subtitle')}
              className="text-xl text-slate-600 mb-8"
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -left-20 top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl hidden lg:block"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -right-20 bottom-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl hidden lg:block"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title={t('contact.contactWhatsapp')}
                subtitle={t('contact.dontHesitate')}
              />
              
              <div className="space-y-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t('contact.location')}</h3>
                    <p className="text-slate-600">Colombia, Santander</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t('contact.email')}</h3>
                    <a
                      href="mailto:alejandronaranjo357@gmail.com"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      alejandronaranjo357@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t('contact.phone')}</h3>
                    <a
                      href="tel:+573175816061"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      +57 3175816061
                    </a>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <a
                    href="https://wa.me/573175816061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full flex items-center justify-center premium-button"
                  >
                    <MessageSquare size={20} className="mr-2" /> {t('contact.contactWhatsappBtn')}
                  </a>
                </motion.div>
              </div>
              
              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-xl font-semibold mb-6">{t('contact.followSocial')}</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 rounded-lg text-white ${link.color} transition-all duration-300 premium-button` }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title={t('contact.sendMessage')}
                subtitle={t('contact.formSubtitle')}
              />
              
              <ContactForm />
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute right-0 top-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl hidden lg:block"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute left-0 bottom-1/3 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl hidden lg:block"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title={t('contact.faq')}
              subtitle={t('contact.faqDesc')}
              center={true}
            />
            
            <div className="mt-12 space-y-6">
              {[
                {
                  question: t('contact.faq1Q'),
                  answer: t('contact.faq1A'),
                },
                {
                  question: t('contact.faq2Q'),
                  answer: t('contact.faq2A'),
                },
                {
                  question: t('contact.faq3Q'),
                  answer: t('contact.faq3A'),
                },
                {
                  question: t('contact.faq4Q'),
                  answer: t('contact.faq4A'),
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md premium-card"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute left-0 bottom-0 w-full h-40 bg-gradient-to-t from-slate-100/50 to-transparent hidden lg:block"
        />
        <motion.div 
          className="absolute left-10 bottom-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl hidden lg:block"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>
    </div>
  );
};

export default Contact;