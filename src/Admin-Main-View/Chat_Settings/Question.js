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
        <Checkbox className="value-checkbox " />
      </span>

      <p
        style={{
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          lineHeight: "22px",
          /* identical to box height */

          color: "#FFFFFF",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Question;
