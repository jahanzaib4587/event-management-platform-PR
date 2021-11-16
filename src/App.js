import "./App.css";
import Header from "./Admin-Main-View/Header/Header";
import Swiper from "./Admin-Main-View/SwiperComponent";
import QuickAction from "./Admin-Main-View/QuickActions/QuickActions";
import CounterGraph from "./Admin-Main-View/Audience Engagement/CounterGraph";
import ActionComponent from "./Admin-Main-View/QuickActions/ActionComponent";
import ActivityFeed from "./Admin-Main-View/ActivityFeed";
import { Collapse, Badge, Avatar } from "antd";
import { useState } from "react";
function App() {
  const { Panel } = Collapse;
  const [activePanel, setActivePanel] = useState(1);
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <div>
        <Header />
        <Swiper />
        <QuickAction />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          // padding: "10px",
        }}
      >
        <CounterGraph />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <ActionComponent text="Ask the Audience" />
          <ActionComponent text="Heart Bubbles" />
        </div>
        <Collapse
          accordion
          destroyInactivePanel={true}
          style={{}}
          activeKey={activePanel}
          onChange={(e) => {
            console.log(e);
            setActivePanel(e);
          }}
        >
          <Panel
            header="Activity Feed"
            key="1"
            style={{
              backgroundColor: "red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityFeed />
          </Panel>
          <br />
          <Panel
            header={
              <Badge offset={[10, 1]} count={5}>
                Admin Chat
              </Badge>
            }
            key="2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityFeed />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default App;
