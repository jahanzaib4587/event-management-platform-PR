import React from "react";
import {
  EyeOutlined,
  StopOutlined,
  PlayCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import HeaderComponent from "./HeaderComponent";

const AdminChat = () => {
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "20px",
        width: "600px",
        backgroundColor: "#b2aeae",
        justifyContent: "flex-start",
        paddingInline: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          width: "80px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          borderRadius: "3px",
        }}
      >
        <h4 style={{ color: "#fff", alignSelf: "centers" }}>Live</h4>
      </div>
      <HeaderComponent Icon={<EyeOutlined />} title={"2.4k"} />
      <HeaderComponent Icon={<EyeOutlined />} title={"Stop Broadcast"} />
      <HeaderComponent Icon={<InfoCircleOutlined />} title={"Stop Recording"} />
    </div>
  );
};

export default AdminChat;
