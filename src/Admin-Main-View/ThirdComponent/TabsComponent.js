import React, { useState } from "react";
import { Tabs } from "antd";
import { MainChat } from "./MainChat";
import Attendees from "./Attendees";
import "../../App.css";
import { SettingOutlined } from "@ant-design/icons";
import { componentStyles } from "../styles";
import ChatSettings from "../Chat_Settings/ChatSettings";
const TabsComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  const { TabPane } = Tabs;
  return (
    <div style={componentStyles.tabsHolder}>
      <ChatSettings
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></ChatSettings>
      <Tabs defaultActiveKey="1" style={componentStyles.tabPaneHolder}>
        <TabPane tab="Main Chat" key="1" style={componentStyles.h100}>
          <MainChat />
        </TabPane>
        <TabPane tab="Attendees" key="2">
          <Attendees />
        </TabPane>
      </Tabs>
      <span
        style={{
          position: "relative",
          alignSelf: "flex-end",
          color: "#fff",
          fontSize: "30px",
          zIndex: "2",
          marginLeft: "83%",
          marginTop: "50px",
          cursor: "pointer",
        }}
        onClick={() => setOpenModal(true)}
      >
        <SettingOutlined />
      </span>
    </div>
  );
};

export default TabsComponent;
