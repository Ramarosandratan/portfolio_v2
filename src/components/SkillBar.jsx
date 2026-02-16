export const SkillBar = ({ name, percentage = 0 }) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">
          {name}
        </span>
        <span className="text-xs font-medium text-blue-600">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.3)]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
