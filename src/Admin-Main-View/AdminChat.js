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
    debugger;
    setMessagesArray((e) => [...e, value]);
    form.resetFields();
  };
  console.log(messagesArray);
  return (
    <Card
      title="Admin Chat"
      style={{
        width: 300,
        border: "none",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      {messagesArray.map((e) => (
        <div className="messageUi">
          // console.log(e.message);
          <span>{e.message}</span>
        </div>
      ))}

      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
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
        {/* <Form.Item name="sender">
          <Input
            placeholder="Enter Values Here"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Item> */}
        <Form.Item name="sender">
          <Button htmlType="submit"> click me</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AdminChat;
