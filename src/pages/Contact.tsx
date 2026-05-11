import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageSquare, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import BackgroundParticles from '../components/BackgroundParticles';
import GeometricShapes from '../components/GeometricShapes';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/kevin0naranjo',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/kevin-alejandro-naranjo-reyes-2573351a2/',
    }
  ];

  return (
    <div className="pt-16 mesh-gradient min-h-screen">
      <BackgroundParticles />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <GeometricShapes />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 tracking-tighter">
              {t('contact.startConversation').split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase().includes('conversation') || word.toLowerCase().includes('conversación') ? 'text-gold italic' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
              
              <div className="space-y-8 mt-12">
                {[
                  { icon: <MapPin size={24} />, title: t('contact.location'), value: "Santander, Colombia" },
                  { icon: <Mail size={24} />, title: t('contact.email'), value: "alejandronaranjo357@gmail.com", isLink: true, href: "mailto:alejandronaranjo357@gmail.com" },
                  { icon: <Phone size={24} />, title: t('contact.phone'), value: "+57 3175816061", isLink: true, href: "tel:+573175816061" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start group"
                  >
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 mr-6 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</h3>
                      {item.isLink ? (
                        <a href={item.href} className="text-slate-900 font-bold text-lg hover:text-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-slate-900 font-bold text-lg">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <a
                    href="https://wa.me/573175816061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full flex items-center justify-center group"
                  >
                    <MessageSquare size={20} className="mr-3 group-hover:rotate-12 transition-transform" /> {t('contact.contactWhatsappBtn')}
                  </a>
                </motion.div>
              </div>
              
              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-20"
              >
                <h3 className="text-gold text-xs font-black uppercase tracking-widest mb-8">{t('contact.followSocial')}</h3>
                <div className="flex flex-wrap gap-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 shadow-sm"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {link.icon}
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
              className="premium-card p-12 bg-white"
            >
              <h2 className="text-3xl font-black mb-2 text-slate-900 tracking-tighter uppercase">{t('contact.sendMessage')}</h2>
              <p className="text-slate-500 mb-8 font-light text-sm">{t('contact.formSubtitle')}</p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title={t('contact.faq')}
              subtitle={t('contact.faqDesc')}
              center={true}
            />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { question: t('contact.faq1Q'), answer: t('contact.faq1A') },
                { question: t('contact.faq2Q'), answer: t('contact.faq2A') },
                { question: t('contact.faq3Q'), answer: t('contact.faq3A') },
                { question: t('contact.faq4Q'), answer: t('contact.faq4A') },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="premium-card p-8 hover:border-gold/30 transition-all duration-500 bg-white"
                >
                  <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">{faq.question}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;