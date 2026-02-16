import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useThemeLanguage();

    return (
        <nav className="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg">
                            D
                        </div>
                        <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white transition-colors duration-300">DevPortfolio</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="text-primary font-medium px-3 py-2 text-sm transition-colors">{t('navbar.home')}</Link>
                            <Link to="/projects" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">{t('navbar.projects')}</Link>
                            <Link to="/experience" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">{t('navbar.experience')}</Link>
                            <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">{t('navbar.about')}</Link>
                            <Link to="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">{t('navbar.contact')}</Link>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link to="/contact" className="bg-neutral-900 dark:bg-primary text-white hover:bg-neutral-800 dark:hover:bg-primary/90 px-5 py-2.5 rounded text-sm font-medium transition-all shadow-sm hover:shadow-md">
                            {t('navbar.hireMe')}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded text-neutral-600 dark:text-neutral-400 hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none transition-colors duration-300"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background-light dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-primary block px-3 py-2 rounded-md text-base font-medium">{t('navbar.home')}</Link>
                        <Link to="/projects" onClick={() => setIsOpen(false)} className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">{t('navbar.projects')}</Link>
                        <Link to="/experience" onClick={() => setIsOpen(false)} className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">{t('navbar.experience')}</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">{t('navbar.about')}</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">{t('navbar.contact')}</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-neutral-900 dark:bg-primary text-white block px-3 py-2 rounded-md text-base font-medium mt-4 text-center transition-colors">{t('navbar.hireMe')}</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
