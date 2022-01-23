import React, { useState } from "react";
import { Row, Col } from "antd";
import MainScreen from "./MainScreen";
import AudienceVideoStream from "./AudienceVideoStream";
import VirtualMerchTable from "./VirtualMerchTable";
import ChatComponent from "./Chat Components/Index";
import "./index.css";
import FullScreen from "./View_Full_Screen/Index";
import { userStyles } from "./styles";
const Index = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [videoLink, setVideoLink] = useState("");

  return isFullScreen ? (
    <Row justify="space-evenly" align="center" style={userStyles.usersParent}>
      <Col xs={24} sm={24} md={24} lg={17}>
        <MainScreen
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
          setVideoLink={setVideoLink}
        />
        <AudienceVideoStream />
        <VirtualMerchTable />
      </Col>
      <Col xs={22} sm={22} md={20} lg={6}>
        <ChatComponent />
      </Col>
    </Row>
  ) : (
    <FullScreen
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}
      videoLink={videoLink}
    />
  );
};

export default Index;
