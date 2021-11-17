import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
const HeaderComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#424040",
        borderRadius: "30px",
        padding: "12px",
        margin: "10px",
      }}
    >
      {props.Icon}
      <span style={{ marginLeft: "5px" }}>{props.title}</span>
    </div>
  );
};

export default HeaderComponent;
