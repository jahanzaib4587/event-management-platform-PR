import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
const HeaderComponent = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        width: props.title == "2.4k" ? "15%" : "25%",
        margin: "10px",
        background: "#3B3C40",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ color: props.colorType }}>{props.Icon}</span>
      <span
        style={{
          marginLeft: "5px",
          color: "#fff",
          fontSize: "9px",
          fontWeight: "bold",
        }}
      >
        {props.title}
      </span>
    </div>
  );
};

export default HeaderComponent;
