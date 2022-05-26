import React from "react";

const Collapse = ({ title, description }) => {
  return (
    <div className="p-1 lg:p-4 grid gap-4">
      <div className="collapse w-100 rounded-box border border-base-300 collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title text-md font-medium">{title}</div>
        <div className="collapse-content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
