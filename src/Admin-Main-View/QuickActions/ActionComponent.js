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
        width: "171px",
        height: "120px",
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
