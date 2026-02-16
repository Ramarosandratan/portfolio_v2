export const CertificationCard = ({ title, subtitle, issued, icon: Icon, gradientFrom = 'from-orange-400', gradientTo = 'to-yellow-500' }) => {
  return (
    <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-blue-500/30 transition-colors flex flex-col items-center text-center">
      {/* Icon/Badge */}
      <div className={`w-16 h-16 mb-3 rounded-full bg-gradient-to-tr ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-sm`}>
        {Icon ? (
          <Icon className="text-white text-3xl" />
        ) : (
          <span className="text-2xl">📜</span>
        )}
      </div>
      
      <h4 className="text-sm font-bold text-gray-900">
        {title}
      </h4>
      
      {subtitle && (
        <p className="text-xs text-gray-600 mt-1">
          {subtitle}
        </p>
      )}
      
      {issued && (
        <span className="mt-2 text-[10px] uppercase font-bold text-gray-400">
          Issued {issued}
        </span>
      )}
    </div>
  );
};

export default CertificationCard;
