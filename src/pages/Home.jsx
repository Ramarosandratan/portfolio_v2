import { Link } from 'react-router-dom';
import { useThemeLanguage } from '../context/useThemeLanguage';

const Home = () => {
    const { t } = useThemeLanguage();

    return (
        <>
            {/* Main Hero Section */}
            <main className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
                {/* Abstract Background Gradient Decoration */}
                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] rounded-full blur-3xl -z-10 pointer-events-none" style={{backgroundColor: 'rgb(from var(--accent) r g b / 0.08)'}}></div>
                <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[500px] h-[500px] rounded-full blur-3xl -z-10 pointer-events-none" style={{backgroundColor: 'var(--surface-secondary)'}}></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Hero Text Content */}
                        <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full w-fit border" style={{backgroundColor: 'rgb(from var(--accent) r g b / 0.15)', borderColor: 'rgb(from var(--accent) r g b / 0.3)'}}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: 'var(--accent)'}}></span>
                                <span className="text-xs font-semibold tracking-wide uppercase" style={{color: 'var(--accent)'}}>{t('home.availableForWork')}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1]" style={{color: 'var(--text-primary)'}}>
                                {t('home.heroTitle')} <br />
                                <span className="text-transparent bg-clip-text" style={{background: 'linear-gradient(to right, var(--accent), var(--accent-hover))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Digital Solutions</span>
                            </h1>
                            <p className="text-lg max-w-xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                                {t('home.heroParagraph')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/projects" className="px-8 py-3.5 text-white font-semibold rounded shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group hover:opacity-90" style={{backgroundColor: 'var(--accent)', boxShadow: '0 10px 25px -5px rgb(from var(--accent) r g b / 0.3)'}}>
                                    {t('home.viewMyWork')}
                                    <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <Link to="/contact" className="px-8 py-3.5 border font-medium rounded transition-all flex items-center justify-center gap-2 hover:opacity-80" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-secondary)'}}>
                                    {t('home.contactMe')}
                                </Link>
                            </div>
                            {/* Trust/Stats small section */}
                            <div className="pt-8 flex items-center gap-8 text-sm border-t mt-4" style={{color: 'var(--text-muted)', borderColor: 'var(--border)'}}>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl" style={{color: 'var(--text-primary)'}}>5+</span>
                                    <span>{t('home.yearsExp')}</span>
                                </div>
                                <div className="w-px h-8" style={{backgroundColor: 'var(--border)'}}></div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl" style={{color: 'var(--text-primary)'}}>50+</span>
                                    <span>{t('home.projects')}</span>
                                </div>
                                <div className="w-px h-8" style={{backgroundColor: 'var(--border)'}}></div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl" style={{color: 'var(--text-primary)'}}>100%</span>
                                    <span>{t('home.satisfaction')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Element: Code/Terminal Card */}
                        <div className="relative order-1 lg:order-2 perspective-1000">
                            {/* Decorative back layers */}
                            <div className="absolute -inset-1 rounded-lg blur opacity-20" style={{background: 'linear-gradient(to right, var(--accent), var(--accent-hover))'}}></div>
                            <div className="relative rounded-lg border overflow-hidden transform transition-transform hover:scale-[1.01] duration-500" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-soft)'}}>
                                {/* Terminal Header */}
                                <div className="border-b px-4 py-3 flex items-center justify-between" style={{backgroundColor: 'var(--surface-secondary)', borderColor: 'var(--border)'}}>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs font-mono" style={{color: 'var(--text-muted)'}}>App.tsx</div>
                                    <div className="w-4"></div> {/* Spacer for centering */}
                                </div>
                                {/* Code Content */}
                                <div className="p-6 overflow-x-auto custom-scrollbar" style={{backgroundColor: 'var(--surface)'}}>
                                    <pre className="font-mono text-sm leading-relaxed" style={{color: 'var(--text-primary)'}}>
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
                                <div className="text-white text-[10px] px-4 py-1 flex justify-between items-center font-mono" style={{backgroundColor: 'var(--accent)'}}>
                                    <div className="flex gap-4">
                                        <span>main*</span>
                                        <span>Ln 14, Col 32</span>
                                    </div>
                                    <div>UTF-8</div>
                                </div>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 z-20 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="p-3 rounded border flex items-center gap-3" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-soft)'}}>
                                    <div className="p-2 rounded-full" style={{backgroundColor: 'rgb(from var(--accent) r g b / 0.15)', color: 'var(--accent)'}}>
                                        <span className="material-icons text-sm">check_circle</span>
                                    </div>
                                    <div>
                                        <div className="text-xs" style={{color: 'var(--text-muted)'}}>{t('home.lastDeploy')}</div>
                                        <div className="text-sm font-bold" style={{color: 'var(--text-primary)'}}>{t('home.deploySuccess')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Tech Stack Ticker Section */}
            <section className="border-t transition-colors duration-300" style={{borderColor: 'var(--border)', backgroundColor: 'var(--surface-secondary)'}}>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
                    <p className="text-center text-sm font-medium mb-6 uppercase tracking-wider" style={{color: 'var(--text-muted)'}}>{t('home.technologiesHeading')}</p>
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
