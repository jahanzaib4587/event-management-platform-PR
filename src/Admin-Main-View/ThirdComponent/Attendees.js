import React, { useState, useEffect } from "react";
import {
  List,
  message,
  Avatar,
  Skeleton,
  Divider,
  Input,
  Modal,
  Button,
  Popover,
  notification,
  Space,
} from "antd";
import {
  InfoCircleOutlined,
  SmileOutlined,
  UserOutlined,
  SearchOutlined,
  CloseOutlined,
} from "@ant-design/icons";

// import InfiniteScroll from "react-infinite-scroll-component";
import "../../App.css";
import { componentStyles } from "../styles";
const Attendees = () => {
  const [currentName, setCurrentName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

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
  const openNotificationWithIcon = (text, type) => {
    notification[type]({
      message: "Alert",
      description: [text],
    });
  };
  const [foundUsers, setFoundUsers] = useState(data);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = data.filter((user) => {
        return user.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(data);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  const content = (
    <div style={componentStyles.popoverContentContainer}>
      <Button
        type="primary"
        danger
        className="modalButtonDesign"
        style={componentStyles.modalButtonDesign}
        onClick={() =>
          openNotificationWithIcon("Warning has issued", "warning")
        }
      >
        Send Warning
      </Button>
      <Button
        type="primary"
        danger
        className="modalButtonDesign"
        style={componentStyles.modalButtonDesign}
        onClick={() =>
          openNotificationWithIcon("User has temporary blocked", "error")
        }
      >
        Issue Temporary Block
      </Button>
      <Button
        type="primary"
        danger
        className="modalButtonDesign"
        style={componentStyles.modalButtonDesign}
        onClick={() =>
          openNotificationWithIcon("User has marked as bot", "info")
        }
      >
        Mark as Bot
      </Button>
      <Button
        type="primary"
        danger
        className="modalButtonDesign"
        style={componentStyles.modalButtonDesign}
        onClick={() =>
          openNotificationWithIcon("User has blocked from stream", "error")
        }
      >
        Block User From Stream
      </Button>
    </div>
  );
  const title = (
    <div style={componentStyles.popoverHeader}>
      <span>{currentName}</span>
      {/* <span style={componentStyles.closeIcon}>
        <CloseOutlined />
      </span> */}
    </div>
  );
  return (
    <div
      id="scrollableDiv"
      style={componentStyles.attendeesContainer}
      className="attendeesHeight"
    >
      <Input
        value={name}
        onChange={(e) => filter(e)}
        prefix={
          <span style={componentStyles.searchIcon}>
            <SearchOutlined />
          </span>
        }
        placeholder="Search Usernames"
        style={componentStyles.searchInput}
      />

      <List
        size="small"
        dataSource={foundUsers}
        renderItem={(item) => (
          <List.Item style={componentStyles.listItemContainer}>
            <div>
              <Avatar
                className="avatarSize"
                size="large"
                icon={<UserOutlined />}
                style={componentStyles.mr10}
              />
              <span
                style={componentStyles.attendeesListingText}
                className="attendeesListItem"
              >
                {item}
              </span>
            </div>
            <span
              style={componentStyles.infoIcon}
              onClick={() => (showModal(), setCurrentName(item))}
            >
              <Popover
                placement="topLeft"
                title={title}
                content={content}
                trigger="click"
              >
                <InfoCircleOutlined />
              </Popover>
            </span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Attendees;
