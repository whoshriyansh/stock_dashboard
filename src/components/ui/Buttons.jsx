export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "p-1 text-sm md:p-2 md:text-base rounded-lg duration-300 text-primary-text";
  const variants = {
    purple: "bg-primary-purple hover:bg-[#8957FF]/80 text-white",
    pur_border:
      "bg-primary-transparent border-1 border-[#8957FF]/50 hover:bg-primary-purple hover:text-white",
    success:
      "bg-primary-transparent border-1 border-[#1EAB92]/50 hover:bg-primary-purple hover:text-white",
    warning:
      "bg-primary-transparent border-1 border-[#FFD700]/50 hover:bg-primary-yellow hover:text-black",
    error:
      "bg-primary-transparent border-1 border-[#FB8181]/50 hover:bg-primary-red hover:text-black",
    pur_text:
      "bg-primary-transparent text-[#8957FF] font-bold border-1 border-[#8957FF]/50 hover:bg-primary-purple hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export const Select = ({
  options = [],
  value,
  onChange,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-2 py-2 rounded-lg font-bold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50 ";

  return (
    <select
      className={`${baseStyles} bg-primary-purple border border-[#8957FF]/30 hover:bg-primary-purple hover:text-white focus:ring-[#8957FF] ${className} appearance-none`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="bg-primary-card text-primary-text font-semibold hover:bg-primary-red hover:text-white"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
