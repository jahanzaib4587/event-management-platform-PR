import React from "react";
import { Row, Col, Avatar, Button } from "antd";
import {
  AntDesignOutlined,
  HeartFilled,
  ExclamationOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const FollowPage = () => {
  return (
    <>
      <Col xs={24} sm={24} md={7} lg={5}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Avatar
            size={{ xs: 80, sm: 80, md: 80, lg: 55, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
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
    </>
  );
};

export default FollowPage;
