import React from "react";
import { EyeOutlined } from "@ant-design/icons";

const HeaderComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "5px",
      }}
    >
      {props.Icon}
      <p style={{ backgroundColor: "white", marginLeft: "5px" }}>
        {props.title}
      </p>
    </div>
  );
};

export default HeaderComponent;
