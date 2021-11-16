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
  ];

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 200,
        display: "flex",
        justifyContent: "start",
        overflow: "auto",
        // padding: "0 16px",
        backgroundColor: "",
        // border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{item} </span>
              <span>Content</span>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ActivityFeed;
