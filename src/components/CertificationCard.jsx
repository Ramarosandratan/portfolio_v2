export const CertificationCard = ({ title, subtitle, issued, icon: Icon, gradientFrom = 'from-orange-400', gradientTo = 'to-yellow-500' }) => {
  return (
    <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-700 border border-neutral-100 dark:border-neutral-600 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300 flex flex-col items-center text-center">
      {/* Icon/Badge */}
      <div className={`w-16 h-16 mb-3 rounded-full bg-gradient-to-tr ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-sm dark:shadow-md`}>
        {Icon ? (
          <Icon className="text-white text-3xl" />
        ) : (
          <span className="text-2xl">📜</span>
        )}
      </div>
      
      <h4 className="text-sm font-bold text-neutral-900 dark:text-white transition-colors duration-300">
        {title}
      </h4>
      
      {subtitle && (
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 transition-colors duration-300">
          {subtitle}
        </p>
      )}
      
      {issued && (
        <span className="mt-2 text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 transition-colors duration-300">
          Issued {issued}
        </span>
      )}
    </div>
  );
};

export default CertificationCard;
