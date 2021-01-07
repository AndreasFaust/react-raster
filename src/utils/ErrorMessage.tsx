import React from "react";

const ErrorMessage: React.FC = () => {
  console.error(`Error in react-raster! Boxes always need a wrapping Grid!`);
  return (
    <div
      style={{
        background: "red",
        padding: "0.5em",
        fontFamily: "sans-serif",
      }}
    >
      <strong>Error!</strong> This is a fallback, because this Box is not child
      of a Grid!
    </div>
  );
};

export default ErrorMessage;
