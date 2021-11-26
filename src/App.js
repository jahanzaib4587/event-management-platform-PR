import "./App.css";
import Header from "./Admin-Main-View/Header/Header";
import Swiper from "./Admin-Main-View/SwiperComponent";
import QuickAction from "./Admin-Main-View/QuickActions/QuickActions";

import { Collapse, Badge, Avatar, Tabs, Row, Col } from "antd";
import { useState } from "react";
import ParentComponent from "./Admin-Main-View/Audience Engagement/ParentComponent";
import TabsComponent from "./Admin-Main-View/ThirdComponent/TabsComponent";
function App() {
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
      <Col xs={24} sm={24} md={20} lg={6} className="middleColumn">
        <ParentComponent />
      </Col>
      <Col xs={24} sm={10} md={20} lg={6}>
        <TabsComponent />
      </Col>
    </Row>
  );
}

export default App;
