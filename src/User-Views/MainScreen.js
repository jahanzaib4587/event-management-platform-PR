import React from "react";
import {
  SettingOutlined,
  ExpandOutlined,
  UserOutlined,
  PlusOutlined,
  CompressOutlined,
} from "@ant-design/icons";
import "./index.css";
import { Button, Col } from "antd";
const MainScreen = (props) => {
  const { isFullScreen, setIsFullScreen } = props;
  console.log(isFullScreen);
  return (
    <div style={{ display: "flex" }}>
      <Col md={24} lg={24}>
        <video
          width={"100%"}
          autoPlay
          // loop
          muted
          style={{
            borderRadius: "50px",
            objectFit: "cover",
            // minHeight: "500px",
            // width: "1250px",
            // height: "550px",
          }}
          // className="mainVideo"
        >
          <source src="./Videos/user1.mp4" type="video/mp4" />
        </video>
      </Col>
      <div
        style={{
          color: "#fff",
          position: "absolute",
          zIndex: "2",
          paddingInline: "20px",
          padding: "30px",
          width: "-webkit-fill-available",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "space-evenly",
            width: "242px",
            alignItems: "center",
            // padding: "10px",
            // height: "46px",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              borderRadius: "50px",
              background: "#DD4B4E",
              width: "30px",
              height: "30px",
            }}
          ></div>
          <span
            style={{ fontSize: "22px", fontWeight: "600", color: "#000000" }}
          >
            LIVE
          </span>
          <span style={{ fontSize: "22px", color: "#000000" }}>
            {" "}
            01 : 23 : 56
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100px",
          }}
        >
          <span style={{ fontSize: "28px" }}>
            <SettingOutlined />
          </span>
          <span
            style={{
              fontSize: "28px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsFullScreen(false);
            }}
          >
            <ExpandOutlined />
          </span>
        </div>
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          color: "#fff",
          position: "absolute",
          zIndex: "2",
          paddingInline: "20px",
          padding: "30px",
          width: "-webkit-fill-available",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: "600", color: "#fff" }}>
          2378 Watching
        </span>
      </div>
    </div>
  );
};

export default MainScreen;
