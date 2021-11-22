import "./App.css";
import Header from "./Admin-Main-View/Header/Header";
import Swiper from "./Admin-Main-View/SwiperComponent";
import QuickAction from "./Admin-Main-View/QuickActions/QuickActions";

import { Collapse, Badge, Avatar, Tabs } from "antd";
import { useState } from "react";
import ParentComponent from "./Admin-Main-View/Audience Engagement/ParentComponent";
import TabsComponent from "./Admin-Main-View/ThirdComponent/TabsComponent";
function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-evenly",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "450px", marginRight: "10%" }}>
        <Header />
        <Swiper />
        <QuickAction />
      </div>
      <div
        style={{
          width: "393px",
          marginRight: "30px",
        }}
      >
        <ParentComponent />
      </div>
      <div style={{ width: "393px" }}>
        <TabsComponent />
      </div>
    </div>
  );
}

export default App;
