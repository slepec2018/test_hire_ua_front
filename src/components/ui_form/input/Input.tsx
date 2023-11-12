import { InputProps } from "./types/Input";

function Input({ placeholder, value, name, type, onChange }: InputProps) {
  return (
    <input
      className="w-full p-6 mt-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;