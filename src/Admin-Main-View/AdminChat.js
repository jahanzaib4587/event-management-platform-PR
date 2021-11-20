import React, { useState } from "react";
import { Button, Card, Form, Input } from "antd";
import InputEmoji from "react-input-emoji";
import { SendOutlined, SmileOutlined } from "@ant-design/icons";

import "../App.css";
const AdminChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();
  const [messagesArray, setMessagesArray] = useState([
    {
      message: "1st message",
      sender: "jahanzaib",
    },
    {
      message: "2nd message",
      sender: "shahzaib",
    },
    {
      message: "3rd message",
      sender: "junaid",
    },
  ]);
  const onFinish = (value) => {
    setMessagesArray((e) => [...e, value]);
    form.resetFields();
  };
  console.log(messagesArray);
  const suffix = (
    <button htmlType="submit" style={{ all: "unset ", cursor: "pointer" }}>
      <SendOutlined
        style={{ transform: "rotate(310deg)", fontSize: "20px", color: "#fff" }}
      />
    </button>
  );
  const prefix = <SmileOutlined style={{ fontSize: "20px", color: "#fff" }} />;
  return (
    <div
      title="Admin Chat"
      style={{
        width: "100%",
        border: "none",
        display: "flex",
        flexDirection: "column",
        paddingInline: "10px",
        overflow: "auto",
        backgroundColor: "#4E5054",
        borderBottom: "none",
      }}
    >
      <h2 style={{ color: "#fff", fontWeight: "bold" }}>Admin Chat</h2>
      <span style={{ paddingInline: "20px", margin: "10px" }}>
        {messagesArray.map((e) => (
          <div
            className="messageUi"
            style={{
              backgroundColor: e.sender === "junaid" ? "#3B3C40" : "#7DE6D0",
            }}
          >
            <span>{e.message}</span>
          </div>
        ))}
      </span>

      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item name="message">
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
              onChange={(e) => setInputValue(e)}
              onPressEnter={onFinish}
              prefix={prefix}
              suffix={suffix}
            ></Input>
          </div>
        </Form.Item>
        <Form.Item name="sender" value="i am sender">
          <Button htmlType="submit"> click me</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminChat;
