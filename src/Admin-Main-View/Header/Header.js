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
    <Row style={componentStyles.headerContainer}>
      <Col>
        <div style={componentStyles.liveButton} className="liveBtn">
          <h4 style={componentStyles.headerText}>Live</h4>
        </div>
      </Col>
      <Col>
        <HeaderComponent
          Icon={<EyeOutlined />}
          title={"2.4k"}
          colorType="#fff"
        />
      </Col>
      <Col>
        <HeaderComponent
          Icon={<StopOutlined />}
          title={"Stop Broadcast"}
          colorType="#DD4B4E"
        />
      </Col>
      <Col>
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
