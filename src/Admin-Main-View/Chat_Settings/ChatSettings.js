import React, { useState } from "react";
import {
  Collapse,
  Badge,
  Avatar,
  Image,
  Modal,
  Input,
  Tag,
  Tooltip,
  Radio,
  Progress,
  Checkbox,
  Button,
} from "antd";
import { PlusOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css";
import "../../App.css";
import TagsComponent from "./TagsComponent";
import Question from "./Question";
const Settings_Component = (props) => {
  const { Panel } = Collapse;

  const { TextArea } = Input;

  const handleCancel = () => {
    props.setOpenModal(false);
  };

  return (
    <div className="modalStyling">
      <Modal
        centered
        title="Chat Settings"
        visible={props.openModal}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={"30%"}
        className="modalAskAudience"
      >
        <div
          style={{
            background: "#4E5054",
            borderRadius: "20px",
            padding: "30px",

            // display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Question text="Show much purchase in chat feed " />
            <Question text="Set 140 character text limit" />
            <Question text="Disable Emojis" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
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
              Blocked Words/Phrases
            </p>
            <TagsComponent />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Settings_Component;
