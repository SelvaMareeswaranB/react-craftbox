import useFocusBrowser from "./Hooks/useFocusBrowser";
import "./Modal.css";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
};

export default function Modal({ open, handleClose }: ModalProps) {
  const trapRef = useFocusBrowser(open, handleClose);

  if (!open) return null;
  return (
    <div className="modalBackground">
      <div className="modalContainer" role="dialog" ref={trapRef}>
        <div className="titleCloseBtn">
          <button onClick={handleClose}>X</button>
        </div>

        <div className="title">
          <h3>Are You Sure You Want To Continue</h3>
        </div>
        <div className="content">
          <p>It Will Discard The Existing Data !!!</p>
        </div>
        <div className="footer">
          <button onClick={handleClose} id="cancelBtn">
            cancel
          </button>
          <button>continue</button>
        </div>
      </div>
    </div>
  );
}
