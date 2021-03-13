import React from "react";

function NonEditableTitle({ title, subtitle }) {
  return (
    <div className="w-auto">
      <h1 className="text-6xl underline text-center font-semibold">{title}</h1>
      <small className="text-4xl font-light block text-center">
        {subtitle}
      </small>
    </div>
  );
}

export default NonEditableTitle;
