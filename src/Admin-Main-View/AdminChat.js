import React, { useState } from "react";
import { Button, Card, Form, Input } from "antd";
import InputEmoji from "react-input-emoji";
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
  return (
    <div
      title="Admin Chat"
      style={{
        width: "100%",
        border: "none",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        background: "#4E5054",
        borderBottom: "none",
      }}
    >
      <h2>Admin Chat</h2>
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

      <Form
        form={form}
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item name="message">
          <InputEmoji
            // value={inputValue}
            placeholder="Enter Values Here"
            cleanOnEnter
            onChange={(e) => setInputValue(e)}
          />
        </Form.Item>
        <Form.Item name="sender">
          <Button htmlType="submit"> click me</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminChat;
