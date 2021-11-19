import React, { useState, useEffect } from "react";
import { List, message, Avatar, Skeleton, Divider } from "antd";
// import InfiniteScroll from "react-infinite-scroll-component";

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
      id="scrollableDiv"
      style={{
        width: "100%",
        height: 200,
        // display: "flex",
        // justifyContent: "start",
        overflowY: "scroll",
        // padding: "0 16px",
        backgroundColor: "",
        // border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span style={{ color: "#fff" }}>{item} </span>
            <span style={{ color: "#fff" }}>11:42 AM</span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ActivityFeed;
