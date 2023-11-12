import { StepsProps } from "./types/Steps";

function Steps({step}: StepsProps) {
  return (
    <div className="group absolute -top-5 right-4 flex items-center justify-center w-20 h-10 bg-gray-200 rounded-full 
    md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150 ">
      <span className="font-mono">Step - {step}</span>
    </div>
  );
}

export default Steps;