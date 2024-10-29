import { useState, ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Enter text...",
  value = "",
  onChange = (e: ChangeEvent<HTMLInputElement>) => null,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Input;
