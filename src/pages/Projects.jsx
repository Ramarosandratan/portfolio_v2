import { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import nexusAnalyticsImg from '../assets/projects/nexus-analytics.png';
import swiftpayMobileImg from '../assets/projects/swiftpay-mobile.png';
import coreApiServiceImg from '../assets/projects/core-api-service.png';
import sentientNlpImg from '../assets/projects/sentient-nlp.png';
import atomCmsImg from '../assets/projects/atom-cms.png';

const Projects = () => {
    const { t } = useThemeLanguage();
    const [filter, setFilter] = useState('All Projects');

    const filters = [t('projects.allProjects'), t('projects.fullStack'), t('projects.frontend'), t('projects.backend')];

    const projects = [
        {
            id: 1,
            title: "Nexus Analytics",
            description: "A comprehensive sales dashboard built for enterprise clients. Features real-time data visualization, user role management, and automated reporting systems.",
            image: nexusAnalyticsImg,
            category: "Full Stack",
            labelColor: "bg-primary/90",
            tags: [
                { name: "Next.js", color: "bg-primary/10 text-primary border-primary/20" },
                { name: "TypeScript", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border-blue-100 dark:border-blue-800" },
                { name: "PostgreSQL", color: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800" }
            ],
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
            category: "Mobile",
            labelColor: "bg-purple-600/90",
            tags: [
                { name: "React Native", color: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 border-cyan-100 dark:border-cyan-800" },
                { name: "Firebase", color: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 border-orange-100 dark:border-orange-800" }
            ],
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
            category: "Backend",
            labelColor: "bg-green-600/90",
            tags: [
                { name: "Node.js", color: "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 border-green-100 dark:border-green-800" },
                { name: "Redis", color: "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 border-red-100 dark:border-red-800" },
                { name: "Docker", color: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600" }
            ],
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
            category: "Machine Learning",
            labelColor: "bg-rose-600/90",
            tags: [
                { name: "Python", color: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-100 dark:border-yellow-800" },
                { name: "TensorFlow", color: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600" }
            ],
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
            category: "Frontend",
            labelColor: "bg-teal-600/90",
            tags: [
                { name: "Vue.js", color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800" },
                { name: "GraphQL", color: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 border-pink-100 dark:border-pink-800" }
            ],
            links: [
                { label: "Case Study", icon: "article", primary: true },
                { label: "Live Site", icon: "visibility", primary: false }
            ]
        }
    ];

    const filteredProjects = filter === 'All Projects'
        ? projects
        : projects.filter(p => p.category === filter || (filter === 'Full Stack' && p.category === 'Full Stack'));
    // Note: Logic for filtering can be adjusted. For now simple matching.

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
            {/* Header Section */}
            <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white dark:bg-neutral-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 dark:from-primary/10 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">
                        Selected <span className="text-primary">Works</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
                        A collection of projects showcasing my journey in building scalable web applications, tackling complex backend challenges, and crafting intuitive user interfaces.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-20 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 py-4 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                    <div className="inline-flex rounded-lg bg-neutral-200 dark:bg-neutral-800 p-1 shadow-inner overflow-x-auto max-w-full">
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${filter === f
                                        ? "bg-white dark:bg-neutral-700 text-primary shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                                        : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-600"
                                    }`}
                            >
                                {f}
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
                            <article key={project.id} className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 flex flex-col h-full hover:-translate-y-1">
                                <div className="relative overflow-hidden aspect-video bg-neutral-100 dark:bg-neutral-700">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className={`text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-sm ${project.labelColor}`}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-primary transition-colors">
                                            <span className="material-icons-round text-xl">open_in_new</span>
                                        </a>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag.name} className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${tag.color}`}>
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                        {project.links.map(link => (
                                            <button
                                                key={link.label}
                                                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 ${link.primary
                                                        ? "bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-neutral-800"
                                                        : "bg-white dark:bg-transparent border border-neutral-200 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200 dark:focus:ring-offset-neutral-800"
                                                    }`}
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
                        {filter === t('projects.allProjects') && (
                            <article className="group bg-neutral-50 dark:bg-neutral-800/50 rounded-xl overflow-hidden border-2 border-dashed border-neutral-200 dark:border-neutral-700 flex flex-col h-full items-center justify-center text-center p-8 transition-all hover:border-primary/50">
                                <div className="h-16 w-16 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mb-4 text-neutral-400 dark:text-neutral-500 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                    <span className="material-icons-round text-3xl">add</span>
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Something New</h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-[200px]">
                                    Currently working on a Web3 marketplace. Stay tuned for updates.
                                </p>
                            </article>
                        )}
                    </div>

                    {/* Load More */}
                    <div className="mt-16 flex justify-center">
                        <button className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary px-8 py-3 rounded-lg text-sm font-semibold transition-all shadow-sm">
                            Load More Projects
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Projects;
