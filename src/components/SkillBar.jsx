export const SkillBar = ({ name, percentage = 0 }) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-1">
        <span
          className="text-sm font-medium transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          {name}
        </span>
        <span
          className="text-xs font-medium transition-colors duration-300"
          style={{ color: 'var(--accent)' }}
        >
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-neutral-100 dark:bg-neutral-700 rounded-full h-2 transition-colors duration-300">
        <div 
          className="bg-primary dark:bg-primary h-2 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] dark:group-hover:shadow-[0_0_10px_rgba(25,120,229,0.5)]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
