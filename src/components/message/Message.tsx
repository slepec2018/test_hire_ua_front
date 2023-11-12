import { MessageProps } from "./types/Message";

function Message({message, error}: MessageProps) {
  return (
    <p className={`max-w-sm font-sans font-light ${error ? 'text-red-600' : 'text-gray-600'}`}>
      {message}
    </p>
  );
}

export default Message;