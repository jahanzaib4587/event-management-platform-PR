import React from "react";
import ActionComponent from "./ActionComponent";
import { Card, card } from "antd";
import { componentStyles } from "../styles";
const QuickAction = () => {
  return (
    <div className="quickActionsWrapper">
      <h1 style={componentStyles.colorWhite}>Quick Actions</h1>
      <div className="quickActionContainer">
        <ActionComponent text="Run 30sec Ad" isSwitch={true} />
        <ActionComponent text="Play Waiting Screen" isSwitch={false} />
        <ActionComponent text="Add Text Overlay" isSwitch={false} />
        <ActionComponent text="Follower Only Chat" isSwitch={true} />
        <ActionComponent text="Send Ad to Chat Window" isSwitch={true} />
      </div>
    </div>
  );
};

export default QuickAction;
