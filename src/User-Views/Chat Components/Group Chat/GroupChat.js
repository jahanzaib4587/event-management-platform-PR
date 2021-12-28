import React, { useState } from "react";
import { Button, Card, Form, Input, Avatar, Row, Col } from "antd";
import InputEmoji from "react-input-emoji";
import Picker from "emoji-picker-react";
import {
  SendOutlined,
  SmileOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "emoji-mart/css/emoji-mart.css";
import "../../../App.css";
import { componentStyles } from "../../../Admin-Main-View/styles";
const Index = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();
  const [messagesArray, setMessagesArray] = useState([
    "1st message",
    "2nd message",
    "3rd message",
    "4th message",
  ]);
  const onFinish = (value) => {
    if (inputValue) {
      setMessagesArray([...messagesArray, inputValue]);
      form.resetFields();
      setInputValue("");
    }
  };
  const suffix = (
    <button
      htmlType="submit"
      onClick={() => onFinish()}
      style={componentStyles.sendChatIcon}
    >
      <SendOutlined style={componentStyles.sendMessageIcon} />
    </button>
  );
  const prefix = <SmileOutlined style={componentStyles.smileIcon} />;
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const avatarArray = [
    <UserOutlined />,
    <UserOutlined />,
    <UserOutlined />,
    <PlusOutlined />,
  ];
  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  return (
    <Row justify="space-between">
      <Col md={2} lg={2}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {avatarArray.map((value, index) => {
            return (
              <Avatar size="large" icon={value} style={{ margin: "10px" }} />
            );
          })}
        </div>
      </Col>
      <Col md={20} lg={20}>
        <div
          title="Admin Chat"
          style={{
            height: "30vh",
            border: "none",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            paddingInline: "10px",
            backgroundColor: "#4E5054",
            borderBottom: "none",
            padding: "10px",
            paddingInline: "20px",
          }}
        >
          <div style={componentStyles.adminChatList}>
            {messagesArray.map((e, index) => (
              <div
                style={
                  index % 2 == 0
                    ? componentStyles.messageRowRevert
                    : componentStyles.messageRow
                }
              >
                <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  style={
                    index % 2 == 0 ? componentStyles.m10 : componentStyles.mr10
                  }
                />
                <div style={componentStyles.messageArray}>
                  <div
                    className={
                      index % 2 == 0 ? "messageUiMainChat" : "messageUi"
                    }
                  >
                    <span style={componentStyles.messageText}>{e}</span>
                  </div>
                  <p
                    style={
                      index % 2 == 0
                        ? componentStyles.receiverName
                        : componentStyles.senderName
                    }
                  >
                    Teddy Tereson
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col md={24} lg={24}>
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Input
                className="chatInput"
                style={{
                  borderRadius: "50px",
                  border: "none ",
                  padding: "10px",
                  paddingInline: "15px",
                }}
                placeholder="Enter Values Here"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                prefix={prefix}
                suffix={suffix}
              ></Input>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Index;
