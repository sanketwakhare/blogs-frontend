import React, { useState } from "react";
import "./TextField.scss";
import Button from "../button/Button";

const TextField = (props) => {
  let { className, passwordField, showHidePassword, type, ...rest } = props;
  const [fieldType, setFieldType] = useState(type);

  let txtFieldClasses = `text-field ${className}`;
  if (passwordField) {
    type = "password";
  }

  const togglePassword = () => {
    setFieldType((prevFieldType) => {
      return prevFieldType === "password" ? "text" : "password";
    });
  };

  return (
    <>
      {!passwordField && (
        <input className={txtFieldClasses} type={fieldType} {...rest}></input>
      )}
      {passwordField && (
        <span className="password-field-container">
          <input className={txtFieldClasses} type={fieldType} {...rest}></input>
          {showHidePassword && (
            <Button
              className="btn-password-field"
              onClick={() => togglePassword()}
            >
              {fieldType === "password" ? (
                <i className="fa fa-eye-slash"></i>
              ) : (
                <i className="fa fa-eye"></i>
              )}
            </Button>
          )}
        </span>
      )}
    </>
  );
};

export default TextField;
