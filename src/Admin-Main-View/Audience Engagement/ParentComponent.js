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
        height: "88vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "393px",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          background: "#4E5054",
          borderRadius: " 15px",
          paddingTop: "20px",
        }}
      >
        <h1 className="audienceEngagementHeading">Audience Engagement</h1>
        <CounterGraph />
        <div
          style={{
            display: "flex",
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
          </Collapse>
        </div>
      </div>
      <div style={{ width: "393px", marginTop: "10px" }} className="adminChat">
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
            header={
              <Badge offset={[10, 1]} count={5} style={{ fontWeight: "bold" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    alignSelf: "center",
                    color: "#fff",
                  }}
                >
                  Admin Chat
                </span>
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
