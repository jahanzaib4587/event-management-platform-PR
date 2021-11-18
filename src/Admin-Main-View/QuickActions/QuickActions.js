import React from "react";
import ActionComponent from "./ActionComponent";
import { Card, card } from "antd";
const QuickAction = () => {
  return (
    <div className="quickActionsWrapper">
      <h1 style={{ color: "#fff" }}>Quick Actions</h1>
      <div className="quickActionContainer">
        <ActionComponent text="Run Ad" isSwitch={true} />
        <ActionComponent text="Text 1" isSwitch={false} />
        <ActionComponent text="Text 2" isSwitch={false} />
        <ActionComponent text="Text 3" isSwitch={true} />
        <ActionComponent text="Run Ad" isSwitch={true} />
      </div>
    </div>
  );
};

export default QuickAction;
