import React, { useState } from "react";
import { Button, Card, Form, Input, Avatar } from "antd";
import InputEmoji from "react-input-emoji";
import Picker from "emoji-picker-react";
import { SendOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import "emoji-mart/css/emoji-mart.css";
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
      style={componentStyles.sendChatIcon}
    >
      <SendOutlined style={componentStyles.sendMessageIcon} />
    </button>
  );
  const prefix = <SmileOutlined style={componentStyles.smileIcon} />;
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  return (
    <div
      title="Admin Chat"
      style={componentStyles.adminChatInnerContainer}
      className="adminChatMainScreen"
    >
      <div>
        <h2 style={componentStyles.adminChatHeadingInner}>Admin Chat</h2>
      </div>
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
                className={index % 2 == 0 ? "messageUiMainChat" : "messageUi"}
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

      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <div style={componentStyles.inputContainer}>
            <Input
              className="chatInput"
              style={componentStyles.inputField}
              placeholder="Enter Values Here"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              prefix={prefix}
              suffix={suffix}
            ></Input>
            {/* <div className="picker-container">
              <input
                className="input-style"
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
              />
              <img
                className="emoji-icon"
                src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                onClick={() => setShowPicker((val) => !val)}
              />
              {showPicker && (
                <Picker
                  pickerStyle={{ width: "100%" }}
                  onEmojiClick={onEmojiClick}
                />
              )}
            </div> */}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminChat;
