import React, { useState } from "react";
import { Tabs } from "antd";
// import { MainChat } from "../../../Admin-Main-View/ThirdComponent/MainChat";
import Attendees from "../../../Admin-Main-View/ThirdComponent/Attendees";
import "../../../App.css";
import { SettingOutlined } from "@ant-design/icons";
import { componentStyles } from "./styles";
import GroupChat from "./GroupChat";
// import ChatSettings from "../Chat_Settings/ChatSettings";
const TabsComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  const { TabPane } = Tabs;
  return (
    <div style={componentStyles.tabsHolder}>
      <Tabs defaultActiveKey="1" style={componentStyles.tabPaneHolder}>
        <TabPane tab="Group Chat" key="1" style={componentStyles.h100}>
          <GroupChat />
        </TabPane>
        <TabPane tab="Cool Guys" key="2">
          <GroupChat />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabsComponent;