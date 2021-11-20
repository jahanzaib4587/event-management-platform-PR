import React from "react";
import { Tabs } from "antd";
import { MainChat } from "./MainChat";
import Attendees from "./Attendees";
import "../../App.css";
const TabsComponent = () => {
  const { TabPane } = Tabs;
  return (
    <Tabs defaultActiveKey="1" style={{ height: "100%" }}>
      <TabPane tab="Main Chat" key="1" style={{ height: "100%" }}>
        <MainChat />
      </TabPane>
      <TabPane tab="Attendees" key="2">
        <Attendees />
      </TabPane>
    </Tabs>
  );
};

export default TabsComponent;
