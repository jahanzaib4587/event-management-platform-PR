import React from "react";
import { Col, Avatar, Button } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { bottomStyles } from "./styles";
const FollowPage = () => {
  return (
    <>
      <Col xs={24} sm={24} md={7} lg={5}>
        <div style={bottomStyles.followContainer}>
          <Avatar
            size={{ xs: 80, sm: 80, md: 80, lg: 55, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
          <div style={bottomStyles.flexColumn}>
            <span style={bottomStyles.brandName}> Brand Name</span>
            <span style={bottomStyles.brandCity}>San Fransico,CA</span>
            <Button type="primary" style={bottomStyles.followBtn}>
              FOLLOW
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default FollowPage;
