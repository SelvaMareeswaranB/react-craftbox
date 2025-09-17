import { useState } from "react";
import "./app.css";
import Modal from "./components/Modal";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <div className="Container">
      <h1>Click Here To Open The Modal</h1>
      <button className="button" onClick={handleOpen}>
        Open
      </button>
      {openModal && <Modal open={openModal} handleClose={handleClose} />}
    </div>
  );
}
