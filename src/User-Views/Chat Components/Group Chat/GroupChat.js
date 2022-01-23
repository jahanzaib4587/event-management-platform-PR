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
import { groupChatStyles } from "./styles";

const Index = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();
  const [messagesArray, setMessagesArray] = useState([
    {
      message: "1st message",
      sender: "Elon",
    },
    {
      message: "2nd message",
      sender: "Bill",
    },
    {
      message: "3rd message",
      sender: "Majid",
    },
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
      <Col xs={2} sm={2} md={2} lg={2}>
        <div style={groupChatStyles.flexColumn}>
          {avatarArray.map((value, index) => {
            return (
              <Avatar
                size={{ xs: 20, sm: 30, md: 40, lg: 20, xl: 30, xxl: 40 }}
                icon={value}
                style={groupChatStyles.m10}
              />
            );
          })}
        </div>
      </Col>

      <Col xs={20} sm={21} md={20} lg={20}>
        <div title="Admin Chat" style={groupChatStyles.adminChat}>
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
                  size={{ xs: 25, sm: 30, md: 30, lg: 20, xl: 25, xxl: 40 }}
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
                    <span style={componentStyles.messageText}>{e.message}</span>
                  </div>
                  <p
                    style={
                      index % 2 == 0
                        ? componentStyles.receiverName
                        : componentStyles.senderName
                    }
                  >
                    {e.sender}
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
            <div style={groupChatStyles.flexCenter}>
              <Input
                className="chatInput"
                style={groupChatStyles.chatInput}
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
