import React, { useState, useEffect } from "react";
import { List, message, Avatar, Skeleton, Divider } from "antd";
// import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";
const ActivityFeed = () => {
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
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        overflowY: "scroll",
        backgroundColor: "#3B3C40",
      }}
    >
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderBottom: "1px solid #4E5054",
            }}
          >
            <span
              style={{
                color: "#fff",
                justifySelf: "center",
                alignSelf: "flex-start",
                fontSize: "14px",
              }}
            >
              {item}{" "}
            </span>
            <span
              style={{ color: "#fff", alignSelf: "flex-end", fontSize: "9px" }}
            >
              11:42 AM
            </span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ActivityFeed;
