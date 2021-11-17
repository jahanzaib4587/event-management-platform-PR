import React from "react";
import { Switch } from "antd";
const ActionComponent = (props) => {
  return (
    <div className="quickActionChild">
      <Switch
        style={{
          alignSelf: "flex-end",
          visibility: !props.isSwitch && "hidden",
        }}
        size="small"
        // type="checkbox"
      />

      <p style={{ alignSelf: "flex-start" }}>{props.text}</p>
    </div>
  );
};

export default ActionComponent;
