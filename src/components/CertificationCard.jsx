export const CertificationCard = ({ title, subtitle, issued, icon: Icon }) => {
  return (
    <div
      className="p-4 border hover:border-[color:var(--accent)] transition-colors duration-300 flex flex-col items-center text-center"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-soft)',
        borderRadius: 'var(--radius-xl)'
      }}
    >
      {/* Icon/Badge */}
      <div
        className="w-16 h-16 mb-3 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(to top right, var(--accent), var(--accent-hover))',
          boxShadow: 'var(--shadow-soft)'
        }}
      >
        {Icon ? (
          <Icon className="text-white text-3xl" />
        ) : (
          <span className="text-2xl">📜</span>
        )}
      </div>
      
      <h4 className="text-sm font-bold transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
        {title}
      </h4>
      
      {subtitle && (
        <p className="text-xs mt-1 transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
          {subtitle}
        </p>
      )}
      
      {issued && (
        <span className="mt-2 text-[10px] uppercase font-bold transition-colors duration-300" style={{color: 'var(--text-muted)'}}>
          Issued {issued}
        </span>
      )}
    </div>
  );
};

export default CertificationCard;
