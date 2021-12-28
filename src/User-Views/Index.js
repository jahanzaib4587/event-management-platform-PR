import React from "react";
import { Row, Col } from "antd";
import MainScreen from "./MainScreen";
import AudienceVideoStream from "./AudienceVideoStream";
import VirtualMerchTable from "./VirtualMerchTable";
import ChatComponent from "./Chat Components/Index";
const Index = () => {
  return (
    <Row
      justify="space-between"
      align="center"
      style={{
        backgroundColor: "black",
        // width: "100%",
        height: "100vh",
        // display: "flex",
        // padding: "10px",
        padding: "2%",
        // alignItems: "center",
        justifyContent: "space-evenly",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Col xs={24} sm={24} md={17} lg={17}>
        <MainScreen />
        <AudienceVideoStream />
        <VirtualMerchTable />
      </Col>
      <Col xs={22} sm={22} md={6} lg={6}>
        {/* <AdminChat /> */}
        {/* <TabsComponent /> */}
        <ChatComponent />
      </Col>
    </Row>
  );
};

export default Index;
