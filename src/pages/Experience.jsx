import { useState } from 'react';
import { useThemeLanguage } from '../context/useThemeLanguage';
import TimelineItem from '../components/TimelineItem';
import SkillBar from '../components/SkillBar';
import CertificationCard from '../components/CertificationCard';

const Experience = () => {
  const { t } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      title: "Senior Full Stack Engineer",
      company: "TechFlow Systems",
      period: "2021 - Present",
      description: [
        "Architected and led the migration of a legacy monolithic application to a microservices architecture using Node.js and Docker.",
        "Improved API response times by 40% through aggressive caching strategies with Redis and query optimization.",
        "Mentored 3 junior developers, conducting code reviews and weekly pair programming sessions."
      ],
      skills: ["React", "Node.js", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Pulse Agency",
      period: "2019 - 2021",
      description: [
        "Developed high-fidelity interactive UIs for e-commerce clients using Vue.js and Nuxt.",
        "Implemented responsive designs that increased mobile conversion rates by 25% across key client sites.",
        "Collaborated closely with UX designers to establish a reusable component library."
      ],
      skills: ["Vue.js", "Nuxt", "CSS"]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Inc.",
      period: "2018 - 2019",
      description: "Assisted in the development of internal tools using PHP and Laravel. Responsible for bug fixing, writing unit tests, and maintaining documentation for the backend API.",
      skills: ["PHP", "Laravel", "MySQL"]
    }
  ];

  const educationExperience = [
    {
      title: "Bachelor of Science in Computer Science",
      company: "Tech University",
      period: "2014 - 2018",
      description: "Specialized in Software Engineering with emphasis on Full Stack Development and Cloud Architecture.",
      skills: [],
      isEducation: true
    }
  ];

  const frontendSkills = [
    { name: "React / Next.js", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "Tailwind CSS", percentage: 95 }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "Python", percentage: 75 }
  ];

  const devopsSkills = ["Docker", "AWS EC2", "Git", "Figma", "Jira"];

  const certifications = [
    {
      title: "AWS Certified",
      subtitle: "Solutions Architect",
      issued: "2022",
      gradientFrom: "from-orange-400",
      gradientTo: "to-yellow-500",
      icon: "☁️"
    },
    {
      title: "CKA",
      subtitle: "Kubernetes Admin",
      issued: "2023",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-400",
      icon: "⚓"
    }
  ];

  const displayExperience = activeTab === 'work' ? workExperience : educationExperience;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-neutral-900 transition-colors duration-300">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
          {t('experience.title')}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg transition-colors duration-300">
          {t('experience.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white flex items-center gap-2 transition-colors duration-300">
              <span className="text-2xl">📋</span> {activeTab === 'work' ? t('experience.workExperience') : t('experience.education')}
            </h2>
            
            {/* Toggle Switch */}
            <div className="bg-neutral-200 dark:bg-neutral-800 p-1 rounded-lg inline-flex transition-colors duration-300">
              <button 
                onClick={() => setActiveTab('work')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  activeTab === 'work'
                    ? 'bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                }`}
              >
                {t('experience.workExperience')}
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  activeTab === 'education'
                    ? 'bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                }`}
              >
                {t('experience.education')}
              </button>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-700 space-y-12 transition-colors duration-300">
            {displayExperience.map((item, idx) => (
              <TimelineItem
                key={idx}
                title={item.title}
                company={item.company}
                period={item.period}
                description={item.description}
                skills={item.skills}
                isEducation={item.isEducation}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Skills & Certifications (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Skills Card */}
          <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-sm transition-colors duration-300">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-2 transition-colors duration-300">
              <span className="text-2xl">💻</span> {t('experience.frontendSkills')}
            </h2>

            {/* Frontend Section */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4 transition-colors duration-300">
                {t('experience.frontendSkills')}
              </h3>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>

            {/* Backend Section */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4 transition-colors duration-300">
                {t('experience.backendSkills')}
              </h3>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>

            {/* DevOps Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4 transition-colors duration-300">
                {t('experience.devopsTools')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm rounded border border-neutral-200 dark:border-neutral-600 hover:border-primary hover:text-primary dark:hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-sm transition-colors duration-300">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-2 transition-colors duration-300">
              <span className="text-2xl">✓</span> {t('experience.certifications')}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <CertificationCard
                  key={idx}
                  title={cert.title}
                  subtitle={cert.subtitle}
                  issued={cert.issued}
                  gradientFrom={cert.gradientFrom}
                  gradientTo={cert.gradientTo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
