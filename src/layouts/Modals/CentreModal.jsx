import ReactDOM from "react-dom";
import { X } from "lucide-react";
import Button from '../../Components/Button';

const CentreModal = ({children,onClose}) => {  

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
      <div
        className="absolute inset-0 flex items-center justify-center"
        onClick={() => onClose()}
      >
        <div className="absolute bg-white z-10 rounded-2xl p-10" onClick={(e) => e.stopPropagation()}>
          {children}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0.5 top-0.5"
            onClick={() => onClose()}
          >
            <X />
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("signup-modal")
  );
};

export default CentreModal;
