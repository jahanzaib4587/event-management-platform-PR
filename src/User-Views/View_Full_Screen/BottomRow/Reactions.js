import React from "react";
import { Col, Row } from "antd";
import {
  HeartFilled,
  ExclamationOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { bottomStyles } from "./styles";
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
      <Col xs={24} sm={24} md={5} lg={6}>
        <Row style={{ justifyContent: "center" }}>
          {emojiArray.map((value, index) => {
            return (
              <div style={bottomStyles.iconContainer}>
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
