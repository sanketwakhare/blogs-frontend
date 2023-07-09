import React from "react";
import TextField from "./TextField";

const TextFieldStories = () => {
  return (
    <div>
      <h4>Text Fields</h4>
      <TextField className="m10 w200" placeholder="Search"></TextField>
      <TextField
        className="m10 w300"
        value="disabled text field"
        disabled
      ></TextField>
    </div>
  );
};

export default TextFieldStories;
