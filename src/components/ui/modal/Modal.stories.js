import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./../button/Button";

const ModalStories = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const modalOptions = {
    header: "Title",
    body: "Hello Click OK or Cancel to close the modal?",
    footerTemplate: (
      <>
        <Button onClick={closeModal} variant="secondary">
          Cancel
        </Button>
        <Button onClick={closeModal}>OK</Button>
      </>
    ),
  };

  return (
    <>
      <Button className="m10" onClick={openModal}>
        Open Modal
      </Button>
      {show && <Modal onClick={closeModal} modalOptions={modalOptions}></Modal>}
    </>
  );
};

export default ModalStories;
