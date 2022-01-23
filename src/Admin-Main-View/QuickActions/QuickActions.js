import React, { useState } from "react";
import ActionComponent from "./ActionComponent";
import { Card, card } from "antd";
import { componentStyles } from "../styles";
import Settings_Modal from "../Audio_Video_Settings/Settings_Modal";
const QuickAction = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className="quickActionsWrapper"
      style={componentStyles.quickActionWrapper}
    >
      <Settings_Modal openModal={openModal} setOpenModal={setOpenModal} />
      <h1 style={componentStyles.quickActionText}>Quick Actions</h1>
      <div
        className="quickActionContainer"
        style={componentStyles.quickActionContainer}
      >
        <ActionComponent text="Run 30sec Ad" isSwitch={true} isModal={false} />
        <ActionComponent
          text="Play Waiting Screen"
          isSwitch={false}
          isModal={false}
        />
        <ActionComponent
          text="Add Text Overlay"
          isSwitch={false}
          isModal={false}
        />
        <ActionComponent
          text="Follower Only Chat"
          isSwitch={true}
          isModal={false}
        />
        <ActionComponent
          text="Send Ad to Chat Window"
          isSwitch={true}
          isModal={false}
        />
        <ActionComponent
          text="Audio/Video Settings"
          isSwitch={false}
          openModal={openModal}
          setOpenModal={setOpenModal}
          isModal={true}
        />
      </div>
    </div>
  );
};

export default QuickAction;
