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
        width: "568px",
        height: "54px",
        background: "#4E5054",
        justifyContent: "flex-start",
        paddingInline: "20px",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          width: "76px",
          height: "33px",
          left: "40px",
          top: "32px",
          background: "#DD4B4E",
          borderRadius: "5px",
          textAlign: "center",
          paddingTop: "5px",
        }}
      >
        <h4 style={{ color: "#fff", alignSelf: "centers" }}>Live</h4>
      </div>
      <HeaderComponent Icon={<EyeOutlined />} title={"2.4k"} colorType="#fff" />
      <HeaderComponent
        Icon={<StopOutlined />}
        title={"Stop Broadcast"}
        colorType="#DD4B4E"
      />
      <HeaderComponent
        Icon={<InfoCircleOutlined />}
        title={"Stop Recording"}
        colorType="#7DE6D0"
      />
    </div>
  );
};

export default AdminChat;
