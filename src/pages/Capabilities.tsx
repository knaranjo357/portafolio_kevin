import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Network,
  Rocket,
  ScanEye,
  ServerCog,
  Sparkles,
  Workflow,
} from 'lucide-react';
import BackgroundParticles from '../components/BackgroundParticles';
import SEOHelmet from '../components/SEOHelmet';

type Capability = {
  title: string;
  description: string;
  proof: string;
  icon: React.ReactNode;
  tools: string[];
};

type ToolGroup = {
  label: string;
  icon: React.ReactNode;
  tools: string[];
};

const Capabilities: React.FC = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language.toLowerCase().startsWith('en');

  const copy = isEnglish
    ? {
        eyebrow: 'Capabilities · Evidence · Range',
        title: 'I build across the entire product system.',
        intro: 'My value is not a percentage next to a framework. It is the ability to understand an operation, choose the right architecture, build the critical parts, and carry the product into production.',
        principleTitle: 'Capabilities, not arbitrary scores.',
        principleBody: 'A tool is useful in context. The map below shows where I create value and the stack I can activate for each problem—backed by systems already designed, shipped, and evolved.',
        metrics: [
          ['14', 'documented systems'],
          ['END → END', 'product ownership'],
          ['PRODUCTION', 'delivery mindset'],
        ],
        capabilityLabel: 'Where I create value',
        capabilityTitle: 'From ambiguous problem to dependable system.',
        capabilityBody: 'I move between product, software, data, intelligence, infrastructure, and operations without losing the thread of the business problem.',
        capabilities: [
          {
            title: 'Product & full-stack engineering',
            description: 'I translate workflows into clear product experiences, robust APIs, data models, and maintainable application architecture.',
            proof: 'Delivered operational platforms for restaurants, quoting, tourism, events, diagnostics, dashboards, and IoT management.',
            icon: <Layers3 size={28} />,
            tools: ['React', 'TypeScript', 'FastAPI', 'Node.js', 'PostgreSQL'],
          },
          {
            title: 'Applied AI & computer vision',
            description: 'I turn models into decision support: forecasting, risk classification, object detection, tracking, and edge inference.',
            proof: 'Built environmental forecasts, fraud-risk prioritization, and edge traffic analysis on constrained hardware.',
            icon: <BrainCircuit size={28} />,
            tools: ['Python', 'TensorFlow', 'PyTorch', 'YOLO', 'OpenCV'],
          },
          {
            title: 'IoT, edge & automation',
            description: 'I connect devices, firmware, field operations, messaging, and automated workflows into observable systems.',
            proof: 'Integrated environmental devices, serial communication, MQTT, firmware workflows, Jetson edge systems, and business automation.',
            icon: <Network size={28} />,
            tools: ['MQTT', 'C++', 'Jetson Nano', 'n8n', 'Selenium'],
          },
          {
            title: 'Cloud, data & reliable delivery',
            description: 'I design the path to production: persistence, migrations, containers, cloud services, testing, observability, and recovery.',
            proof: 'Shipped AWS and containerized platforms with PostgreSQL migrations, CI/CD practices, portable backups, and automated verification.',
            icon: <CloudCog size={28} />,
            tools: ['AWS', 'Docker', 'Alembic', 'Terraform', 'GitHub Actions'],
          },
        ] as Capability[],
        stackLabel: 'Technical range',
        stackTitle: 'A broad stack, organized by what it enables.',
        stackBody: 'These are technologies I use or have used in delivered systems. The emphasis is always on sound engineering judgment, not collecting logos.',
        toolGroups: [
          { label: 'Languages & foundations', icon: <Code2 size={21} />, tools: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C++', 'HTML', 'CSS', 'Bash'] },
          { label: 'Product interfaces', icon: <Blocks size={21} />, tools: ['React', 'React Native', 'Vue', 'Angular', 'Vite', 'Tailwind CSS', 'SASS', 'Framer Motion', 'PWA', 'Chart.js', 'jsPDF'] },
          { label: 'Backend & integrations', icon: <ServerCog size={21} />, tools: ['FastAPI', 'Node.js', 'Express', 'Flask', 'Django', 'REST', 'GraphQL', 'WebSockets', 'Socket.io', 'Pydantic', 'WhatsApp APIs'] },
          { label: 'Data & analytics', icon: <Database size={21} />, tools: ['PostgreSQL', 'SQLite', 'MongoDB', 'Redis', 'Firebase', 'DynamoDB', 'Pandas', 'NumPy', 'OpenPyXL', 'ETL', 'Alembic'] },
          { label: 'AI & vision', icon: <ScanEye size={21} />, tools: ['TensorFlow / Keras', 'PyTorch', 'Scikit-learn', 'XGBoost', 'OpenCV', 'YOLO', 'FastMOT', 'LSTM', 'TensorRT', 'OpenAI API', 'LLM orchestration'] },
          { label: 'Cloud & delivery', icon: <GitBranch size={21} />, tools: ['AWS Lambda', 'AWS IoT Core', 'EC2', 'S3', 'RDS', 'Docker', 'Docker Compose', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Linux'] },
          { label: 'Edge & automation', icon: <Cpu size={21} />, tools: ['MQTT', 'Jetson Nano', 'C++ firmware', 'Serial communication', 'n8n', 'Selenium', 'Thermal printing', 'Workflow automation'] },
          { label: 'Engineering practice', icon: <Workflow size={21} />, tools: ['System architecture', 'Product discovery', 'Automated testing', 'API design', 'Data migrations', 'Observability', 'Performance', 'Accessibility', 'Technical leadership'] },
        ] as ToolGroup[],
        contributionLabel: 'How I operate',
        contributionTitle: 'The range is technical. The differentiator is ownership.',
        contributions: [
          ['Frame the right problem', 'Connect business context, user needs, constraints, and success criteria before committing to a solution.'],
          ['Architect for change', 'Separate concerns, protect data, and choose foundations that can evolve without slowing the team down.'],
          ['Build the hard parts', 'Stay hands-on across UI, APIs, data, AI, integrations, infrastructure, and debugging.'],
          ['Raise the delivery bar', 'Add testing, documentation, security, accessibility, observability, and operational clarity.'],
        ],
        ctaTitle: 'See the evidence behind the capability map.',
        ctaBody: 'Each case study connects the problem, my contribution, the architecture, and the outcome—without hiding behind a list of tools.',
        ctaProjects: 'Explore case studies',
        ctaContact: 'Discuss a role',
      }
    : {
        eyebrow: 'Capacidades · Evidencia · Amplitud',
        title: 'Construyo a través de todo el sistema de producto.',
        intro: 'Mi valor no es un porcentaje al lado de un framework. Es la capacidad de entender una operación, elegir la arquitectura adecuada, construir las partes críticas y llevar el producto a producción.',
        principleTitle: 'Capacidades, no puntajes arbitrarios.',
        principleBody: 'Una herramienta solo tiene sentido dentro de un contexto. Este mapa muestra dónde genero valor y el stack que puedo activar para cada problema, respaldado por sistemas que ya diseñé, entregué y evolucioné.',
        metrics: [
          ['14', 'sistemas documentados'],
          ['END → END', 'responsabilidad de producto'],
          ['PRODUCCIÓN', 'mentalidad de entrega'],
        ],
        capabilityLabel: 'Dónde genero valor',
        capabilityTitle: 'De un problema ambiguo a un sistema confiable.',
        capabilityBody: 'Me muevo entre producto, software, datos, inteligencia, infraestructura y operación sin perder el hilo del problema de negocio.',
        capabilities: [
          {
            title: 'Ingeniería de producto y full stack',
            description: 'Traduzco flujos de trabajo en experiencias claras, APIs robustas, modelos de datos y arquitecturas de aplicación mantenibles.',
            proof: 'He entregado plataformas operativas para restaurantes, cotización, turismo, eventos, diagnósticos, analítica e IoT.',
            icon: <Layers3 size={28} />,
            tools: ['React', 'TypeScript', 'FastAPI', 'Node.js', 'PostgreSQL'],
          },
          {
            title: 'IA aplicada y visión artificial',
            description: 'Convierto modelos en apoyo para decisiones: pronóstico, clasificación de riesgo, detección, seguimiento e inferencia en edge.',
            proof: 'Construí pronóstico ambiental, priorización por riesgo de fraude y análisis de tráfico en hardware limitado.',
            icon: <BrainCircuit size={28} />,
            tools: ['Python', 'TensorFlow', 'PyTorch', 'YOLO', 'OpenCV'],
          },
          {
            title: 'IoT, edge y automatización',
            description: 'Conecto dispositivos, firmware, operaciones de campo, mensajería y flujos automáticos en sistemas observables.',
            proof: 'Integré dispositivos ambientales, comunicación serial, MQTT, firmware, sistemas Jetson y automatización de negocio.',
            icon: <Network size={28} />,
            tools: ['MQTT', 'C++', 'Jetson Nano', 'n8n', 'Selenium'],
          },
          {
            title: 'Cloud, datos y entrega confiable',
            description: 'Diseño el camino a producción: persistencia, migraciones, contenedores, servicios cloud, pruebas, observabilidad y recuperación.',
            proof: 'Entregué plataformas en AWS y contenedores con migraciones PostgreSQL, CI/CD, respaldos portables y verificación automática.',
            icon: <CloudCog size={28} />,
            tools: ['AWS', 'Docker', 'Alembic', 'Terraform', 'GitHub Actions'],
          },
        ] as Capability[],
        stackLabel: 'Amplitud técnica',
        stackTitle: 'Un stack amplio, organizado por lo que permite lograr.',
        stackBody: 'Son tecnologías que utilizo o he utilizado en sistemas entregados. El énfasis siempre está en el criterio de ingeniería, no en coleccionar logos.',
        toolGroups: [
          { label: 'Lenguajes y fundamentos', icon: <Code2 size={21} />, tools: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C++', 'HTML', 'CSS', 'Bash'] },
          { label: 'Interfaces de producto', icon: <Blocks size={21} />, tools: ['React', 'React Native', 'Vue', 'Angular', 'Vite', 'Tailwind CSS', 'SASS', 'Framer Motion', 'PWA', 'Chart.js', 'jsPDF'] },
          { label: 'Backend e integraciones', icon: <ServerCog size={21} />, tools: ['FastAPI', 'Node.js', 'Express', 'Flask', 'Django', 'REST', 'GraphQL', 'WebSockets', 'Socket.io', 'Pydantic', 'APIs de WhatsApp'] },
          { label: 'Datos y analítica', icon: <Database size={21} />, tools: ['PostgreSQL', 'SQLite', 'MongoDB', 'Redis', 'Firebase', 'DynamoDB', 'Pandas', 'NumPy', 'OpenPyXL', 'ETL', 'Alembic'] },
          { label: 'IA y visión', icon: <ScanEye size={21} />, tools: ['TensorFlow / Keras', 'PyTorch', 'Scikit-learn', 'XGBoost', 'OpenCV', 'YOLO', 'FastMOT', 'LSTM', 'TensorRT', 'OpenAI API', 'Orquestación LLM'] },
          { label: 'Cloud y entrega', icon: <GitBranch size={21} />, tools: ['AWS Lambda', 'AWS IoT Core', 'EC2', 'S3', 'RDS', 'Docker', 'Docker Compose', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Linux'] },
          { label: 'Edge y automatización', icon: <Cpu size={21} />, tools: ['MQTT', 'Jetson Nano', 'Firmware C++', 'Comunicación serial', 'n8n', 'Selenium', 'Impresión térmica', 'Automatización de flujos'] },
          { label: 'Práctica de ingeniería', icon: <Workflow size={21} />, tools: ['Arquitectura de sistemas', 'Descubrimiento de producto', 'Pruebas automáticas', 'Diseño de APIs', 'Migraciones de datos', 'Observabilidad', 'Rendimiento', 'Accesibilidad', 'Liderazgo técnico'] },
        ] as ToolGroup[],
        contributionLabel: 'Cómo trabajo',
        contributionTitle: 'La amplitud es técnica. El diferencial es asumir responsabilidad.',
        contributions: [
          ['Enmarcar el problema correcto', 'Conecto contexto de negocio, necesidades de usuario, restricciones y criterios de éxito antes de comprometer una solución.'],
          ['Arquitectar para el cambio', 'Separo responsabilidades, protejo los datos y elijo bases que puedan evolucionar sin frenar al equipo.'],
          ['Construir las partes difíciles', 'Me mantengo hands-on en interfaz, APIs, datos, IA, integraciones, infraestructura y depuración.'],
          ['Elevar el estándar de entrega', 'Incorporo pruebas, documentación, seguridad, accesibilidad, observabilidad y claridad operativa.'],
        ],
        ctaTitle: 'Mira la evidencia detrás del mapa de capacidades.',
        ctaBody: 'Cada caso conecta el problema, mi aporte, la arquitectura y el resultado, sin esconderse detrás de una lista de herramientas.',
        ctaProjects: 'Explorar casos de estudio',
        ctaContact: 'Conversar sobre un rol',
      };

  return (
    <div className="min-h-screen bg-white selection:bg-gold/25 selection:text-slate-950">
      <SEOHelmet
        title={isEnglish ? 'Technical Capabilities' : 'Capacidades Técnicas'}
        description={copy.intro}
        keywords="Full Stack, Applied AI, Computer Vision, IoT, Cloud, React, TypeScript, Python, FastAPI, PostgreSQL, AWS, Docker"
      />
      <BackgroundParticles />

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(212,175,55,0.2),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(59,130,246,0.1),transparent_30%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_0.7fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <p className="mb-7 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-gold">
                <Sparkles size={15} /> {copy.eyebrow}
              </p>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-white md:text-7xl lg:text-[5.6rem]">
                {copy.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                {copy.intro}
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-sm md:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-slate-950">
                <CheckCircle2 size={24} />
              </div>
              <h2 className="text-2xl font-black tracking-tight text-white">{copy.principleTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">{copy.principleBody}</p>
            </motion.aside>
          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-3">
            {copy.metrics.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <strong className="block text-2xl font-black tracking-tight text-gold md:text-3xl">{value}</strong>
                <span className="mt-2 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 md:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={copy.capabilityLabel} title={copy.capabilityTitle} body={copy.capabilityBody} />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {copy.capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.45)] transition-[border-color,box-shadow] hover:border-gold/45 hover:shadow-[0_30px_80px_-45px_rgba(212,175,55,0.3)] md:p-9"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-gold transition-colors group-hover:bg-gold group-hover:text-slate-950">
                    {capability.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold">0{index + 1}</p>
                    <h3 className="mt-2 text-2xl font-black leading-tight tracking-[-0.025em] text-slate-950 md:text-3xl">{capability.title}</h3>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-slate-600">{capability.description}</p>
                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <p className="flex gap-3 text-sm font-medium leading-relaxed text-slate-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" /> {capability.proof}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {capability.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-600">{tool}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={copy.stackLabel} title={copy.stackTitle} body={copy.stackBody} />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.toolGroups.map((group, index) => (
              <motion.article
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.035 }}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-5 flex items-center gap-3 text-slate-950">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">{group.icon}</span>
                  <h3 className="text-sm font-black uppercase tracking-[0.12em]">{group.label}</h3>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label={group.label}>
                  {group.tools.map((tool) => (
                    <li key={tool} className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-600">{tool}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={copy.contributionLabel} title={copy.contributionTitle} />
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {copy.contributions.map(([title, body], index) => (
              <div key={title} className="grid grid-cols-[auto_1fr] gap-5 border-t border-slate-200 pt-7">
                <span className="text-sm font-black tracking-widest text-gold">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-black tracking-tight text-slate-950">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.16),transparent_32%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-gold">{copy.capabilityLabel}</p>
              <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">{copy.ctaTitle}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{copy.ctaBody}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/projects" className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-black uppercase tracking-wider text-slate-950 transition-colors hover:bg-white">
                {copy.ctaProjects} <Rocket size={18} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white hover:text-slate-950">
                {copy.ctaContact} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SectionHeading = ({ label, title, body }: { label: string; title: string; body?: string }) => (
  <div className="max-w-4xl">
    <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-gold">
      <span className="h-px w-9 bg-gold" /> {label}
    </p>
    <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 md:text-6xl">{title}</h2>
    {body && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{body}</p>}
  </div>
);

export default Capabilities;
