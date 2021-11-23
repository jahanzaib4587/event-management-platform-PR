import React, { useState, useEffect } from "react";
import { List, message, Avatar, Skeleton, Divider } from "antd";
// import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";
import { componentStyles } from "./styles";
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
    <div style={componentStyles.activityFeedListContainer}>
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={componentStyles.listItem}>
            <span style={componentStyles.listFeedData}>{item} </span>
            <span style={componentStyles.messageTime}>11:42 AM</span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ActivityFeed;
