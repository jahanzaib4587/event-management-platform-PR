import React, { useState } from "react";
import { Button, Card, Form, Input, Avatar } from "antd";
import InputEmoji from "react-input-emoji";
import Picker from "emoji-picker-react";
import { SendOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import "emoji-mart/css/emoji-mart.css";
import "../../../App.css";
import { componentStyles } from "../../../Admin-Main-View/styles";
const Index = (props) => {
  const { isGroupChat, setIsGroupChat } = props;
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
      title="Main Chat"
      style={{
        // width: "100%",
        height: props.isGroupChat ? "50vh" : "95vh",
        border: "none",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingInline: "10px",
        // overflow: "auto",
        backgroundColor: "#4E5054",
        borderBottom: "none",
        borderRadius: "20px",
        padding: "10px",
        paddingInline: "20px",
      }}
    >
      <div>
        <h2 style={componentStyles.adminChatHeadingInner}>Main Chat</h2>
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
      {!isGroupChat && (
        <Button
          onClick={() => setIsGroupChat(true)}
          style={{
            textDecoration: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "transparent",
              borderRadius: "50px",
              border: "1px solid #ffff",
              height: "36px",
              width: "36px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", height: "24px", width: "24px" }}>
              {" "}
              +
            </span>
          </div>
          <span style={{ color: "white", fontSize: "18px" }}>
            Create Group Chat
          </span>
        </Button>
      )}
    </div>
  );
};

export default Index;