import { ButtonProps } from "./types/Button";

function Button({value, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className="w-full md:w-[45%] flex justify-center items-center p-6 space-x-4 font-sans font-bold 
      text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg 
      border transitions hover:-translate-y-0.5 duration-150">
      <span>{value}</span>
    </button>
  );
}

export default Button;