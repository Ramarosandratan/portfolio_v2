import { useState } from 'react';
import { useThemeLanguage } from '../context/useThemeLanguage';
import nexusAnalyticsImg from '../assets/projects/nexus-analytics.png';
import swiftpayMobileImg from '../assets/projects/swiftpay-mobile.png';
import coreApiServiceImg from '../assets/projects/core-api-service.png';
import sentientNlpImg from '../assets/projects/sentient-nlp.png';
import atomCmsImg from '../assets/projects/atom-cms.png';

const Projects = () => {
    const { t } = useThemeLanguage();
    const [filter, setFilter] = useState('all');

    const filterOptions = [
        { key: 'all', label: t('projects.allProjects') },
        { key: 'fullstack', label: t('projects.fullStack') },
        { key: 'frontend', label: t('projects.frontend') },
        { key: 'backend', label: t('projects.backend') }
    ];

    const projects = [
        {
            id: 1,
            title: "Nexus Analytics",
            description: "A comprehensive sales dashboard built for enterprise clients. Features real-time data visualization, user role management, and automated reporting systems.",
            image: nexusAnalyticsImg,
            category: "fullstack",
            tags: ["Next.js", "TypeScript", "PostgreSQL"],
            links: [
                { label: "Case Study", icon: "article", primary: true },
                { label: "Live Demo", icon: "visibility", primary: false }
            ]
        },
        {
            id: 2,
            title: "SwiftPay Mobile",
            description: "A cross-platform fintech application focusing on peer-to-peer payments. Implements biometric authentication and secure WebSocket connections for instant transactions.",
            image: swiftpayMobileImg,
            category: "mobile",
            tags: ["React Native", "Firebase"],
            links: [
                { label: "Case Study", icon: "article", primary: true },
                { label: "App Store", icon: "visibility", primary: false }
            ]
        },
        {
            id: 3,
            title: "Core API Service",
            description: "High-performance microservices architecture handling over 10k req/s. Includes custom load balancing, Redis caching layers, and comprehensive documentation.",
            image: coreApiServiceImg,
            category: "backend",
            tags: ["Node.js", "Redis", "Docker"],
            links: [
                { label: "Docs", icon: "article", primary: true },
                { label: "GitHub", icon: "code", primary: false }
            ]
        },
        {
            id: 4,
            title: "Sentient NLP",
            description: "A natural language processing toolkit designed for sentiment analysis on social media streams. Integrates with Twitter API v2.",
            image: sentientNlpImg,
            category: "ml",
            tags: ["Python", "TensorFlow"],
            links: [
                { label: "Case Study", icon: "article", primary: true },
                { label: "Demo", icon: "visibility", primary: false }
            ]
        },
        {
            id: 5,
            title: "Atom CMS",
            description: "A headless CMS built for speed and flexibility. Offers a customizable block editor and instantaneous GraphQL content delivery.",
            image: atomCmsImg,
            category: "frontend",
            tags: ["Vue.js", "GraphQL"],
            links: [
                { label: "Case Study", icon: "article", primary: true },
                { label: "Live Site", icon: "visibility", primary: false }
            ]
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
            {/* Header Section */}
            <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden" style={{backgroundColor: 'var(--background)'}}>
                <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to bottom right, rgb(from var(--accent) r g b / 0.05), transparent)'}}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
                        {t('projects.selected')} <span style={{color: 'var(--accent)'}}>{t('projects.works')}</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
                        {t('projects.description')}
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-20 z-40 backdrop-blur-sm border-b py-4 transition-colors duration-300" style={{backgroundColor: 'rgb(from var(--surface) r g b / 0.95)', borderColor: 'var(--border)'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                    <div className="inline-flex rounded-lg p-1 shadow-inner overflow-x-auto max-w-full" style={{backgroundColor: 'var(--surface-secondary)'}}>
                        {filterOptions.map(option => (
                            <button
                                key={option.key}
                                onClick={() => setFilter(option.key)}
                                className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                                    filter === option.key
                                        ? "shadow-sm" 
                                        : "hover:opacity-80"
                                }`}
                                style={
                                    filter === option.key 
                                        ? {backgroundColor: 'var(--surface)', color: 'var(--accent)', boxShadow: '0 0 0 1px rgb(from var(--border) r g b / 0.3)'}
                                        : {color: 'var(--text-secondary)'}
                                }
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content: Project Grid */}
            <main className="flex-grow py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <article key={project.id} className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col h-full hover:-translate-y-1" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)'}}>
                                <div className="relative overflow-hidden aspect-video" style={{backgroundColor: 'var(--surface-secondary)'}}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-sm" style={{backgroundColor: 'var(--accent)'}}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold transition-colors" style={{color: 'var(--text-primary)'}}>
                                            {project.title}
                                        </h3>
                                        <a href="#" className="transition-colors hover:opacity-80" style={{color: 'var(--text-muted)'}}>
                                            <span className="material-icons-round text-xl">open_in_new</span>
                                        </a>
                                    </div>
                                    <p className="text-sm mb-6 flex-grow leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-lg border" style={{backgroundColor: 'rgb(from var(--accent) r g b / 0.1)', color: 'var(--accent)', borderColor: 'rgb(from var(--accent) r g b / 0.3)'}}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 mt-auto pt-4 border-t" style={{borderColor: 'var(--border)'}}>
                                        {project.links.map(link => (
                                            <button
                                                key={link.label}
                                                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 ${
                                                    link.primary ? "text-white hover:opacity-90" : "border hover:opacity-80"
                                                }`}
                                                style={
                                                    link.primary 
                                                        ? {backgroundColor: 'var(--accent)'}
                                                        : {backgroundColor: 'transparent', borderColor: 'var(--border-emphasis)', color: 'var(--text-secondary)'}
                                                }
                                            >
                                                <span className="material-icons-round text-sm">{link.icon}</span>
                                                {link.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}

                        {/* Coming Soon Card - Only show when filtering 'All Projects' or relevant category if we had one */}
                        {filter === 'all' && (
                            <article className="group rounded-xl overflow-hidden border-2 border-dashed flex flex-col h-full items-center justify-center text-center p-8 transition-all" style={{backgroundColor: 'var(--surface-secondary)', borderColor: 'var(--border)'}}>
                                <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4 transition-colors" style={{backgroundColor: 'var(--surface)', color: 'var(--text-muted)'}}>
                                    <span className="material-icons-round text-3xl">add</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--text-primary)'}}>{t('projects.comingSoon') || 'Something New'}</h3>
                                <p className="text-sm max-w-[200px]" style={{color: 'var(--text-muted)'}}>
                                    {t('projects.comingSoonDesc') || 'Currently working on a Web3 marketplace. Stay tuned for updates.'}
                                </p>
                            </article>
                        )}
                    </div>

                    {/* Load More */}
                    <div className="mt-16 flex justify-center">
                        <button className="border px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-sm hover:opacity-80" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-secondary)'}}>
                            {t('projects.loadMore') || 'Load More Projects'}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Projects;
