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
  Row,
  Col,
  Button,
} from "antd";
import { PlusOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import "../Chat_Settings/index.css";
import "../../App.css";
import TagsComponent from "../Chat_Settings/TagsComponent";
import Question from "../Chat_Settings/Question";
import Left_Menu from "./Left_Menu";
const Settings_Modal = (props) => {
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
            background: "#63666B",
            borderRadius: "20px",
            // padding: "30px",

            // display: "flex",
            flexDirection: "column",
          }}
        >
          <Row gutter={16}>
            <Col md={10} lg={10}>
              <Left_Menu />
            </Col>
            <Col md={14} lg={14}>
              <h1>helo</h1>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};

export default Settings_Modal;
