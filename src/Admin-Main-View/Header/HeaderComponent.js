import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { componentStyles } from "../styles";
const HeaderComponent = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        width: props.title == "2.4k" ? "15%" : "175px",

        height: "33px",
        margin: "10px",
        background: "#3B3C40",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ color: props.colorType, fontSize: "24px" }}>
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
