import React from "react";

const InputHeader = props => {
  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={props.onClick}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default InputHeader;
