import React, { useState, useEffect } from "react";
import { Switch } from "antd";
const ActionComponent = (props) => {
  const [switchValue, setSwitchValue] = useState(true);
  useEffect(() => {
    setSwitchValue(true);
  }, []);
  return (
    <div
      className="quickActionChild"
      style={{
        width: "30%",
        height: "120px",
        border: props.isSwitch && "5px solid #7de6d0",
      }}
    >
      <Switch
        defaultChecked={switchValue}
        onChange={(e) => setSwitchValue(e)}
        style={{
          background: switchValue ? "#7DE6D0" : "#edeaea",
          borderColor: switchValue ? "#7DE6D0" : "white",
          alignSelf: "flex-end",
          visibility: !props.isSwitch && "hidden",
        }}
        size="large"
        // type="checkbox"
      />

      <p className="actionComponentText">{props.text}</p>
    </div>
  );
};

export default ActionComponent;
