import React, { useState } from "react";
import ActivityFeed from "../../Admin-Main-View/ActivityFeed";
import AdminChat from "../../Admin-Main-View/AdminChat";
import {
  Collapse,
  Badge,
  Avatar,
  Image,
  Modal,
  Input,
  Radio,
  Checkbox,
} from "antd";
// import "../../App.css";
import { componentStyles } from "../../Admin-Main-View/styles";
import MainChat from "../Chat Components/Main Chat/Index";

const Index = () => {
  const { Panel } = Collapse;
  const [activePanel, setActivePanel] = useState(1);
  return (
    <div>
      {/* <div>
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
      </div> */}
      <div className="adminChat">
        {/* style={componentStyles.adminChatContainer} */}
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
            key="1"
            style={componentStyles.flexColumn}
          >
            <MainChat />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Index;
