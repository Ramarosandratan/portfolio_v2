import { useState } from 'react';
import TimelineItem from '../components/TimelineItem';
import SkillBar from '../components/SkillBar';
import CertificationCard from '../components/CertificationCard';

const Experience = () => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Experience &amp; Skills
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          My professional journey through software engineering and the technical arsenal I've built along the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-2xl">📋</span> Professional History
            </h2>
            
            {/* Toggle Switch */}
            <div className="bg-gray-200 p-1 rounded-lg inline-flex">
              <button 
                onClick={() => setActiveTab('work')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  activeTab === 'work'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Work
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  activeTab === 'education'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
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
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">💻</span> Technical Proficiency
            </h2>

            {/* Frontend Section */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                Frontend
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
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                Backend
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
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                DevOps &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">✓</span> Certifications
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
