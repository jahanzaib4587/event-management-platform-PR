import React from "react";
import { Collapse, Badge, Avatar, Tabs, Row, Col } from "antd";
import "./ImageSwiper/styles.css";
const AudienceVideoStream = () => {
  const Data = [
    "./Videos/user2.mp4",
    "./Videos/user1.mp4",
    "./Videos/user2.mp4",
    "./Videos/user3.mp4",
    "./Videos/user1.mp4",
    "./Videos/user2.mp4",
    "./Videos/user3.mp4",
    "./Videos/user2.mp4",
    "./Videos/user1.mp4",
    "./Videos/user2.mp4",
    "./Videos/user3.mp4",
    "./Videos/user1.mp4",
  ];

  return (
    <Row justify="space-between">
      <Col xs={22} sm={22} md={6} lg={6} style={{ padding: "15px" }}>
        <video
          className="attendeesVideo"
          autoPlay
          loop
          muted
          height={"100%"}
          width={"100%"}
          style={{
            borderRadius: "10px",
            border: "5px solid #7de6d0",
            // height: "280px",
            objectFit: "cover",
          }}
        >
          <source src={"./Videos/user2.mp4"} type="video/mp4" />
        </video>
      </Col>

      <Col xs={24} sm={24} md={18} lg={18}>
        <Row>
          {Data.map((value, index) => {
            return (
              <Col xs={8} sm={8} md={4} lg={4}>
                <div
                  className="attendeesVideo"
                  style={{
                    // background: { backgroundVideo },
                    border: "5px solid black",
                    margin: "10px",
                    // width: "155px",
                    borderRadius: "10px",
                    height: "89px",
                    width: "100%",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    height={"100%"}
                    // width={"155px"}
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                  >
                    <source src={value} type="video/mp4" />
                  </video>
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
