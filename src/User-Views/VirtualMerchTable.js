import { Row, Col } from "antd";
import React from "react";
import { Avatar, Button } from "antd";
import {
  AntDesignOutlined,
  HeartFilled,
  ExclamationOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ImageSwiper from "./ImageSwiper/SwiperView";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
const VirtualMerchTable = () => {
  const emojiArray = [
    {
      color: "#DD2E44",
      icon: <HeartFilled />,
    },
    {
      color: "#FFDB5E",
      icon: <HeartFilled />,
    },
    {
      color: "#DD2E44",
      icon: <ExclamationOutlined />,
    },
    {
      color: "#fff",
      icon: <PlusOutlined />,
    },
  ];
  return (
    <Row justify="space-between" style={{ marginBottom: "20px" }}>
      <Col xs={12} sm={12} md={6} lg={6}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 55, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   marginLeft: "5px",
              //   justifyContent: "space-around",
              alignSelf: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}
            >
              {" "}
              Brand Name
            </span>
            <span style={{ color: "#fff", fontSize: "16px" }}>
              San Fransico,CA
            </span>
            <Button
              type="primary"
              style={{
                borderRadius: "10px",
                width: "92px",
                height: "22px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              FOLLOW
            </Button>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={15} lg={15}>
        <ImageSwiper />
      </Col>
      <Col xs={24} sm={24} md={3} lg={3}>
        <Row style={{ justifyContent: "center" }}>
          {emojiArray.map((value, index) => {
            debugger;
            return (
              <div
                style={{
                  backgroundColor: "#3B3C40",
                  borderRadius: "50px",
                  height: "50px",
                  width: "50px",
                  margin: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: value.color, fontSize: "28px" }}>
                  {value.icon}
                </span>
              </div>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default VirtualMerchTable;
