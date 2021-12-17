import React from "react";
import "../style/sidebar.css";

const SidebarRow = ({ title, icon, selected }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <span className="sidebarRow__icon">{icon}</span>
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
