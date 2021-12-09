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
const Question = (props) => {
  const { text } = props;
  return (
    <div style={{ display: "flex" }}>
      <span style={{ marginRight: "10px" }}>
        <Checkbox />
      </span>
      <p>{text}</p>
    </div>
  );
};

export default Question;
