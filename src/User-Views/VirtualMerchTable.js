import { Row, Col, Avatar, Button } from "antd";
import React from "react";

import {
  AntDesignOutlined,
  HeartFilled,
  ExclamationOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ImageSwiper from "./ImageSwiper/SwiperView";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./index.css";
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
    <Row justify="space-evenly" style={{ marginBottom: "20px" }}>
      <Col xs={24} sm={12} md={6} lg={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Avatar
            size={{ xs: 60, sm: 60, md: 40, lg: 55, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
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
      <Col xs={24} sm={24} md={13} lg={13} xl={15} className="ImageSwiper">
        <ImageSwiper />
      </Col>
      <Col xs={24} sm={24} md={5} lg={5} xl={3}>
        <Row style={{ justifyContent: "center" }}>
          {emojiArray.map((value, index) => {
            return (
              <div
                style={{
                  backgroundColor: "#3B3C40",
                  borderRadius: "50px",
                  height: "50px",
                  width: "50px",
                  margin: "5px",
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