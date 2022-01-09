import React, { useState } from "react";
import { Row, Col } from "antd";
import MainScreen from "./MainScreen";
import AudienceVideoStream from "./AudienceVideoStream";
import VirtualMerchTable from "./VirtualMerchTable";
import ChatComponent from "./Chat Components/Index";
import "./index.css";
import FullScreen from "./View_Full_Screen/Index";
const Index = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  return isFullScreen ? (
    <Row
      justify="space-evenly"
      align="center"
      style={{
        backgroundColor: "black",
        maxHeight: "100vh",
        padding: "2%",
        justifyContent: "space-evenly",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Col xs={24} sm={24} md={24} lg={17}>
        <MainScreen
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
        <AudienceVideoStream />
        <VirtualMerchTable />
      </Col>
      <Col xs={22} sm={22} md={20} lg={6}>
        {/* <AdminChat /> */}
        {/* <TabsComponent /> */}
        <ChatComponent />
      </Col>
    </Row>
  ) : (
    <FullScreen isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
  );
};

export default Index;
