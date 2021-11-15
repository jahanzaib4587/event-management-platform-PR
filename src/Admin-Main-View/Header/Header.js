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
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: "red",
          width: "60px",
          height: "30px",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "3px",
        }}
      >
        <h4 style={{ color: "#fff" }}>Live</h4>
      </div>
      <HeaderComponent Icon={<EyeOutlined />} title={"2.4k"} />
      <HeaderComponent Icon={<EyeOutlined />} title={"Stop Broadcast"} />
      <HeaderComponent Icon={<InfoCircleOutlined />} title={"Stop Recording"} />
    </div>
  );
};

export default AdminChat;
