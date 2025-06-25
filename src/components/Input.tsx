import clsx from "clsx";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  wrapperClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
  className = "",
  wrapperClassName = "",
}) => {
  return (
    <div className={`input-wrapper ${wrapperClassName}`}>
      {label && (
        <label className="input-wrapper__label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={clsx("input-wrapper__field", className)}
      />
    </div>
  );
};

export default Input;
