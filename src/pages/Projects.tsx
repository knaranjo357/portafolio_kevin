import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Briefcase, CheckCircle2, Search, Sparkles, X } from 'lucide-react';
import BackgroundParticles from '../components/BackgroundParticles';
import LazyImage from '../components/LazyImage';

type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryName: string;
  image: string;
  client?: string;
  role?: string;
  date?: string;
  technologies?: string[];
  results?: string[];
};

const featuredIds = [7, 8, 5];
const projectPriority = [7, 8, 5, 10, 4, 1, 9, 12, 2, 3, 6, 11, 13];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');

  const allProjects = useMemo(
    () => [...(t('projectsData', { returnObjects: true }) as PortfolioProject[])].sort(
      (a, b) => projectPriority.indexOf(a.id) - projectPriority.indexOf(b.id),
    ),
    [t],
  );

  const categories = useMemo(() => [
    { id: 'todos', name: t('projects.all') },
    { id: 'web', name: t('projects.webDev') },
    { id: 'ml', name: t('projects.machineLearning') },
    { id: 'vision', name: t('projects.computerVision') },
    { id: 'auto', name: t('projects.automation') },
    { id: 'consulting', name: t('projects.consulting') },
  ], [t]);

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return allProjects.filter((project) => {
      const searchable = [
        project.title,
        project.description,
        project.client,
        project.role,
        ...(project.technologies ?? []),
        ...(project.results ?? []),
      ].filter(Boolean).join(' ').toLowerCase();
      return (!term || searchable.includes(term)) &&
        (activeCategory === 'todos' || project.category === activeCategory);
    });
  }, [activeCategory, allProjects, searchTerm]);

  const hasActiveFilters = Boolean(searchTerm.trim()) || activeCategory !== 'todos';
  const featuredProjects = allProjects.filter((project) => featuredIds.includes(project.id));
  const visibleProjects = hasActiveFilters
    ? filteredProjects
    : filteredProjects.filter((project) => !featuredIds.includes(project.id));
  const getCount = (categoryId: string) => categoryId === 'todos'
    ? allProjects.length
    : allProjects.filter((project) => project.category === categoryId).length;
  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('todos');
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <BackgroundParticles />

      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-950 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-14 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-gold">
                <Sparkles size={15} /> {t('projects.heroEyebrow')}
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-white md:text-7xl lg:text-[5.5rem]">
                {t('projects.heroTitle')}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                {t('projects.heroDescription')}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
              <HeroMetric value="13" label={t('projects.caseStudiesMetric')} />
              <HeroMetric value="5+" label={t('projects.industriesMetric')} />
              <HeroMetric value="01→PROD" label={t('projects.deliveryMetric')} compact />
            </div>
          </div>
        </div>
      </section>

      {!hasActiveFilters && (
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={t('projects.featuredLabel')}
              title={t('projects.featuredTitle')}
              description={t('projects.featuredDescription')}
            />
            {featuredProjects[0] && <FeaturedProject project={featuredProjects[0]} t={t} primary />}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {featuredProjects.slice(1).map((project) => (
                <FeaturedProject key={project.id} project={project} t={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative border-y border-slate-100 bg-slate-50/70">
        <div className="container mx-auto px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="projects-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={t('projects.search')}
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-sm font-medium text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-gold focus:ring-4 focus:ring-gold/10"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    aria-label={t('projects.clearFilters')}
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-900"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-bold text-slate-600">
                  <span className="text-slate-950">{filteredProjects.length}</span>{' '}
                  {t('projects.resultCount')}
                </p>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs font-black uppercase tracking-wider text-gold hover:bg-gold hover:text-white"
                  >
                    <X size={13} /> {t('projects.clearFilters')}
                  </button>
                )}
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    type="button"
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    aria-pressed={isActive}
                    className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-slate-950 text-white'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-gold/40 hover:text-slate-950'
                    }`}
                  >
                    {category.name}
                    <span className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {getCount(category.id)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={hasActiveFilters ? t('projects.searchResultsTitle') : t('projects.moreProjectsLabel')}
            title={hasActiveFilters ? t('projects.searchResultsHeading') : t('projects.moreProjectsTitle')}
            description={hasActiveFilters ? t('projects.searchResultsDescription') : t('projects.moreProjectsDescription')}
            compact
          />

          {visibleProjects.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} t={t} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-24 text-center">
              <Search size={34} className="mx-auto mb-5 text-slate-400" />
              <h3 className="text-2xl font-black text-slate-950">{t('projects.noResults')}</h3>
              <button type="button" onClick={clearFilters} className="btn btn-primary mt-7">
                {t('projects.clearFilters')}
              </button>
            </div>
          )}

          <div className="mt-24 overflow-hidden rounded-[2.5rem] bg-slate-950 px-7 py-12 text-white md:px-14 md:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-gold">{t('projects.ctaEyebrow')}</p>
                <h2 className="max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">{t('projects.projectIdea')}</h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{t('projects.projectDesc')}</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-black uppercase tracking-wider text-slate-950 transition-colors hover:bg-white"
              >
                {t('home.contactMe')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HeroMetric = ({ value, label, compact = false }: { value: string; label: string; compact?: boolean }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm lg:flex lg:items-center lg:gap-5 lg:p-5">
    <strong className={`block font-black tracking-tight text-gold ${compact ? 'text-lg md:text-2xl' : 'text-3xl'}`}>{value}</strong>
    <span className="mt-1 block text-[10px] font-bold uppercase leading-tight tracking-wider text-slate-300 lg:mt-0 lg:text-xs">{label}</span>
  </div>
);

const SectionHeading = ({ eyebrow, title, description, compact = false }: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) => (
  <div className={compact ? 'mb-12 max-w-3xl' : 'mb-14 max-w-4xl'}>
    <p className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-gold">
      <span className="h-px w-8 bg-gold" /> {eyebrow}
    </p>
    <h2 className={`font-black leading-[1.02] tracking-[-0.04em] text-slate-950 ${compact ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'}`}>
      {title}
    </h2>
    <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">{description}</p>
  </div>
);

const FeaturedProject = ({ project, t, primary = false }: {
  project: PortfolioProject;
  t: (key: string) => string;
  primary?: boolean;
}) => (
  <Link
    to={`/projects/${project.id}`}
    className={`group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-45px_rgba(15,23,42,0.4)] transition-[border-color,box-shadow] hover:border-gold/50 hover:shadow-[0_30px_90px_-42px_rgba(212,175,55,0.35)] ${primary ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''}`}
  >
    <div className={`relative overflow-hidden bg-slate-100 ${primary ? 'min-h-[360px]' : 'h-64'}`}>
      <LazyImage src={project.image} alt={project.title} className="transition-transform duration-500 group-hover:scale-[1.025]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
      <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md">
        <Sparkles size={13} className="text-gold" /> {t('projects.featuredCase')}
      </div>
      <span className="absolute bottom-5 right-6 text-6xl font-black tracking-tighter text-white/25">{String(project.id).padStart(2, '0')}</span>
    </div>

    <div className={`flex flex-col ${primary ? 'p-8 md:p-11' : 'p-7 md:p-8'}`}>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gold/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-gold">{project.categoryName}</span>
        {project.date && <span className="text-xs font-bold text-slate-500">{project.date}</span>}
      </div>
      <h3 className={`font-black leading-tight tracking-[-0.035em] text-slate-950 transition-colors group-hover:text-gold ${primary ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>{project.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{project.description}</p>
      <div className="mt-7 grid gap-4 border-y border-slate-100 py-5 sm:grid-cols-2">
        <MetaItem label={t('projects.role')} value={project.role} />
        <MetaItem label={t('projects.client')} value={project.client} />
      </div>
      {project.results?.[0] && (
        <div className="mt-6 flex gap-3 rounded-2xl bg-slate-50 p-4">
          <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold" />
          <div>
            <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">{t('projects.impactTitle')}</span>
            <p className="mt-1 text-sm font-bold leading-relaxed text-slate-800">{project.results[0]}</p>
          </div>
        </div>
      )}
      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex -space-x-1">
          {project.technologies?.slice(0, 4).map((technology) => (
            <span key={technology} title={technology} className="flex h-8 min-w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 px-2 text-[9px] font-black uppercase text-slate-600">{technology.slice(0, 2)}</span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-950 group-hover:text-gold">
          {t('projects.viewDetails')} <ArrowRight size={16} />
        </span>
      </div>
    </div>
  </Link>
);

const ProjectCard = ({ project, t }: { project: PortfolioProject; t: (key: string) => string }) => (
  <Link
    to={`/projects/${project.id}`}
    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition-[border-color,box-shadow] hover:border-gold/50 hover:shadow-[0_24px_70px_-42px_rgba(15,23,42,0.55)]"
  >
    <div className="relative h-56 overflow-hidden bg-slate-100">
      <LazyImage src={project.image} alt={project.title} className="transition-transform duration-500 group-hover:scale-[1.025]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
        <span className="rounded-full bg-gold px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-950">{project.categoryName}</span>
        <span className="text-4xl font-black text-white/35">{String(project.id).padStart(2, '0')}</span>
      </div>
    </div>
    <div className="flex flex-1 flex-col p-7">
      <div className="mb-3 flex items-center gap-2 text-[11px] font-bold text-slate-500">
        <Briefcase size={14} className="text-gold" />
        <span className="truncate">{project.role}</span>
      </div>
      <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-slate-950 transition-colors group-hover:text-gold">{project.title}</h3>
      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
      {project.results?.[0] && (
        <div className="mt-6 flex gap-3 border-l-2 border-gold bg-gold/[0.055] px-4 py-3">
          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold" />
          <p className="line-clamp-2 text-xs font-bold leading-relaxed text-slate-700">{project.results[0]}</p>
        </div>
      )}
      <div className="mt-auto pt-7">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies?.slice(0, 4).map((technology) => (
            <span key={technology} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-slate-600">{technology}</span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="truncate text-xs font-bold text-slate-500">{project.client}</span>
          <span className="inline-flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-950 group-hover:text-gold">
            {t('projects.viewDetails')} <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

const MetaItem = ({ label, value }: { label: string; value?: string }) => (
  <div>
    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">{label}</span>
    <strong className="mt-1 block text-sm leading-snug text-slate-900">{value ?? '—'}</strong>
  </div>
);

export default Projects;
