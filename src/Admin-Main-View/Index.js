import React from "react";
import { Row, Col } from "antd";
import Header from "./Header/HeaderComponent";
import Swiper from "./SwiperComponent";
import QuickAction from "./QuickActions/QuickActions";
import ParentComponent from "./Audience Engagement/ParentComponent";
import TabsComponent from "./ThirdComponent/TabsComponent";
const Index = () => {
  return (
    <Row
      justify="center"
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
      {/* style={{ width: "35%", height: "90vh", marginRight: "25px" }} */}
      <Col sm={20} md={20} lg={8}>
        <Header />
        <Swiper />
        <QuickAction />
      </Col>
      <Col xs={23} sm={22} md={20} lg={6} className="middleColumn">
        <ParentComponent />
      </Col>
      <Col xs={22} sm={22} md={20} lg={7}>
        <TabsComponent />
      </Col>
    </Row>
  );
};

export default Index;
