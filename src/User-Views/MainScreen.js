import React, { useEffect, useState } from "react";
import { SettingOutlined, ExpandOutlined } from "@ant-design/icons";
import "./index.css";
import { Col } from "antd";
import "./index.css";
import { userStyles } from "./styles";
const MainScreen = (props) => {
  const { setIsFullScreen, setVideoLink } = props;
  const [currVideo, setCurrVideo] = useState("./Videos/user1.mp4");
  useEffect(() => {
    setVideoLink(currVideo);
  }, []);

  return (
    <div style={userStyles.mainScreen}>
      <Col md={24} lg={24}>
        <video
          width={"100%"}
          autoPlay
          muted
          style={userStyles.mainScreenVideo}
          // className="mainVideo"
        >
          <source src={currVideo} type="video/mp4" />
        </video>
      </Col>
      <div style={userStyles.mainScreenTopRow}>
        <div
          style={userStyles.mainScreenLiveContainer}
          className="liveContainer"
        >
          <div
            className="liveRedDot"
            style={userStyles.mainScreenLiveDot}
          ></div>
          <span style={userStyles.mainScreenLiveText} className="liveText">
            LIVE
          </span>
          <span style={userStyles.mainScreenLiveTime} className="liveTime">
            01 : 23 : 56
          </span>
        </div>
        <div
          style={userStyles.mainScreenIconContainer}
          className="iconContainer"
        >
          <span style={userStyles.settingsIcon} className="settingsIcon">
            <SettingOutlined />
          </span>
          <span
            style={userStyles.expandIcon}
            className="expandIcon"
            onClick={() => {
              setIsFullScreen(false);
            }}
          >
            <ExpandOutlined />
          </span>
        </div>
      </div>
      <div style={userStyles.bottomRow}>
        <span style={userStyles.viewerCount} className="viewerCount">
          2378 Watching
        </span>
      </div>
    </div>
  );
};

export default MainScreen;
