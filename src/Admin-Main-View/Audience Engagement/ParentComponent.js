import React, { useState, useEffect } from "react";
import CounterGraph from "./CounterGraph";
import ActionComponent from "../QuickActions/ActionComponent";
import ActivityFeed from "../ActivityFeed";
import AdminChat from "../AdminChat";
import { Collapse, Badge, Avatar, Image, Modal, Input } from "antd";
import "../../App.css";
import { componentStyles } from "../styles";

const ParentComponent = () => {
  const { Panel } = Collapse;
  const [activePanel, setActivePanel] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const { TextArea } = Input;
  const showModal = () => {
    setOpenModal(true);
  };

  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  return (
    <div
      style={componentStyles.secondColumnContainer}
      className={activePanel == 2 && "displayNone"}
    >
      <Modal
        centered
        title="Ask the Audience"
        visible={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{ background: "red", borderRadius: "50px", padding: "10px" }}
        >
          <p>What do you want to ask?</p>
          <TextArea style={{ resize: "none", borderRadius: "10px" }} rows={3} />
          <p>How should the audience respond?</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                width: "20%",
                background: "yellow",
                height: 70,
                borderRadius: "10px",
              }}
            >
              324234
            </div>
            <div
              style={{
                width: "20%",
                background: "yellow",
                height: 70,
                borderRadius: "20",
                borderRadius: "10px",
              }}
            >
              234234
            </div>
            <div
              style={{
                width: "20%",
                background: "yellow",
                height: 70,
                borderRadius: "20",
                borderRadius: "10px",
              }}
            >
              234234234
            </div>
            <div
              style={{
                width: "20%",
                background: "yellow",
                height: 70,
                borderRadius: "20",
                borderRadius: "10px",
              }}
            >
              234234234
            </div>
          </div>
        </div>
      </Modal>
      <div style={componentStyles.activityFeedsContainer}>
        <h1
          className="audienceEngagementHeading"
          style={componentStyles.audienceEngagementHeading}
        >
          Audience Engagement
        </h1>
        <CounterGraph />
        <div style={componentStyles.actionComponentContainer}>
          <div
            style={componentStyles.quickActionTextHolder}
            onClick={() => setOpenModal(true)}
          >
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
