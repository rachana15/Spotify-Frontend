import React from "react";
import "../css/SidebarOption.css";

function SidebarOption({ title, Icon }) {
  return (
    <div className="SidebarOption">
      {Icon && <Icon className="sidebarOption__icon"></Icon>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
