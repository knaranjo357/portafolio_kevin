import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, MessageSquare, Github, Linkedin, Globe, Shield, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import BackgroundParticles from '../components/BackgroundParticles';
import GeometricShapes from '../components/GeometricShapes';
import AnimatedText from '../components/AnimatedText';
import SEOHelmet from '../components/SEOHelmet';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const whatsappUrl = 'https://wa.me/573175816061?text=Hola%20Kevin%2C%20quiero%20conversar%20sobre%20un%20proyecto.';
  const sendMessageWords = t('contact.sendMessage').split(' ');
  const sendMessageLead = sendMessageWords.slice(0, -1).join(' ');
  const sendMessageAccent = sendMessageWords[sendMessageWords.length - 1];
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={32} />,
      url: 'https://github.com/kevin0naranjo',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={32} />,
      url: 'https://www.linkedin.com/in/kevin-alejandro-naranjo-reyes-2573351a2/',
    }
  ];

  return (
    <div className="mesh-gradient min-h-screen selection:bg-gold/30 selection:text-slate-900">
      <SEOHelmet title={t('contact.title')} description={t('contact.subtitle')} />
      <BackgroundParticles />
      
      {/* Hero Section - The Connection */}
      <section className="relative flex min-h-[52vh] items-center overflow-hidden pb-16 pt-28 md:pt-32">
        <GeometricShapes />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
              <AnimatedText text={t('contact.startConversation').split(' ').slice(0, 2).join(' ')} className="inline-block" />
              {' '}
              <span className="text-gold italic text-glow-gold drop-shadow-2xl">
                {t('contact.startConversation').split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="text-slate-500 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed mt-10">
              {t('contact.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#project-form" className="btn btn-primary px-7 py-4 sm:px-9">
                {t('contact.formCta')}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-2 border-slate-200 px-7 py-4 sm:px-9">
                <MessageSquare size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
            {/* Contact Information Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="mb-12">
                <SectionTitle
                  title={t('contact.contactWhatsapp')}
                  subtitle={t('contact.dontHesitate')}
                />
              </div>
              
              <div className="space-y-10 mt-16">
                {[
                  { icon: <MapPin size={32} />, title: t('contact.locationTitle'), value: "Global / Santander, Colombia", desc: t('contact.locationDesc') },
                  { icon: <Mail size={32} />, title: t('contact.email'), value: "alejandronaranjo357@gmail.com", isLink: true, href: "mailto:alejandronaranjo357@gmail.com" },
                  { icon: <MessageSquare size={32} />, title: t('contact.phone'), value: "+57 3175816061", isLink: true, href: whatsappUrl }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card group flex items-start rounded-[2rem] border-slate-100 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-white/80 md:p-8"
                  >
                    <div className="mr-5 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-[1.25rem] border border-slate-100 bg-slate-50 text-gold shadow-sm transition-all duration-300 group-hover:bg-slate-900 group-hover:text-gold md:mr-8 md:h-20 md:w-20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{item.title}</h3>
                      {item.isLink ? (
                        <a href={item.href} className="break-all text-lg font-black tracking-tight text-slate-900 transition-colors hover:text-gold sm:text-xl md:text-2xl">{item.value}</a>
                      ) : (
                        <p className="text-slate-900 font-black text-2xl tracking-tight">{item.value}</p>
                      )}
                      {item.desc && <p className="text-slate-500 font-light mt-3 leading-relaxed text-sm">{item.desc}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Direct Social Link Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-24 p-12 glass-card-dark rounded-[2.5rem] border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-gold/10 transition-colors">
                  <Globe size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-10">{t('contact.followSocial')}</h3>
                  <div className="flex flex-wrap gap-8">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 glass-card border-white/10 rounded-2xl flex items-center justify-center text-white/40 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-500 shadow-xl"
                        whileHover={{ y: -8, scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                        viewport={{ once: true }}
                        aria-label={link.name}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow flex items-center justify-center gap-4 bg-gold text-white rounded-2xl px-10 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-2xl shadow-gold/20 font-black uppercase tracking-widest text-xs"
                    >
                      <MessageSquare size={20} /> {t('contact.contactWhatsappBtn')}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form Column - Glassmorphic Container */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              id="project-form"
              className="order-1 scroll-mt-28 lg:order-2 lg:sticky lg:top-32"
            >
              <div className="premium-card group relative overflow-hidden bg-white p-6 sm:p-10 xl:p-12">
                {/* Decorative Elements */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-colors duration-500"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-slate-50 rounded-xl text-gold">
                      <Sparkles size={24} />
                    </div>
                    <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-slate-900 sm:text-4xl">
                      {sendMessageLead} <span className="text-gold italic">{sendMessageAccent}</span>
                    </h2>
                  </div>
                  <p className="text-slate-500 mb-12 font-light text-lg leading-relaxed max-w-sm">{t('contact.formSubtitle')}</p>
                  <ContactForm />
                </div>
              </div>

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-10 flex items-center justify-center gap-4 p-6 glass-card border-slate-100"
              >
                <span className="relative flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.16em]">{t('contact.availability')}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Discovery Section */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50/50 py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center md:mb-20">
              <SectionTitle
                title={t('contact.faq')}
                subtitle={t('contact.faqDesc')}
                center={true}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { question: t('contact.faq1Q'), answer: t('contact.faq1A'), icon: <Shield size={24} /> },
                { question: t('contact.faq2Q'), answer: t('contact.faq2A'), icon: <Sparkles size={24} /> },
                { question: t('contact.faq3Q'), answer: t('contact.faq3A'), icon: <Globe size={24} /> },
                { question: t('contact.faq4Q'), answer: t('contact.faq4A'), icon: <MessageSquare size={24} /> },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="premium-card group bg-white p-8 transition-all duration-300 hover:border-gold/30 md:p-10"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-gold group-hover:bg-slate-900 group-hover:text-gold transition-all duration-500">
                      {faq.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">{faq.question}</h3>
                  </div>
                  <p className="text-slate-500 font-light leading-relaxed text-lg text-justify">{faq.answer}</p>
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
