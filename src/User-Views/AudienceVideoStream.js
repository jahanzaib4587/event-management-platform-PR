import React from "react";
import { Collapse, Badge, Avatar, Tabs, Row, Col } from "antd";
import "./ImageSwiper/styles.css";
const AudienceVideoStream = () => {
  const Data = [
    "./Videos/video.mp4",
    "./Videos/video1.mp4",
    "./Videos/video2.mp4",
    "./Videos/video3.mp4",
    "./Videos/video.mp4",
    "./Videos/video2.mp4",
    "./Videos/video3.mp4",
    "./Videos/video.mp4",
  ];

  return (
    <Row justify="space-between">
      <Col xs={22} sm={22} md={6} lg={6}>
        {/* <video
          className="attendeesVideo"
          autoPlay
          loop
          muted
          height={"100%"}
          width={"100%"}
          style={{
            borderRadius: "10px",
            // border: "5px solid #7de6d0",
            height: "280px",
          }}
        >
          <source src={"./Videos/video1.mp4"} type="video/mp4" />
        </video> */}
      </Col>

      <Col xs={24} sm={24} md={17} lg={17}>
        <Row>
          {Data.map((value, index) => {
            return (
              <Col xs={8} sm={8} md={6} lg={6}>
                <div
                  className="attendeesVideo"
                  style={{
                    // background: { backgroundVideo },
                    border: "5px solid transparent",
                    margin: "10px",
                    // width: "155px",
                    borderRadius: "10px",
                    // height: "100px",
                    // width: "100px",
                  }}
                >
                  {/* <video
                    autoPlay
                    loop
                    muted
                    height={"100%"}
                    width={"100%"}
                    style={{ borderRadius: "10px" }}
                  >
                    <source src={value} type="video/mp4" />
                  </video> */}
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
      {/* </Col> */}
    </Row>
  );
};

export default AudienceVideoStream;
