import React from "react";

const Modal = ({ pdf, isOpen, setIsOpen }) => {
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  }

  return (
      <div className={`modal ${isOpen ? "active" : ""}`} onClick={handleCloseModal}>
        <img src="/assets/img/icons/close.png" className="modal-btn" onClick={() => setIsOpen(false)}/>
        <div className="modal-body">
          {pdf?.map((pdf) => (
            <img src={pdf} key={pdf} />
          ))}
        </div>
      </div>
  );
};

export default Modal;
