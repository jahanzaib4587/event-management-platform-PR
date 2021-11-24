import React, { useState } from "react";
import { Button, Card, Form, Input, Avatar } from "antd";
import InputEmoji from "react-input-emoji";
import { SendOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import "../../App.css";
import { componentStyles } from "../styles";
export const MainChat = () => {
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
    <button htmlType="submit" style={componentStyles.sendChatIcon}>
      <SendOutlined style={componentStyles.sendIconHolder} />
    </button>
  );
  const prefix = <SmileOutlined style={componentStyles.emojiIcon} />;
  return (
    <div style={componentStyles.mainChatContainer}>
      <div style={componentStyles.messageArrayList}>
        {messagesArray.map((e) => (
          <div style={componentStyles.messageRow}>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={componentStyles.mr10}
            />
            <div style={componentStyles.messageContainer}>
              <div className=" messageUi">
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
          <div style={componentStyles.sendMessageContainer}>
            <Input
              className="chatInput"
              style={componentStyles.mainChatMessageInput}
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
