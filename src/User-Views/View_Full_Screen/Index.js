import React from "react";
import MainScreen from "../MainScreen";
import {
  SettingOutlined,
  ExpandOutlined,
  UserOutlined,
  PlusOutlined,
  CompressOutlined,
} from "@ant-design/icons";
import VideoBackground from "./VideoBackground";
import BottomRow from "./BottomRow/Index";
const Index = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#000",
        overflowX: "hidden",
        // justifyContent: "space-evenly",
        // alignItems: "",
      }}
    >
      <VideoBackground props={props} />
      <BottomRow />
    </div>
  );
};

export default Index;
