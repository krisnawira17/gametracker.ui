interface ButtonProps {
  name: string;
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  type = "button",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
