const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  onClick,
  href,
  fontSize,
  padding,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center justify-center gap-1 ${
        fontSize ? `${fontSize} ${padding}` : "px-7 py-4"
      } border leading-none cursor-pointer rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-primary border-primary text-white"
      }`}
    >
      {label}
      {iconURL && <img src={iconURL} alt={iconURL} className="w-3 h-4 ml-2" />}
    </a>
  );
};

export default Button;
