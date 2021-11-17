import React, { useState, useEffect } from "react";
import { Switch } from "antd";
const ActionComponent = (props) => {
  const [switchValue, setSwitchValue] = useState(true);
  useEffect(() => {
    setSwitchValue(true);
  }, []);
  return (
    <div className="quickActionChild">
      <Switch
        defaultChecked={switchValue}
        onChange={(e) => setSwitchValue(e)}
        style={{
          background: switchValue ? "#568997" : "#edeaea",
          borderColor: switchValue ? "#568997" : "white",
          alignSelf: "flex-end",
          visibility: !props.isSwitch && "hidden",
        }}
        size="large"
        // type="checkbox"
      />

      <p style={{ alignSelf: "flex-start" }}>{props.text}</p>
    </div>
  );
};

export default ActionComponent;
