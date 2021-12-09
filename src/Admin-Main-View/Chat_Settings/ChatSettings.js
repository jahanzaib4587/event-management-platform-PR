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
import "../../App.css";
import Question from "./Question";
const Settings_Component = (props) => {
  const [openModal, setOpenModal] = useState(true);
  const { Panel } = Collapse;

  const { TextArea } = Input;
  const showModal = () => {
    setOpenModal(true);
  };

  const handleOk = () => {
    // props.setOpenModal(false);
  };

  const handleCancel = () => {
    // props.setOpenModal(false);
  };

  return (
    <div className="modalStyling">
      <Modal
        centered
        title="Ask the Audience"
        visible={true}
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
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Question text="Show much purchase in chat feed " />
            <Question text="Set 140 character text limit" />
            <Question text="Disable Emojis" />
          </div>
          <p>Blocked Words/Phrases</p>
        </div>
      </Modal>
    </div>
  );
};

export default Settings_Component;
