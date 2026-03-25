const Button = ({ 
  text, 
  hoverText,
  variant = "primary", 
  arrow, 
  gapClass = "gap-2", 
  onClick,
  className = "" 
}) => {
  const baseClasses = "group relative cursor-pointer w-max h-12 px-6 flex items-center justify-center border border-transparent rounded-full transition-all hover:bg-transparent hover:text-[#F3FE00] hover:border-[#F3FE00]";

  const variants = {
    primary: "text-black bg-[#F3FE00] ",
    secondary: "bg-white text-black border border-white ",
    outline: "bg-transparent text-white border border-white ",
  };

  return (
    <button
    onClick={onClick}
      className={`
        ${baseClasses}
        ${variants[variant]} 
        ${className}
      `}
    >
      {/* Main Grid Container jo width hold karega */}
      <span className="grid items-center">
        
        {/* State 1: Original Text + Arrow (Normal View) */}
        <span className={`col-start-1 row-start-1 flex items-center ${gapClass} transition-all duration-300 group-hover:opacity-0 group-hover:invisible`}>
          <span className="font-[inter] text-[16px] font-semibold leading-[24px] whitespace-nowrap">
            {text}
          </span>
          {arrow && <span className="flex items-center">{arrow}</span>}
        </span>

        {/* State 2: Hover Text (Center View) */}
        {/* Ye col-start-1 row-start-1 ki wajah se usi jagah ke upar aayega aur center align hoga */}
        <span className="col-start-1 row-start-1 opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center justify-center font-[inter] text-[16px] font-semibold leading-[24px] whitespace-nowrap">
          {hoverText || text}
        </span>

        {/* Hidden Placeholder: Taake button ki width dono states mein se jo bari hai uske mutabiq fix rahe */}
        <span className="invisible pointer-events-none col-start-1 row-start-1 flex items-center">
           <span className={`${arrow ? gapClass : ""} flex items-center`}>
              {text.length > (hoverText?.length || 0) ? text : hoverText}
              {arrow && <span className="flex items-center">{arrow}</span>}
           </span>
        </span>

      </span>
    </button>
  );
};

export default Button;