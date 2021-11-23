import React from "react";
import ActionComponent from "./ActionComponent";
import { Card, card } from "antd";
import { componentStyles } from "../styles";
const QuickAction = () => {
  return (
    <div className="quickActionsWrapper">
      <h1 style={componentStyles.colorWhite}>Quick Actions</h1>
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
