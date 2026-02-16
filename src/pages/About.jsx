import { useThemeLanguage } from '../context/ThemeLanguageContext';

const About = () => {
    const { t } = useThemeLanguage();
    const skills = [
        "React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "PostgreSQL", "AWS", "Docker"
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 transition-colors duration-300">{t('about.title')}</h2>
                <div className="prose prose-lg text-neutral-600 dark:text-neutral-400 mb-12 transition-colors duration-300">
                    <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        {t('about.description1')}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        {t('about.description2')}
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">{t('about.skillsHeading')}</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transition-colors duration-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
