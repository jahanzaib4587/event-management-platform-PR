import React, { useState, useEffect } from "react";
import { List, message, Avatar, Skeleton, Divider, Input } from "antd";
import {
  InfoCircleOutlined,
  SmileOutlined,
  SearchOutlined,
} from "@ant-design/icons";

// import InfiniteScroll from "react-infinite-scroll-component";
import "../../App.css";
const Attendees = () => {
  const [loading, setLoading] = useState(false);
  const data = [
    "Racing car sprays b",
    "Japanese princessto wer.",
    "Australian walk crash.",
    "Man charged ovg girl.",
    "Los Angeles battles es.",
    "Racing car sprays b",
    "Japanese princessto wer.",
    "Australian walk crash.",
    "Man charged ovg girl.",
    "Los Angeles battles es.",
    "Racing car sprays b",
    "Japanese princessto wer.",
    "Australian walk crash.",
    "Man charged ovg girl.",
    "Los Angeles battles es.",
    "Racing car sprays b",
    "Japanese princessto wer.",
    "Australian walk crash.",
    "Man charged ovg girl.",
    "Los Angeles battles es.",
    "Racing car sprays b",
    "Japanese princessto wer.",
    "Australian walk crash.",
    "Man charged ovg girl.",
    "Los Angeles battles es.",
    "Racing car sprays b",
    "Japanese princessto wer.",
    "Australian walk crash.",
    "Man charged ovg girl.",
    "Los Angeles battles es.",
  ];

  return (
    <div
      id="scrollableDiv"
      style={{
        width: "100%",
        height: "87vh",
        borderRadius: "20px",
        paddingInline: "20px",
        // display: "flex",
        // justifyContent: "start",
        overflowY: "auto",
        // padding: "0 16px",
        backgroundColor: "#3B3C40",
        // border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <Input
        prefix={
          <span
            style={{
              marginRight: "10px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            <SearchOutlined />
          </span>
        }
        placeholder="helo"
        style={{ width: "50%", borderRadius: "50px" }}
      />
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #4E5054",
            }}
          >
            <span style={{ color: "#fff" }}>{item} </span>
            <span style={{ color: "#fff", fontSize: "18px" }}>
              <InfoCircleOutlined />
            </span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Attendees;
