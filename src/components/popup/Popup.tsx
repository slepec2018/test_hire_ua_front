import { PopupProps } from "./types/Popup";

function Popup({children}: PopupProps) {
  return (
    <div data-testid="popup-container" className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
      {children}
    </div>
  );
}

export default Popup;