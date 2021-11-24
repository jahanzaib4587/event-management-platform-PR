import React, { useState } from "react";
import { Button, Card, Form, Input, Avatar } from "antd";
import InputEmoji from "react-input-emoji";
import { SendOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";

import "../App.css";
import { componentStyles } from "./styles";
const AdminChat = () => {
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
      style={{ all: "unset ", cursor: "pointer" }}
    >
      <SendOutlined style={componentStyles.sendMessageIcon} />
    </button>
  );
  const prefix = <SmileOutlined style={componentStyles.smileIcon} />;
  return (
    <div title="Admin Chat" style={componentStyles.adminChatInnerContainer}>
      <div style={{}}>
        <h2 style={componentStyles.adminChatHeadingInner}>Admin Chat</h2>
      </div>
      <div style={componentStyles.adminChatList}>
        {messagesArray.map((e) => (
          <div style={componentStyles.messageRow}>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={componentStyles.mr10}
            />
            <div style={componentStyles.messageArray}>
              <div className="messageUi">
                <span>{e}</span>
              </div>
              <p style={componentStyles.senderName}>Teddy Tereson</p>
            </div>
          </div>
        ))}
      </div>

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
                border: "none",
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
    </div>
  );
};

export default AdminChat;
