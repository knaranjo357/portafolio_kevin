import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageSquare, Github, Linkedin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import AnimatedText from '../components/AnimatedText';

const Contact: React.FC = () => {
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
              }
              }
  )
}