import React from "react";
import { Switch } from "antd";
const ActionComponent = (props) => {
  return (
    <div className="quickActionChild">
      <input
        style={{
          alignSelf: "flex-end",
          visibility: !props.isSwitch && "hidden",
        }}
        type="checkbox"
      />

      <p style={{ alignSelf: "flex-start" }}>{props.text}</p>
    </div>
  );
};

export default ActionComponent;
