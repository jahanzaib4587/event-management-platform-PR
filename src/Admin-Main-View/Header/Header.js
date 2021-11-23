import React from "react";
import {
  EyeOutlined,
  StopOutlined,
  PlayCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import HeaderComponent from "./HeaderComponent";
import { componentStyles } from "../styles";
const AdminChat = () => {
  return (
    <div style={componentStyles.headerContainer}>
      <div style={componentStyles.liveButton}>
        <h4 style={componentStyles.headerText}>Live</h4>
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
