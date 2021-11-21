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
    debugger;
    array1 = data.filter((e) => e.includes(searchValue));
  }, [searchValue]);
  const content = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <span>{currentName}</span>
      <span style={{ width: "25px", height: "25px" }}>
        <CloseOutlined />
      </span>
    </div>
  );
  return (
    <div
      id="scrollableDiv"
      style={{
        width: "100%",
        height: "87vh",
        paddingInline: "20px",
        overflowY: "auto",
      }}
    >
      <Input
        onChange={(value) => setSearchValue(value.target.value)}
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
        placeholder="Search Usernames"
        style={{
          width: "50%",
          borderRadius: "8px",
          marginBottom: "20px",
          marginLeft: "5%",
        }}
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
            <div>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                style={{ marginRight: "10px" }}
              />
              <span style={{ color: "#fff" }}>{item} </span>
            </div>
            <span
              style={{ color: "#fff", fontSize: "18px" }}
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
