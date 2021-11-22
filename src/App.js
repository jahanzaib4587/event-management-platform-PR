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
        justifyContent: "space-around",
      }}
    >
      <div style={{ width: "32%" }}>
        <Header />
        <Swiper />
        <QuickAction />
      </div>
      <div
        style={{
          flexDirection: "column",
          width: "393px",
          marginTop: "20px",
          background: "#4E5054",
          borderRadius: " 15px",
        }}
      >
        <ParentComponent />
      </div>
      <div style={{ width: "32%", marginTop: "20px" }}>
        <TabsComponent />
      </div>
    </div>
  );
}

export default App;
