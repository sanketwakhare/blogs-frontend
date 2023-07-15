import React, { useState } from "react";
import Modal from "./Modal";
import Button from "src/components/ui/button/Button";

const ModalContainer = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <Button variant="secondary" className="m10" onClick={openModal}>
        Open Container Modal
      </Button>
      {show && (
        <Modal container="true" onClick={closeModal}>
          <div className="modal__header">Title</div>
          <div className="modal__body">Click Yes or No to close the modal?</div>
          <div className="modal__footer">
            <Button onClick={closeModal} variant="secondary">
              No
            </Button>
            <Button onClick={closeModal}>Yes</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;
