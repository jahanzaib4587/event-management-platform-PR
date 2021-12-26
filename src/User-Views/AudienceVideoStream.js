import React from "react";
import { Collapse, Badge, Avatar, Tabs, Row, Col } from "antd";

const AudienceVideoStream = () => {
  const colorTabs = [
    "red",
    "green",
    "yellow",
    "pink",
    "brown",
    "red",
    "white",
    "1",
  ];
  return (
    <Row justify="space-around">
      <Col xs={12} sm={12} md={6} lg={6}>
        <div
          style={{
            background: "red",
            margin: "10px",
            width: "100%",
            borderRadius: "10px",
            height: "220px",
            marginRight: "10px",
          }}
        ></div>
      </Col>

      <Col xs={24} sm={24} md={17} lg={17}>
        <Row>
          {colorTabs.map((value, index) => {
            return (
              <Col xs={4} sm={4} md={6} lg={6}>
                <div
                  style={{
                    background: "red",
                    margin: "10px",
                    // width: "155px",
                    borderRadius: "10px",
                    height: "100px",
                  }}
                ></div>
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
