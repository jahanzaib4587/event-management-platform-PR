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
      justify="space-between"
      align="middle"
    >
      <Col lg={3} style={componentStyles.liveButton} className="liveBtn">
        <h4 style={componentStyles.headerText}>Live</h4>
      </Col>
      <Col lg={5}>
        <HeaderComponent
          Icon={<EyeOutlined />}
          title={"2.4k"}
          colorType="#fff"
        />
      </Col>
      <Col lg={6}>
        <HeaderComponent
          Icon={<StopOutlined />}
          title={"Stop Broadcast"}
          colorType="#DD4B4E"
        />
      </Col>
      <Col lg={6}>
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
