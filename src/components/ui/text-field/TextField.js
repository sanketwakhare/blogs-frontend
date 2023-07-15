import React, { useState } from "react";
import "./TextField.scss";
import Button from "../button/Button";

const TextField = (props) => {
  let { className, passwordField, showHidePassword, type, ...rest } = props;

  let txtFieldClasses = `text-field ${className}`;
  if (passwordField) {
    type = "password";
  }

  const [fieldType, setFieldType] = useState(type);

  const togglePassword = () => {
    setFieldType((prevFieldType) => {
      return prevFieldType === "password" ? "text" : "password";
    });
  };

  return (
    <>
      <input className={txtFieldClasses} type={fieldType} {...rest}></input>
      {passwordField && showHidePassword && (
        <Button className="btn-password-field" onClick={() => togglePassword()}>
          {fieldType === "password" ? (
            <i className="fa fa-eye-slash"></i>
          ) : (
            <i className="fa fa-eye"></i>
          )}
        </Button>
      )}
    </>
  );
};

export default TextField;
