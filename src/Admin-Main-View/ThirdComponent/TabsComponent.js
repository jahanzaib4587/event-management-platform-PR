import React from "react";
import { Tabs } from "antd";
import { MainChat } from "./MainChat";
import Attendees from "./Attendees";
import "../../App.css";
import { SettingOutlined } from "@ant-design/icons";

const TabsComponent = () => {
  const { TabPane } = Tabs;
  return (
    <div style={{}}>
      <Tabs
        defaultActiveKey="1"
        style={{
          height: "100%",
          backgroundColor: "#4E5054",
          borderBottom: "none",
          borderRadius: "20px",
          paddingInline: "15px",
        }}
      >
        <TabPane tab="Main Chat" key="1" style={{ height: "100%" }}>
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
