import React from "react";
import FollowPage from "./FollowPage";
import Reactions from "./Reactions";
import { Row, Col, Avatar, Button } from "antd";
import { WechatOutlined, ShoppingOutlined } from "@ant-design/icons";
import { bottomStyles } from "./styles";

const Index = () => {
  const emojiArray = [
    {
      color: "#FFFF",
      icon: <ShoppingOutlined />,
    },
    {
      color: "#FFFF",
      icon: <WechatOutlined />,
    },
  ];
  return (
    <Row justify="space-between" align="center" style={bottomStyles.indexRow}>
      <FollowPage />
      <Reactions />
      <Col xs={24} sm={24} md={3} lg={3}>
        <Row style={{ justifyContent: "center" }}>
          {emojiArray.map((value, index) => {
            debugger;
            return (
              <div style={bottomStyles.rightIcons}>
                <span style={{ color: value.color, fontSize: "28px" }}>
                  {value.icon}
                </span>
              </div>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default Index;
