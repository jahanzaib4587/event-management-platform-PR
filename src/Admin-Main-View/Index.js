import React from "react";
import { Row, Col } from "antd";
import Header from "./Header/Header";
import Swiper from "./SwiperComponent";
import QuickAction from "./QuickActions/QuickActions";
import ParentComponent from "./Audience Engagement/ParentComponent";
import TabsComponent from "./ThirdComponent/TabsComponent";
import { componentStyles } from "./styles";
const Index = () => {
  return (
    <Row justify="center" align="center" style={componentStyles.parentRow}>
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
