import React from "react";

function Alert({ alert }) {
  return (
    <div className={`alert-ctn alert-${alert.type}`}>
      <h3 className="alert-title">{alert.msg}</h3>
    </div>
  );
}

export default Alert;
