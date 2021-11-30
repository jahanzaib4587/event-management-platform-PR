import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { componentStyles } from "../styles";
const HeaderComponent = (props) => {
  return (
    <div
      style={componentStyles.headerParentContainer}
      className="headerParentContainer"
    >
      <span
        style={{ color: props.colorType, fontSize: "18px" }}
        className="headerIcons"
      >
        {props.Icon}
      </span>
      <span
        className="headerComponentText"
        style={componentStyles.headerComponentText}
      >
        {props.title}
      </span>
    </div>
  );
};

export default HeaderComponent;
