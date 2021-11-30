import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { componentStyles } from "../styles";
const ActionComponent = (props) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [isBorder, setIsBorder] = useState(false);

  return (
    <div
      onClick={() => setIsBorder(true)}
      className="quickActionChild"
      style={{
        width: "30%",
        height: "120px",
        border: "5px solid transparent",
        borderColor: switchValue ? "#7de6d0" : "transparent",
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

      <p
        className="actionComponentText"
        style={componentStyles.actionComponentText}
      >
        {props.text}
      </p>
    </div>
  );
};

export default ActionComponent;
