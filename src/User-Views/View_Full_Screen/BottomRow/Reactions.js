import React from "react";
import { Col, Row } from "antd";
import {
  AntDesignOutlined,
  HeartFilled,
  ExclamationOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const Reactions = () => {
  const emojiArray = [
    {
      color: "#DD2E44",
      icon: <HeartFilled />,
    },
    {
      color: "#FFDB5E",
      icon: <HeartFilled />,
    },
    {
      color: "#DD2E44",
      icon: <ExclamationOutlined />,
    },
    {
      color: "#fff",
      icon: <PlusOutlined />,
    },
  ];
  return (
    <>
      <Col xs={24} sm={24} md={5} lg={5}>
        <Row style={{ justifyContent: "center" }}>
          {emojiArray.map((value, index) => {
            debugger;
            return (
              <div
                style={{
                  backgroundColor: "#3B3C40",
                  borderRadius: "50px",
                  height: "50px",
                  width: "50px",
                  margin: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: value.color, fontSize: "28px" }}>
                  {value.icon}
                </span>
              </div>
            );
          })}
        </Row>
      </Col>
    </>
  );
};

export default Reactions;
