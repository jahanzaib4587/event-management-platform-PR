import React, { useState } from "react";
import {
  Collapse,
  Badge,
  Avatar,
  Image,
  Modal,
  Input,
  Tag,
  Tooltip,
  Radio,
  Progress,
  Checkbox,
  Button,
} from "antd";
import { PlusOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css";
import "../../App.css";
import Question from "./Question";
const Settings_Component = (props) => {
  const [openModal, setOpenModal] = useState(true);
  const { Panel } = Collapse;

  const [tags, setTags] = useState(["Unremovable", "Tag 2", "Tag 3"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const handleClose = (removedTag) => {
    // const tags = this.state.tags.filter((tag) => tag !== removedTag);
    // console.log(tags);
    // this.setState({ tags });

    setTags((tags) => tags.filter((x) => x !== removedTag));
  };

  const showInput = () => {
    // this.setState({ inputVisible: true }, () => this.input.focus());
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //////////////////
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      // setTags[inputValue];
    }
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    this.setState(({ tags, editInputIndex, editInputValue }) => {
      const newTags = [...tags];
      newTags[editInputIndex] = editInputValue;
    });
  };
  /////////////////
  const { TextArea } = Input;
  const showModal = () => {
    props.setOpenModal(true);
  };

  const handleOk = () => {
    props.setOpenModal(false);
  };

  const handleCancel = () => {
    props.setOpenModal(false);
  };

  return (
    <div className="modalStyling">
      <Modal
        centered
        title="Chat Settings"
        visible={props.openModal}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={"30%"}
        className="modalAskAudience"
      >
        <div
          style={{
            background: "#4E5054",
            borderRadius: "20px",
            padding: "30px",

            // display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Question text="Show much purchase in chat feed " />
            <Question text="Set 140 character text limit" />
            <Question text="Disable Emojis" />
          </div>
          {tags.map((tag, index) => {
            if (editInputIndex === index) {
              return (
                <Input
                  // ref={this.saveEditInputRef}
                  // key={tag}
                  size="small"
                  value={editInputValue}
                  onChange={handleEditInputChange}
                  onBlur={handleEditInputConfirm}
                  onPressEnter={handleEditInputConfirm}
                />
              );
            }
          })}

          <p
            style={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "22px",
              /* identical to box height */

              color: "#FFFFFF",
            }}
          >
            Blocked Words/Phrases
          </p>
          <Tag closable={true}>Helo </Tag>
          <Tag closable={true}>Helo </Tag>
          <Tag closable={true}>Helo </Tag>
          <Tag className="site-tag-plus" onClick={showInput}>
            <PlusOutlined /> New Tag
          </Tag>
        </div>
      </Modal>
    </div>
  );
};

export default Settings_Component;
