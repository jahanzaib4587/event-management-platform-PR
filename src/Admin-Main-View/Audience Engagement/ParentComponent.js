import React, { useState } from "react";
import CounterGraph from "./CounterGraph";
import ActionComponent from "../QuickActions/ActionComponent";
import ActivityFeed from "../ActivityFeed";
import AdminChat from "../AdminChat";
import { Collapse, Badge, Avatar } from "antd";

const ParentComponent = () => {
  const { Panel } = Collapse;
  const [activePanel, setActivePanel] = useState(1);
  return (
    <>
      <CounterGraph />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <ActionComponent text="Ask the Audience" />
        <ActionComponent text="Heart Bubbles" />
      </div>
      <Collapse
        accordion
        destroyInactivePanel={true}
        activeKey={activePanel}
        ghost={true}
        onChange={(e) => {
          console.log(e);
          setActivePanel(e);
        }}
      >
        <Panel
          header="Activity Feed"
          key="1"
          style={{
            backgroundColor: "#4E5054",
            border: "none",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <ActivityFeed />
        </Panel>
        <br />
        <Panel
          header={
            <Badge offset={[10, 1]} count={5}>
              Admin Chat
            </Badge>
          }
          key="2"
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <AdminChat />
        </Panel>
      </Collapse>
    </>
  );
};

export default ParentComponent;
