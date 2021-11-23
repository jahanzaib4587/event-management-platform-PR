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
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentName, setCurrentName] = useState("");
  var array1 = [];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
  useEffect(() => {
    array1 = data.filter((e) => e.includes(searchValue));
  }, [searchValue]);
  const content = (
    <div style={componentStyles.popoverContentContainer}>
      <Button type="primary" danger className="modalButtonDesign">
        Send Warning
      </Button>
      <Button type="primary" danger className="modalButtonDesign">
        Issue Temporary Block
      </Button>
      <Button type="primary" danger className="modalButtonDesign">
        Mark as Bot
      </Button>
      <Button type="primary" danger className="modalButtonDesign">
        Block User From Stream
      </Button>
    </div>
  );
  const title = (
    <div style={componentStyles.popoverHeader}>
      <span>{currentName}</span>
      <span style={componentStyles.closeIcon}>
        <CloseOutlined />
      </span>
    </div>
  );
  return (
    <div id="scrollableDiv" style={componentStyles.attendeesContainer}>
      <Input
        onChange={(value) => setSearchValue(value.target.value)}
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
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={componentStyles.listItemContainer}>
            <div>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                style={componentStyles.mr10}
              />
              <span style={componentStyles.colorWhite}>{item} </span>
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
