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
const Index = () => {
  const { Panel } = Collapse;
  const [isGroupChat, setIsGroupChat] = useState(false);
  const [activePanel, setActivePanel] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "Column",
        backgroundColor: "#4E5054",
        borderRadius: "20px",
        paddingBottom: "10px",
      }}
    >
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
            <MainChat isGroupChat={isGroupChat} />
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
            activeKey={1}
            ghost={true}
            onChange={(e) => {
              setActivePanel(e);
            }}
          >
            <Panel showArrow={false} key="1" style={componentStyles.flexColumn}>
              <GroupChat />
            </Panel>
          </Collapse>
        </div>
      )}
      {!isGroupChat && (
        <Button
          onClick={() => setIsGroupChat(true)}
          style={{
            textDecoration: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "transparent",
              borderRadius: "50px",
              border: "1px solid #ffff",
              height: "36px",
              width: "36px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", height: "24px", width: "24px" }}>
              {" "}
              +
            </span>
          </div>
          <span style={{ color: "white", fontSize: "18px" }}>
            Create Group Chat
          </span>
        </Button>
      )}
    </div>
  );
};

export default Index;
