import React from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

// backdrop component
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  const { container, modalOptions } = props;
  // if modal is of type container
  if (container) {
    return <div className="modal">{props.children}</div>;
  }
  // if model options are provided
  return (
    <div className="modal">
      <div className="modal__header">{modalOptions.header}</div>
      <div className="modal__body">{modalOptions.body}</div>
      <div className="modal__footer">{modalOptions.footerTemplate}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop {...props} />, portalElement)}
      {createPortal(<ModalOverlay {...props}></ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
