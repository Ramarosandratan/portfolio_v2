import { Link } from 'react-router-dom';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Home = () => {
    const { t } = useThemeLanguage();

    return (
        <>
            {/* Main Hero Section */}
            <main className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-neutral-900/50 transition-colors duration-300">
                {/* Abstract Background Gradient Decoration */}
                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl -z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[500px] h-[500px] rounded-full bg-neutral-200/20 dark:bg-neutral-700/20 blur-3xl -z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Hero Text Content */}
                        <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 w-fit border border-primary/20 dark:border-primary/30">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-primary text-xs font-semibold tracking-wide uppercase">{t('home.availableForWork')}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
                                {t('home.heroTitle')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neutral-700 dark:to-neutral-300">Digital Solutions</span>
                            </h1>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
                                {t('home.heroParagraph')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/projects" className="px-8 py-3.5 bg-primary hover:bg-primary/90 dark:hover:bg-primary/80 text-white font-semibold rounded shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                                    {t('home.viewMyWork')}
                                    <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <Link to="/contact" className="px-8 py-3.5 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 hover:border-primary/50 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary font-medium rounded transition-all flex items-center justify-center gap-2">
                                    {t('home.contactMe')}
                                </Link>
                            </div>
                            {/* Trust/Stats small section */}
                            <div className="pt-8 flex items-center gap-8 text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700 mt-4">
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl text-neutral-900 dark:text-white">5+</span>
                                    <span>{t('home.yearsExp')}</span>
                                </div>
                                <div className="w-px h-8 bg-neutral-200 dark:bg-neutral-700"></div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl text-neutral-900 dark:text-white">50+</span>
                                    <span>{t('home.projects')}</span>
                                </div>
                                <div className="w-px h-8 bg-neutral-200 dark:bg-neutral-700"></div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl text-neutral-900 dark:text-white">100%</span>
                                    <span>{t('home.satisfaction')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Element: Code/Terminal Card */}
                        <div className="relative order-1 lg:order-2 perspective-1000">
                            {/* Decorative back layers */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-neutral-300 dark:to-neutral-600 rounded-lg blur opacity-20 dark:opacity-30"></div>
                            <div className="relative bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-2xl dark:shadow-2xl dark:shadow-black/30 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                                {/* Terminal Header */}
                                <div className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 px-4 py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">App.tsx</div>
                                    <div className="w-4"></div> {/* Spacer for centering */}
                                </div>
                                {/* Code Content */}
                                <div className="p-6 overflow-x-auto custom-scrollbar bg-white dark:bg-neutral-800">
                                    <pre className="font-mono text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                                        <span className="text-purple-600 dark:text-purple-400">import</span> {'{'} <span className="text-yellow-600 dark:text-yellow-400">useState</span>, <span className="text-yellow-600 dark:text-yellow-400">useEffect</span> {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'react'</span>;
                                        {'\n'}
                                        <span className="text-purple-600 dark:text-purple-400">import</span> {'{'} <span className="text-yellow-600 dark:text-yellow-400">createClient</span> {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'@supabase/supabase-js'</span>;
                                        {'\n\n'}
                                        <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">Portfolio</span> = () =&gt; {'{'}
                                        {'\n  '}<span className="text-purple-600 dark:text-purple-400">const</span> [<span className="text-neutral-900 dark:text-neutral-300">projects</span>, <span className="text-neutral-900 dark:text-neutral-300">setProjects</span>] = <span className="text-yellow-600 dark:text-yellow-400">useState</span>([]);
                                        {'\n\n  '}<span className="text-yellow-600 dark:text-yellow-400">useEffect</span>(() =&gt; {'{'}
                                        {'\n    '}<span className="text-neutral-500 dark:text-neutral-400">// Fetching latest successful deployments</span>
                                        {'\n    '}<span className="text-blue-600 dark:text-blue-400">fetchProjects</span>().<span className="text-blue-600 dark:text-blue-400">then</span>(<span className="text-neutral-900 dark:text-neutral-300">data</span> =&gt; {'{'}
                                        {'\n       '}<span className="text-yellow-600 dark:text-yellow-400">setProjects</span>(<span className="text-neutral-900 dark:text-neutral-300">data</span>);
                                        {'\n    '}{'}'});
                                        {'\n  '}{'}'}, []);
                                        {'\n\n  '}<span className="text-purple-600 dark:text-purple-400">return</span> (
                                        {'\n    '}<span className="text-blue-800 dark:text-blue-400">&lt;div</span> <span className="text-orange-600 dark:text-orange-400">className</span>=<span className="text-green-600 dark:text-green-400">"grid grid-cols-3 gap-4"</span><span className="text-blue-800 dark:text-blue-400">&gt;</span>
                                        {'\n      '}{'{'}<span className="text-neutral-900 dark:text-neutral-300">projects</span>.<span className="text-blue-600 dark:text-blue-400">map</span>((<span className="text-neutral-900 dark:text-neutral-300">project</span>) =&gt; (
                                        {'\n        '}<span className="text-blue-800 dark:text-blue-400">&lt;ProjectCard</span>
                                        {'\n          '}<span className="text-orange-600 dark:text-orange-400">key</span>={'{'}<span className="text-neutral-900 dark:text-neutral-300">project.id</span>{'}'}
                                        {'\n          '}<span className="text-orange-600 dark:text-orange-400">data</span>={'{'}<span className="text-neutral-900 dark:text-neutral-300">project</span>{'}'}
                                        {'\n        '}<span className="text-blue-800 dark:text-blue-400">/&gt;</span>
                                        {'\n      '}))
                                        {'\n    '}<span className="text-blue-800 dark:text-blue-400">&lt;/div&gt;</span>
                                        {'\n  '});
                                        {'\n'}{'}'};
                                        {'\n'}<span className="typing-cursor"></span>
                                    </pre>
                                </div>
                                {/* Terminal Footer Status Bar */}
                                <div className="bg-primary text-white text-[10px] px-4 py-1 flex justify-between items-center font-mono">
                                    <div className="flex gap-4">
                                        <span>main*</span>
                                        <span>Ln 14, Col 32</span>
                                    </div>
                                    <div>UTF-8</div>
                                </div>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 z-20 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="bg-white dark:bg-neutral-800 p-3 rounded shadow-xl dark:shadow-lg dark:shadow-black/30 border border-neutral-100 dark:border-neutral-700 flex items-center gap-3">
                                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-2 rounded-full">
                                        <span className="material-icons text-sm">check_circle</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400">{t('home.lastDeploy')}</div>
                                        <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{t('home.deploySuccess')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Tech Stack Ticker Section */}
            <section className="border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
                    <p className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-wider">{t('home.technologiesHeading')}</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* React */}
                        <div className="group flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <svg className="w-full h-full fill-current text-neutral-400 group-hover:text-[#61DAFB] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path></svg>
                            </div>
                            <span className="text-xs font-semibold">React</span>
                        </div>
                        {/* Node */}
                        <div className="group flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <svg className="w-full h-full fill-current text-neutral-400 group-hover:text-[#339933] transition-colors" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path></svg>
                            </div>
                            <span className="text-xs font-semibold">Node.js</span>
                        </div>
                        {/* TypeScript */}
                        <div className="group flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <div className="w-8 h-8 rounded bg-neutral-400 group-hover:bg-[#3178C6] text-white flex items-center justify-center font-bold text-xs">TS</div>
                            </div>
                            <span className="text-xs font-semibold">TypeScript</span>
                        </div>
                        {/* PostgreSQL */}
                        <div className="group flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <svg className="w-full h-full fill-current text-neutral-400 group-hover:text-[#336791] transition-colors" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                            </div>
                            <span className="text-xs font-semibold">PostgreSQL</span>
                        </div>
                        {/* Next.js */}
                        <div className="group flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <svg className="w-full h-full fill-current text-neutral-400 group-hover:text-black transition-colors" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.33 16.5h-1.5V7.5h1.5v6.2l5.7-6.2h2.1l-6.3 6.9 6.5 7.1h-2.1l-5.9-6.5v1.5z"></path></svg>
                            </div>
                            <span className="text-xs font-semibold">Next.js</span>
                        </div>
                        {/* Tailwind */}
                        <div className="group flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <svg className="w-full h-full fill-current text-neutral-400 group-hover:text-[#38B2AC] transition-colors" viewBox="0 0 24 24"><path d="M12.001 2c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm-1.5 14.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm6 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
                            </div>
                            <span className="text-xs font-semibold">Tailwind</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
