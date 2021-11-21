import React, { useState } from "react";
import { Button, Card, Form, Input } from "antd";
import InputEmoji from "react-input-emoji";
import { SendOutlined, SmileOutlined } from "@ant-design/icons";

import "../../App.css";
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
    <button htmlType="submit" style={{ all: "unset ", cursor: "pointer" }}>
      <SendOutlined
        style={{ transform: "rotate(310deg)", fontSize: "20px", color: "#fff" }}
      />
    </button>
  );
  const prefix = (
    <SmileOutlined
      style={{ fontSize: "20px", color: "#fff", marginRight: "10px" }}
    />
  );
  return (
    <div
      style={{
        width: "100%",
        border: "none",
        height: "88vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flexDirection: "column",
        paddingInline: "10px",
        overflow: "auto",
      }}
    >
      <div>
        <span
          style={{ paddingInline: "20px", margin: "10px", overflowX: "auto" }}
        >
          {messagesArray.map((e) => (
            <div
              className="messageUi"
              style={{
                backgroundColor: "#7DE6D0",
              }}
            >
              <span>{e}</span>
            </div>
          ))}
        </span>
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
