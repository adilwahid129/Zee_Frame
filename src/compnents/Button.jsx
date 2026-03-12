const Button = ({ text, bgcolor, color, arrow, border, gapClass = "gap-[8px]" }) => {
  return (
    <button
      className={`
        cursor-pointer
            w-max h-12 
            px-6 
            flex items-center 
            ${arrow ? gapClass : ""}
            justify-center 
            rounded-full 
          
            transition-all 
            ${bgcolor ? bgcolor : "bg-[#F3FE00]"}
            ${border ? border : "border-black"} 
        `}
    >
      <span
        className={`${color ? color : "text-[#0B0B0B]"} text-center font-[inter] text-[16px] font-semibold leading-[24px] whitespace-nowrap`}
      >
        {text}
      </span>
      {arrow && <span className="flex items-center">{arrow}</span>}
    </button>
  );
};
export default Button;
