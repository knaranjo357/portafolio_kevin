import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Zap, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedText from '../components/AnimatedText';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  fullDescription?: string;
  technologies?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  date?: string;
  client?: string;
  role?: string;
  link?: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to get project details
    const fetchProject = () => {
      setLoading(true);
      
      // This would normally be an API call
      setTimeout(() => {
        const projectsData: ProjectData[] = [
          {
            id: 1,
            title: 'Datalogger con Plataforma de Configuración',
            description: 'Diseñé y desarrollé una herramienta de configuración frontend y backend para dispositivos de adquisición de datos ambientales, mejorando la usabilidad y monitoreo de datos.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            category: 'desarrollo web',
            fullDescription: 'Este proyecto consistió en el desarrollo de una plataforma web completa para la configuración y monitoreo de dispositivos datalogger utilizados en la medición de variables ambientales. La plataforma permite a los usuarios configurar remotamente los dispositivos, visualizar datos en tiempo real, generar reportes y recibir alertas sobre condiciones específicas.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'Chart.js', 'Docker'],
            challenges: [
              'Crear una interfaz intuitiva para configurar dispositivos complejos',
              'Implementar comunicación en tiempo real con los dispositivos',
              'Desarrollar visualizaciones de datos eficientes para grandes volúmenes de información',
              'Garantizar la seguridad de los datos y el acceso a los dispositivos'
            ],
            solutions: [
              'Diseño de una interfaz de usuario basada en componentes modulares y reutilizables',
              'Implementación de WebSockets para comunicación bidireccional en tiempo real',
              'Desarrollo de un sistema de visualización de datos optimizado con renderizado condicional',
              'Implementación de autenticación JWT y control de acceso basado en roles'
            ],
            results: [
              'Reducción del 70% en el tiempo necesario para configurar dispositivos',
              'Mejora en la experiencia de usuario con una interfaz moderna e intuitiva',
              'Aumento del 50% en la eficiencia del monitoreo de datos ambientales',
              'Implementación exitosa en más de 100 dispositivos en campo'
            ],
            date: 'Enero 2022 - Junio 2022',
            client: 'Empresa de Monitoreo Ambiental',
            role: 'Desarrollador Full Stack',
            link: 'https://example.com/datalogger'
          },
          {
            id: 2,
            title: 'Cámara Adaptable para Conteo Vehicular',
            description: 'Desarrollé una solución de visión por computador para detección de vehículos y personas, implementada para la CAR Bogotá para correlacionar datos de tráfico con métricas de calidad del aire.',
            image: 'https://images.unsplash.com/photo-1566618501422-e11289d1bf4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            category: 'visión por computadora',
            fullDescription: 'Este proyecto involucró el desarrollo de un sistema de visión por computadora para el conteo y clasificación de vehículos en tiempo real. El sistema utiliza cámaras adaptables que pueden ser instaladas en diferentes entornos urbanos y rurales, proporcionando datos precisos sobre el flujo de tráfico que luego se correlacionan con mediciones de calidad del aire.',
            technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'Flask', 'PostgreSQL', 'Docker'],
            challenges: [
              'Desarrollar un algoritmo de detección robusto que funcione en diversas condiciones ambientales',
              'Optimizar el procesamiento para ejecutarse en hardware con recursos limitados',
              'Crear un sistema de clasificación preciso para diferentes tipos de vehículos',
              'Implementar un mecanismo de transmisión de datos eficiente desde ubicaciones remotas'
            ],
            solutions: [
              'Implementación de modelos YOLO personalizados entrenados con datos específicos del entorno',
              'Optimización del código para ejecutarse en dispositivos edge con capacidades limitadas',
              'Desarrollo de un clasificador basado en características geométricas y aprendizaje profundo',
              'Diseño de un sistema de transmisión de datos por lotes con compresión eficiente'
            ],
            results: [
              'Precisión del 95% en la detección y clasificación de vehículos',
              'Reducción del 60% en el consumo de recursos computacionales',
              'Implementación exitosa en 15 puntos estratégicos de la ciudad',
              'Correlación efectiva entre patrones de tráfico y calidad del aire'
            ],
            date: 'Marzo 2021 - Diciembre 2021',
            client: 'CAR Bogotá',
            role: 'Ingeniero de Visión por Computadora',
            link: 'https://example.com/conteo-vehicular'
          },
          {
            id: 3,
            title: 'Pronóstico de Variables Ambientales',
            description: 'Implementé modelos de machine learning y deep learning (LSTM) para predicciones precisas de calidad del aire, generando escenarios predictivos para la toma de decisiones.',
            image: 'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            category: 'machine learning',
            fullDescription: 'Este proyecto se centró en el desarrollo de modelos predictivos avanzados para pronosticar variables ambientales como calidad del aire, temperatura y humedad. Utilizando técnicas de aprendizaje profundo, específicamente redes LSTM (Long Short-Term Memory), el sistema puede predecir con alta precisión estas variables hasta con 72 horas de anticipación, permitiendo a las autoridades tomar decisiones informadas sobre alertas ambientales y medidas preventivas.',
            technologies: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask', 'Docker'],
            challenges: [
              'Manejar series temporales con datos faltantes e irregulares',
              'Incorporar variables exógenas como condiciones meteorológicas y actividad humana',
              'Desarrollar modelos que balanceen precisión y velocidad de predicción',
              'Crear visualizaciones interpretables para usuarios no técnicos'
            ],
            solutions: [
              'Implementación de técnicas avanzadas de imputación de datos y normalización',
              'Desarrollo de una arquitectura de red neuronal que integra múltiples fuentes de datos',
              'Optimización de hiperparámetros mediante búsqueda bayesiana',
              'Diseño de un dashboard interactivo con visualizaciones intuitivas'
            ],
            results: [
              'Precisión de predicción superior al 85% para horizontes de 24 horas',
              'Reducción del 40% en falsos positivos para alertas ambientales',
              'Implementación exitosa en 5 estaciones de monitoreo ambiental',
              'Adopción del sistema por autoridades locales para la toma de decisiones'
            ],
            date: 'Julio 2022 - Febrero 2023',
            client: 'Agencia de Protección Ambiental',
            role: 'Científico de Datos / ML Engineer',
            link: 'https://example.com/pronostico-ambiental'
          },
          {
            id: 4,
            title: 'Clasificación de Fraudes Eléctricos',
            description: 'Desarrollé un programa para ENEL Perú que incrementó la detección de fraudes eléctricos en un 150%, optimizando la recuperación de energía.',
            image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            category: 'machine learning',
            fullDescription: 'Este proyecto consistió en el desarrollo de un sistema de detección de fraudes en el consumo eléctrico utilizando técnicas avanzadas de machine learning. El sistema analiza patrones de consumo, datos históricos y variables contextuales para identificar anomalías que podrían indicar manipulación de medidores o conexiones ilegales. La implementación del sistema permitió a ENEL Perú aumentar significativamente su tasa de detección de fraudes y optimizar sus operaciones de inspección en campo.',
            technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Random Forest', 'PostgreSQL', 'Pandas', 'Flask', 'Docker'],
            challenges: [
              'Trabajar con datos desbalanceados (pocos casos confirmados de fraude vs muchos casos legítimos)',
              'Integrar fuentes de datos heterogéneas y de diferente calidad',
              'Desarrollar un sistema que minimice falsos positivos para optimizar inspecciones',
              'Crear un modelo interpretable que pueda explicar sus predicciones'
            ],
            solutions: [
              'Implementación de técnicas de muestreo y ponderación para manejar el desbalance de clases',
              'Desarrollo de un pipeline de ETL robusto para normalizar y validar datos',
              'Optimización de modelos con énfasis en precisión y recall balanceados',
              'Incorporación de técnicas de interpretabilidad como SHAP values'
            ],
            results: [
              'Incremento del 150% en la detección de fraudes eléctricos',
              'Aumento del 70% en la eficiencia de las inspecciones en campo',
              'Recuperación estimada de más de 1 millón de dólares en energía no facturada',
              'Implementación exitosa en toda la red de distribución de ENEL Perú'
            ],
            date: 'Abril 2023 - Octubre 2023',
            client: 'ENEL Perú',
            role: 'Data Scientist / ML Engineer',
            link: 'https://example.com/fraudes-electricos'
          },
          {
            id: 5,
            title: 'Automatización de Reportes Periódicos',
            description: 'Automatización de procesos de reporte periódico, reduciendo el tiempo de generación de reportes diarios de 3 horas a unos pocos minutos, aumentando significativamente la eficiencia del equipo.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            category: 'automatización',
            fullDescription: 'Este proyecto se enfocó en la automatización del proceso de generación de reportes periódicos para una empresa de servicios financieros. Anteriormente, el equipo dedicaba aproximadamente 3 horas diarias a la recopilación, procesamiento y formateo de datos para crear informes para diferentes departamentos. Mediante la implementación de un sistema automatizado, se logró reducir este tiempo a menos de 5 minutos, liberando recursos valiosos y mejorando la consistencia y precisión de los informes.',
            technologies: ['Python', 'Pandas', 'Airflow', 'SQL', 'Power BI', 'Azure Functions', 'Docker'],
            challenges: [
              'Integrar múltiples fuentes de datos con diferentes formatos y estructuras',
              'Mantener la consistencia visual y de contenido con los reportes manuales previos',
              'Implementar validaciones automáticas para garantizar la calidad de los datos',
              'Desarrollar un sistema escalable que pudiera adaptarse a nuevos requisitos'
            ],
            solutions: [
              'Desarrollo de conectores personalizados para cada fuente de datos',
              'Creación de plantillas parametrizables para mantener la consistencia visual',
              'Implementación de un sistema de validación en múltiples etapas',
              'Diseño modular que permite añadir nuevos tipos de reportes fácilmente'
            ],
            results: [
              'Reducción del tiempo de generación de reportes de 3 horas a menos de 5 minutos',
              'Eliminación de errores humanos en la preparación de informes',
              'Aumento de la frecuencia de reportes, permitiendo análisis más oportunos',
              'Liberación de aproximadamente 60 horas mensuales de trabajo del equipo'
            ],
            date: 'Noviembre 2022 - Enero 2023',
            client: 'Empresa de Servicios Financieros',
            role: 'Ingeniero de Automatización',
            link: 'https://example.com/automatizacion-reportes'
          },
          {
            id: 6,
            title: 'Consultoría Personalizada en IA para Empresas',
            description: 'Consultoría personalizada de inteligencia artificial para empresas como Antamina, asesorando en la implementación de herramientas de IA para agregar valor a sus datos e infraestructura.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            category: 'consultoría',
            fullDescription: 'Este proyecto de consultoría se centró en ayudar a Antamina, una de las mayores empresas mineras de Perú, a implementar soluciones de inteligencia artificial para optimizar sus operaciones. El trabajo incluyó la evaluación de la infraestructura existente, la identificación de oportunidades para la aplicación de IA, el desarrollo de pruebas de concepto y la creación de una hoja de ruta para la implementación a gran escala de soluciones de IA en diferentes áreas de la empresa.',
            technologies: ['Machine Learning', 'Computer Vision', 'Predictive Maintenance', 'IoT', 'Big Data', 'Cloud Computing', 'Edge Computing'],
            challenges: [
              'Integrar soluciones de IA en una infraestructura tecnológica existente y compleja',
              'Adaptar tecnologías de IA a las condiciones específicas de la industria minera',
              'Desarrollar casos de uso con ROI claro y medible',
              'Capacitar al personal técnico en nuevas tecnologías y metodologías'
            ],
            solutions: [
              'Realización de un diagnóstico exhaustivo de la infraestructura y procesos existentes',
              'Desarrollo de pruebas de concepto adaptadas a las condiciones operativas reales',
              'Creación de modelos financieros detallados para cada caso de uso propuesto',
              'Diseño e implementación de un programa de capacitación técnica'
            ],
            results: [
              'Identificación de oportunidades de IA con potencial de ahorro de más de 5 millones de dólares anuales',
              'Implementación exitosa de 3 pruebas de concepto en mantenimiento predictivo, optimización logística y seguridad',
              'Desarrollo de una hoja de ruta de IA a 5 años adoptada por la dirección',
              'Formación de un equipo interno especializado en IA y análisis de datos'
            ],
            date: 'Enero 2023 - Junio 2023',
            client: 'Antamina',
            role: 'Consultor Senior en IA',
            link: 'https://example.com/consultoria-ia'
          }
        ];

        const foundProject = projectsData.find(p => p.id === Number(id));
        setProject(foundProject || null);
        setLoading(false);
      }, 500);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-slate-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
          <p className="text-slate-600 mb-8">El proyecto que estás buscando no existe o ha sido eliminado.</p>
          <Link to="/projects" className="btn btn-primary">
            Volver a Proyectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Project Header */}
      <div className="project-detail-header">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-detail-content">
        <div className="mb-8">
          <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Volver a proyectos
          </Link>
        </div>

        {/* Project Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {project.date && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 p-4 rounded-lg flex items-start"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Periodo</h3>
                <p className="font-medium">{project.date}</p>
              </div>
            </motion.div>
          )}
          
          {project.client && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 p-4 rounded-lg flex items-start"
            >
              <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mr-3">
                <Users size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Cliente</h3>
                <p className="font-medium">{project.client}</p>
              </div>
            </motion.div>
          )}
          
          {project.role && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 p-4 rounded-lg flex items-start"
            >
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 mr-3">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Rol</h3>
                <p className="font-medium">{project.role}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
          
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Visitar proyecto <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </motion.div>

        {/* Technologies */}
        {project.technologies && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Tecnologías Utilizadas</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Challenges and Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {project.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Desafíos</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-slate-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          
          {project.solutions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-4">Soluciones</h2>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-slate-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Results */}
        {project.results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Resultados</h2>
            <div className="bg-slate-50 p-6 rounded-lg">
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-8 rounded-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">¿Te interesa un proyecto similar?</h2>
          <p className="text-blue-100 mb-6">
            Puedo ayudarte a desarrollar soluciones tecnológicas adaptadas a tus necesidades específicas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn bg-white text-blue-600 hover:bg-blue-50"
            >
              Contáctame
            </Link>
            <a
              href="https://wa.me/573175816061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-500 text-white hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* More Projects */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Más Proyectos"
            subtitle="Explora otros proyectos en los que he trabajado"
            center={true}
          />
          
          <div className="mt-12 flex justify-center">
            <Link
              to="/projects"
              className="btn btn-primary"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;