import React, { useState, useEffect } from "react";
import CounterGraph from "./CounterGraph";
import ActionComponent from "../QuickActions/ActionComponent";
import ActivityFeed from "../ActivityFeed";
import AdminChat from "../AdminChat";
import { Collapse, Badge, Avatar, Image } from "antd";
import "../../App.css";
import { componentStyles } from "../styles";

const ParentComponent = () => {
  const { Panel } = Collapse;
  const [activePanel, setActivePanel] = useState(1);
  console.log(activePanel);
  return (
    <div
      style={componentStyles.secondColumnContainer}
      className={activePanel == 2 && "displayNone"}
    >
      <div style={componentStyles.activityFeedsContainer}>
        <h1
          className="audienceEngagementHeading"
          style={componentStyles.audienceEngagementHeading}
        >
          Audience Engagement
        </h1>
        <CounterGraph />
        <div style={componentStyles.actionComponentContainer}>
          <div style={componentStyles.quickActionTextHolder}>
            <p style={componentStyles.askTheAudienceText}>Ask the Audience!</p>
          </div>
          <div style={componentStyles.imageHolder}></div>
        </div>
        <div style={componentStyles.wd100}>
          <Collapse
            accordion
            style={componentStyles.colorWhite}
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
              style={componentStyles.activityFeedPanel}
            >
              <ActivityFeed />
            </Panel>
          </Collapse>
        </div>
      </div>
      <div style={componentStyles.adminChatContainer} className="adminChat">
        <Collapse
          accordion
          style={componentStyles.colorWhite}
          // destroyInactivePanel={true}
          activeKey={activePanel}
          ghost={true}
          onChange={(e) => {
            setActivePanel(e);
          }}
        >
          <Panel
            header={
              <Badge
                offset={[10, 1]}
                count={50}
                style={componentStyles.fontBold}
              >
                <span style={componentStyles.adminChatHeading}>Admin Chat</span>
              </Badge>
            }
            key="2"
            style={componentStyles.flexColumn}
          >
            <AdminChat />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default ParentComponent;
