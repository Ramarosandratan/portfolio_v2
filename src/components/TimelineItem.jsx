export const TimelineItem = ({ title, company, period, description, skills, isEducation = false }) => {
  return (
    <div className="relative group">
      {/* Timeline dot */}
      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-neutral-900 bg-primary group-hover:shadow-lg transition-shadow dark:shadow-primary/50"></div>

      {/* Card content */}
      <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className={`font-medium text-sm ${isEducation 
              ? 'text-neutral-600 dark:text-neutral-400' 
              : 'text-primary dark:text-primary'
            } transition-colors duration-300`}>
              {company}
            </p>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium whitespace-nowrap transition-colors duration-300 ${
            isEducation 
              ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300' 
              : 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary'
          }`}>
            {period}
          </span>
        </div>

        {/* Description or bullet points */}
        {typeof description === 'string' ? (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 transition-colors duration-300">
            {description}
          </p>
        ) : (
          <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4 transition-colors duration-300">
            {Array.isArray(description) && description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {/* Skills tags */}
        {skills && skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded border border-neutral-200 dark:border-neutral-600 hover:border-primary hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
