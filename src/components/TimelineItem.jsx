export const TimelineItem = ({ title, company, period, description, skills, isEducation = false }) => {
  return (
    <div className="relative group">
      {/* Timeline dot */}
      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-blue-600 group-hover:shadow-lg transition-shadow"></div>

      {/* Card content */}
      <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className={`font-medium text-sm ${isEducation ? 'text-gray-600' : 'text-blue-600'}`}>
              {company}
            </p>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium whitespace-nowrap ${
            isEducation 
              ? 'bg-gray-100 text-gray-600' 
              : 'bg-blue-100 text-blue-600'
          }`}>
            {period}
          </span>
        </div>

        {/* Description or bullet points */}
        {typeof description === 'string' ? (
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
        ) : (
          <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-600 mb-4">
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
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
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
