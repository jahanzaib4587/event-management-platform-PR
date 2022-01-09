import React from "react";
import {
  EyeOutlined,
  StopOutlined,
  PlayCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Collapse, Badge, Avatar, Tabs, Row, Col } from "antd";

import HeaderComponent from "./HeaderComponent";
import { componentStyles } from "../styles";
const AdminChat = () => {
  return (
    <Row
      style={componentStyles.headerContainer}
      // justify="space-between"
      // align="middle"
    >
      <Col
        xs={3}
        sm={3}
        md={4}
        lg={3}
        style={componentStyles.liveButton}
        className="liveBtn"
      >
        <p style={componentStyles.headerText}>Live</p>
      </Col>
      <Col xs={4} sm={6} md={4} lg={4}>
        <HeaderComponent
          Icon={<EyeOutlined />}
          title={"2.4k"}
          colorType="#fff"
        />
      </Col>
      <Col xs={8} sm={12} md={6} lg={7}>
        <HeaderComponent
          Icon={<StopOutlined />}
          title={"Stop Broadcast"}
          colorType="#DD4B4E"
        />
      </Col>
      <Col xs={7} sm={12} md={7} lg={7}>
        <HeaderComponent
          Icon={<InfoCircleOutlined />}
          title={"Stop Recording"}
          colorType="#7DE6D0"
        />
      </Col>
    </Row>
  );
};

export default AdminChat;
