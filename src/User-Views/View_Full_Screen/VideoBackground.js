import React from "react";
import MainScreen from "../MainScreen";
import {
  SettingOutlined,
  CompressOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "../index.css";
const VideoBackground = (props) => {
  const { isFullScreen, setIsFullScreen } = props.props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "stretch",
          //   objectFit: "fill",
        }}
      >
        <div>
          <video
            // width={"100vw"}
            // height={"550px"}
            autoPlay
            // loop
            muted
            style={{
              //   position: "absolute",
              //   borderRadius: "50px",
              objectFit: "cover",
              width: "100vw",
              height: "85vh",
            }}
            className="mainVideo"
          >
            <source src="./Videos/video1.mp4" type="video/mp4" />
          </video>
        </div>
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
              height: "46px",
              borderRadius: "15px",
            }}
            className="liveContainer"
          >
            <div
              style={{
                borderRadius: "50px",
                background: "#DD4B4E",
                width: "30px",
                height: "30px",
              }}
              className="liveRedDot"
            ></div>
            <span
              style={{ fontSize: "22px", fontWeight: "600", color: "#000000" }}
              className="liveText"
            >
              LIVE
            </span>
            <span
              style={{ fontSize: "22px", color: "#000000" }}
              className="liveTime"
            >
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
            className="iconContainer"
          >
            <span style={{ fontSize: "28px" }} className="settingsIcon">
              <SettingOutlined />
            </span>
            <span
              style={{
                fontSize: "28px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              className="expandIcon"
              onClick={() => {
                setIsFullScreen(true);
              }}
            >
              <CompressOutlined />
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
          <span
            style={{ fontSize: "18px", fontWeight: "600", color: "#fff" }}
            className="viewerCount"
          >
            2378 Watching
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
