import React, { useState } from "react";
import {
  Collapse,
  Badge,
  Avatar,
  Image,
  Modal,
  Input,
  Radio,
  Checkbox,
  Button,
} from "antd";
import { componentStyles } from "../styles";
import { Modal_Styles } from "./modal_styles";
const Modal_Component = (props) => {
  const [openModal, setOpenModal] = useState(props.modalValue);
  debugger;
  const { Panel } = Collapse;

  const { TextArea } = Input;
  const showModal = () => {
    setOpenModal(true);
  };

  const handleOk = () => {
    props.setOpenModal(false);
  };

  const handleCancel = () => {
    props.setOpenModal(false);
  };
  return (
    <div>
      <Modal
        centered
        title="Ask the Audience"
        visible={props.modalValue}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            background: "red",
            borderRadius: "50px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>What do you want to ask?</p>
          <TextArea style={{ resize: "none", borderRadius: "10px" }} rows={3} />
          <p>How should the audience respond?</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                width: "20%",
                background: "yellow",
                // height: 70,
                borderRadius: "10px",
                paddingLeft: "10px",
                paddingTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "10px",
                  // padding: "5px",
                }}
              >
                <div style={{ paddingLeft: "10px" }}>
                  <Radio />
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <Radio />
                </div>
                <p style={{ alignSelf: "self-start", fontSize: "10px" }}>
                  Pick one
                </p>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                background: "yellow",
                // height: 70,
                borderRadius: "20",
                borderRadius: "10px",
                paddingLeft: "10px",
                paddingTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "10px",
                }}
              >
                <div style={{ paddingLeft: "10px" }}>
                  <Checkbox />
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <Checkbox />
                </div>
                <p style={{ alignSelf: "self-start", fontSize: "10px" }}>
                  Pick Multiple
                </p>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                background: "yellow",
                // height: 70,
                borderRadius: "20",
                borderRadius: "10px",
                paddingLeft: "10px",
                paddingTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "10px",
                }}
              >
                <div style={{ paddingLeft: "10px" }}>1</div>
                <div style={{ paddingLeft: "10px" }}>2</div>
                <p style={{ alignSelf: "self-start", fontSize: "10px" }}>
                  Rank Choices
                </p>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                background: "yellow",
                // height: 70,
                borderRadius: "10px",
                paddingTop: "10px",
                borderColor: true ? "#7de6d0" : "transparent",
                border: "5px solid",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "10px",
                }}
              >
                <div
                  style={{
                    height: "40px",
                    width: "90%",
                    borderRadius: "20px",
                    border: "2px solid black",
                  }}
                ></div>
                <p style={{ alignSelf: "self-start", fontSize: "10px" }}>
                  Free Answer
                </p>
              </div>
            </div>
          </div>
          <Input placeholder="option 1"></Input>
          <Button style={{ width: "100%" }}>Add another option</Button>
          <Button style={{ alignSelf: "center", justifySelf: "center" }}>
            Post in Chat
          </Button>
          <h2>Previous Questions:</h2>
          <Collapse
            accordion
            style={componentStyles.colorWhite}
            destroyInactivePanel={true}
            // activeKey={activePanel}
            ghost={true}
            // onChange={(e) => {
            //   setActivePanel(e);
            // }}
          >
            <Panel
              // header="Activity Feed"
              key="1"
              style={componentStyles.activityFeedPanel}
            ></Panel>
          </Collapse>
        </div>
      </Modal>
    </div>
  );
};

export default Modal_Component;
