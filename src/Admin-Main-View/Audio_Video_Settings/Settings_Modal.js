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
  Row,
  Col,
  Button,
} from "antd";
import { PlusOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import "../Chat_Settings/index.css";
import "../../App.css";
import TagsComponent from "../Chat_Settings/TagsComponent";
import Question from "../Chat_Settings/Question";
import Left_Menu from "./Left_Menu";
const Settings_Modal = (props) => {
  const { Panel } = Collapse;

  const { TextArea } = Input;

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
            background: "#63666B",
            borderRadius: "20px",
            // padding: "30px",

            // display: "flex",
            flexDirection: "column",
          }}
        >
          <Row gutter={16}>
            <Col md={10} lg={10}>
              <Left_Menu />
            </Col>
            <Col md={14} lg={14}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Single Video Stream</h3>
                <div
                  style={{
                    width: "120px",
                    height: "107px",
                    padding: "10px",
                    border: "3px solid #fff",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #fff",
                      borderRadius: "10px",

                      width: "100px",
                      height: "90px",
                    }}
                  ></div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Two Video Stream</h3>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "120px",
                      height: "107px",
                      padding: "10px",
                      border: "3px solid #fff",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        border: "2px solid #fff",
                        borderRadius: "10px",
                        width: "50px",
                        height: "90px",
                      }}
                    ></div>
                    <div
                      style={{
                        border: "2px solid #fff",
                        borderRadius: "10px",
                        width: "50px",
                        height: "90px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      width: "120px",
                      height: "107px",
                      padding: "10px",
                      border: "3px solid #fff",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      // justifyContent: "stretch",
                      // alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        border: "2px solid #fff",
                        borderRadius: "10px",
                        width: "90%",
                        height: "90px",
                      }}
                    ></div>
                    <div
                      style={{
                        border: "2px solid #fff",
                        borderRadius: "10px",
                        width: "90%",
                        height: "90px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>3+ Video Stream</h3>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "120px",
                      height: "107px",
                      padding: "10px",
                      border: "3px solid #fff",
                      borderRadius: "10px",
                      display: "flex",
                      // justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "40px",
                      }}
                    >
                      <div
                        style={{
                          border: "2px solid #fff",
                          borderRadius: "10px",
                          width: "80px",
                          height: "70px",
                        }}
                      ></div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          style={{
                            border: "2px solid #fff",
                            borderRadius: "8px",
                            width: "33%",
                            height: "25px",
                          }}
                        ></div>
                        <div
                          style={{
                            border: "2px solid #fff",
                            borderRadius: "8px",
                            width: "33%",
                            height: "25px",
                          }}
                        ></div>
                        <div
                          style={{
                            border: "2px solid #fff",
                            borderRadius: "8px",
                            width: "33%",
                            height: "25px",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "120px",

                        height: "107px",
                        padding: "10px",
                        border: "3px solid #fff",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          border: "2px solid #fff",
                          borderRadius: "10px",
                          width: "50px",
                          height: "90px",
                        }}
                      ></div>
                      <div
                        style={{
                          border: "2px solid #fff",
                          borderRadius: "10px",
                          width: "50px",
                          height: "90px",
                        }}
                      ></div>
                      <div
                        style={{
                          border: "2px solid #fff",
                          borderRadius: "10px",
                          width: "50px",
                          height: "90px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};

export default Settings_Modal;
