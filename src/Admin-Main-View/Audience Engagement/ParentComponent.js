import React, { useState } from "react";
import CounterGraph from "./CounterGraph";
import ActionComponent from "../QuickActions/ActionComponent";
import ActivityFeed from "../ActivityFeed";
import AdminChat from "../AdminChat";
import { Collapse, Badge, Avatar } from "antd";
import "../../App.css";
const ParentComponent = () => {
  const { Panel } = Collapse;
  const [activePanel, setActivePanel] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CounterGraph />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "90%",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <ActionComponent text="Ask the Audience" isAudienceComp={true} />
        <ActionComponent text="Heart Bubbles" isAudienceComp={true} />
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <Collapse
          accordion
          style={{ color: "white" }}
          destroyInactivePanel={true}
          activeKey={activePanel}
          ghost={true}
          onChange={(e) => {
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
      </div>
    </div>
  );
};

export default ParentComponent;
