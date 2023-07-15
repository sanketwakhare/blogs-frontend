import { useState } from "react";
import Button from "../button/Button";
import Toast from "./Toast";

const ToastStories = () => {
  const [showCenter, setShowCenter] = useState(false);
  const [showTopRight, setShowTopRight] = useState(false);
  const [showTopLeft, setShowTopLeft] = useState(false);
  const [showTopCenter, setShowTopCenter] = useState(false);
  const [showBottomCenter, setShowBottomCenter] = useState(false);
  const [showBottomLeft, setShowBottomLeft] = useState(false);
  const [showBottomRight, setShowBottomRight] = useState(false);

  return (
    <div>
      <h4>Toast</h4>
      <div style={{ display: "flex", gap: "1rem" }} className="m10">
        {/* center */}
        <div>
          <Button
            onClick={() => {
              if (!showCenter) {
                setShowCenter(true);
                setTimeout(() => {
                  setShowCenter(false);
                }, 3000);
              }
            }}
          >
            Center
          </Button>
          {showCenter && (
            <Toast position="center" type="success">
              This is a success message.
            </Toast>
          )}
        </div>

        {/* top left */}
        <div>
          <Button
            onClick={() => {
              if (!showTopLeft) {
                setShowTopLeft(true);
                setTimeout(() => {
                  setShowTopLeft(false);
                }, 3000);
              }
            }}
          >
            TopLeft
          </Button>
          {showTopLeft && (
            <Toast position="topLeft" type="warning">
              This is a warning message.
            </Toast>
          )}
        </div>

        {/* top center */}
        <div>
          <Button
            onClick={() => {
              if (!showTopCenter) {
                setShowTopCenter(true);
                setTimeout(() => {
                  setShowTopCenter(false);
                }, 3000);
              }
            }}
          >
            TopCenter
          </Button>
          {showTopCenter && (
            <Toast position="topCenter" type="error">
              This is an error message.
            </Toast>
          )}
        </div>

        {/* top right */}
        <div>
          <Button
            onClick={() => {
              if (!showTopRight) {
                setShowTopRight(true);
                setTimeout(() => {
                  setShowTopRight(false);
                }, 3000);
              }
            }}
          >
            TopRight
          </Button>
          {showTopRight && (
            <Toast position="topRight" type="info">
              This is an info message.
            </Toast>
          )}
        </div>

        {/* bottom left */}
        <div>
          <Button
            onClick={() => {
              if (!showBottomLeft) {
                setShowBottomLeft(true);
                setTimeout(() => {
                  setShowBottomLeft(false);
                }, 3000);
              }
            }}
          >
            BottomLeft
          </Button>
          {showBottomLeft && (
            <Toast position="bottomLeft" type="warning">
              This is a warning message.
            </Toast>
          )}
        </div>

        {/* bottom center */}
        <div>
          <Button
            onClick={() => {
              if (!showBottomCenter) {
                setShowBottomCenter(true);
                setTimeout(() => {
                  setShowBottomCenter(false);
                }, 3000);
              }
            }}
          >
            BottomCenter
          </Button>
          {showBottomCenter && (
            <Toast position="bottomCenter" type="error">
              This is an error message.
            </Toast>
          )}
        </div>

        {/* bottom right */}
        <div>
          <Button
            onClick={() => {
              if (!showBottomRight) {
                setShowBottomRight(true);
                setTimeout(() => {
                  setShowBottomRight(false);
                }, 3000);
              }
            }}
          >
            BottomRight
          </Button>
          {showBottomRight && (
            <Toast position="bottomRight">This is default toast message.</Toast>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToastStories;
