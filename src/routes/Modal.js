import React from "react";
import "../style/Modal.css";;

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen)
        return null;

    return (
        <div className="modal-over" onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
