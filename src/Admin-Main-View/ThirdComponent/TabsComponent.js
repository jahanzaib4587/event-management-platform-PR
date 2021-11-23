import React from "react";
import { Tabs } from "antd";
import { MainChat } from "./MainChat";
import Attendees from "./Attendees";
import "../../App.css";
import { SettingOutlined } from "@ant-design/icons";
import { componentStyles } from "../styles";

const TabsComponent = () => {
  const { TabPane } = Tabs;
  return (
    <div style={componentStyles.tabsHolder}>
      <Tabs defaultActiveKey="1" style={componentStyles.tabPaneHolder}>
        <TabPane tab="Main Chat" key="1" style={componentStyles.h100}>
          <MainChat />
        </TabPane>
        <TabPane tab="Attendees" key="2">
          <Attendees />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
