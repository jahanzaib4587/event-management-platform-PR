import React from "react";
import { Collapse, Badge, Avatar, Tabs, Row, Col } from "antd";
import "./ImageSwiper/styles.css";
import "./index.css";
import { userStyles } from "./styles";
const AudienceVideoStream = () => {
  // const Data = [
  //   "./Videos/user2.mp4",
  //   "./Videos/user1.mp4",
  //   "./Videos/user2.mp4",
  //   "./Videos/user3.mp4",
  //   "./Videos/user1.mp4",
  //   "./Videos/user2.mp4",
  //   "./Videos/user3.mp4",
  //   "./Videos/user2.mp4",
  //   "./Videos/user1.mp4",
  //   "./Videos/user2.mp4",
  //   "./Videos/user3.mp4",
  //   "./Videos/user1.mp4",
  // ];
  const Data = [
    "./Images/user6.jpg",
    "./Images/user7.jpg",
    "./Images/user3.jpg",
    "./Images/user4.jpg",
    "./Images/user5.jpg",
    "./Images/user6.jpg",
    "./Images/user7.jpg",
    "./Images/user8.jpg",
    "./Images/user9.jpg",
    "./Images/user4.jpg",
    "./Images/user5.jpg",
    "./Images/user3.jpg",
  ];
  return (
    <Row justify="space-between">
      <Col xs={22} sm={22} md={6} lg={6} style={userStyles.p15}>
        {/* <video
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
        </video> */}
        <img
          src={"./Images/user7.jpg"}
          height={"200px"}
          width={"100%"}
          style={userStyles.imageStyles}
          className="userView"
        ></img>
      </Col>

      <Col xs={24} sm={24} md={18} lg={18}>
        <Row>
          {Data.map((value, index) => {
            return (
              <Col xs={8} sm={8} md={4} lg={4}>
                <div
                  className="attendeesVideo"
                  style={userStyles.attendeesVideo}
                >
                  {/* <video
                    autoPlay
                    loop
                    muted
                    height={"100%"}
                    // width={"155px"}
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                  >
                    <source src={value} type="video/mp4" />
                  </video> */}
                  <img
                    src={value}
                    height={"100%"}
                    // width={"155px"}
                    width={"100%"}
                    style={userStyles.usersImages}
                  ></img>
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
