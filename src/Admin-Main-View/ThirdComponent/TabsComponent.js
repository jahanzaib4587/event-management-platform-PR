import React from "react";
import { Tabs } from "antd";
import { MainChat } from "./MainChat";
import Attendees from "./Attendees";
const TabsComponent = () => {
  const { TabPane } = Tabs;
  return (
    <Tabs defaultActiveKey="1" style={{ height: "100%" }}>
      <TabPane tab="Tab 1" key="1" style={{ height: "100%" }}>
        <MainChat />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <Attendees />
      </TabPane>
    </Tabs>
  );
};

export default TabsComponent;
