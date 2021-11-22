import React, { useState } from "react";
import CounterGraph from "./CounterGraph";
import ActionComponent from "../QuickActions/ActionComponent";
import ActivityFeed from "../ActivityFeed";
import AdminChat from "../AdminChat";
import { Collapse, Badge, Avatar } from "antd";
import "../../App.css";
import { componentStyles } from "../styles";

const ParentComponent = () => {
  const { Panel } = Collapse;
  const [activePanel, setActivePanel] = useState(1);
  return (
    <div style={componentStyles.secondColumnContainer}>
      <div style={componentStyles.activityFeedsContainer}>
        <h1 className="audienceEngagementHeading">Audience Engagement</h1>
        <CounterGraph />
        <div style={componentStyles.actionComponentContainer}>
          <ActionComponent text="Ask the Audience" isAudienceComp={true} />
          <ActionComponent text="Heart Bubbles" isAudienceComp={true} />
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
          destroyInactivePanel={true}
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
                count={5}
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
