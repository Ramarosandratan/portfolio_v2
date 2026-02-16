import { Github, Linkedin, Mail } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Footer = () => {
    const { t } = useThemeLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 dark:bg-neutral-950 text-white dark:text-neutral-200 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-neutral-400 dark:text-neutral-500">&copy; {currentYear} {t('footer.copyright')}</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:example@email.com" className="text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-primary transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
