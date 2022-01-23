import React from "react";
import { SettingOutlined, CompressOutlined } from "@ant-design/icons";
import "../index.css";
import { fullScreenStyles } from "./styles";

const VideoBackground = (props) => {
  const { setIsFullScreen, videoLink } = props.props;
  return (
    <div>
      <div style={fullScreenStyles.flexStretch}>
        <div>
          <video
            autoPlay
            muted
            style={fullScreenStyles.mainVideo}
            className="mainVideo"
          >
            <source src={videoLink} type="video/mp4" />
          </video>
        </div>
        <div style={fullScreenStyles.videoOverlay}>
          <div style={fullScreenStyles.liveContainer} className="liveContainer">
            <div
              style={fullScreenStyles.liveRedDot}
              className="liveRedDot"
            ></div>
            <span style={fullScreenStyles.liveText} className="liveText">
              LIVE
            </span>
            <span style={fullScreenStyles.liveTime} className="liveTime">
              01 : 23 : 56
            </span>
          </div>
          <div style={fullScreenStyles.iconContainer} className="iconContainer">
            <span style={fullScreenStyles.f18} className="settingsIcon">
              <SettingOutlined />
            </span>
            <span
              style={fullScreenStyles.expandIcon}
              className="expandIcon"
              onClick={() => {
                setIsFullScreen(true);
              }}
            >
              <CompressOutlined />
            </span>
          </div>
        </div>
        <div style={fullScreenStyles.viewerCountDiv}>
          <span style={fullScreenStyles.viewerCount} className="viewerCount">
            2378 Watching
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
