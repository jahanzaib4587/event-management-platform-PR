import React from "react";
import {
  Collapse,
  Badge,
  Avatar,
  Image,
  Modal,
  Input,
  Radio,
  Progress,
  Checkbox,
  Button,
} from "antd";
const PanelQuestion = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>11:12am</p>
      <h4>1452/2,285 attendess responded (63.6 %)</h4>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>I'm back again!</p>
          <div style={{ width: 170 }}>
            <Progress percent={30} size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelQuestion;
