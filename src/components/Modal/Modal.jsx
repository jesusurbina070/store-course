import React from 'react'
import PortalReactDOM from "react-dom"
import "./Modal.scss"

function Modal({ children }) {
    return PortalReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById("modal"),
    )
}

export default Modal

