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
import { userStyles } from "./styles";
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
    <Row justify="space-evenly" style={userStyles.mb20}>
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
          <div style={userStyles.flexStart}>
            <span style={userStyles.brandName}> Brand Name</span>
            <span style={userStyles.cityName}>San Fransico,CA</span>
            <Button type="primary" style={userStyles.followBtn}>
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
              <div style={userStyles.emojiContainer}>
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
