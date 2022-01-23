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
  Button,
  Checkbox,
} from "antd";
// import "../../App.css";
import { componentStyles } from "../../Admin-Main-View/styles";
import MainChat from "../Chat Components/Main Chat/Index";
import GroupChat from "./Group Chat/Index";
import "../index.css";
import { innerStyles } from "./Main Chat/styles";
const Index = () => {
  const { Panel } = Collapse;
  const [isGroupChat, setIsGroupChat] = useState(false);
  const [activePanel, setActivePanel] = useState(1);
  return (
    <div style={innerStyles.chatParent}>
      <div style={componentStyles.wd100}>
        <Collapse
          accordion
          style={componentStyles.colorWhite}
          destroyInactivePanel={true}
          activeKey={1}
          ghost={true}
          onChange={(e) => {
            setActivePanel(e);
          }}
        >
          <Panel
            // header="Activity Feed"
            showArrow={false}
            key="1"
            style={componentStyles.activityFeedPanel}
          >
            <MainChat
              isGroupChat={isGroupChat}
              setIsGroupChat={setIsGroupChat}
            />
          </Panel>
        </Collapse>
      </div>
      {isGroupChat && (
        <div className="adminChat">
          {/* style={componentStyles.adminChatContainer} */}
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
              key="2"
              header={"Group Chats"}
              style={componentStyles.flexColumn}
            >
              <GroupChat />
            </Panel>
          </Collapse>
        </div>
      )}
    </div>
  );
};

export default Index;
