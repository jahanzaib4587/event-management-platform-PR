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
import "./styles.css";
import { Component_Styles } from "./componet_styles";
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
        title="Audio/Video Settings"
        visible={props.openModal}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={"55%"}
        className="modalAskAudience"
      >
        <div
          style={{
            background: "#63666B",
            borderRadius: "20px",
            flexDirection: "column",
          }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={7} lg={7}>
              <Left_Menu />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={17}
              lg={17}
              style={Component_Styles.dimensionParent}
            >
              <div style={Component_Styles.flexColumn}>
                <span style={Component_Styles.dimensionHeading}>
                  Single Video Stream
                </span>
                <div
                  style={Component_Styles.dimensionContainerColumn}
                  className="layouts"
                >
                  <div style={Component_Styles.layout1}>1</div>
                </div>

                <div style={Component_Styles.flexColumn}>
                  <span style={Component_Styles.dimensionHeading}>
                    Two Video Stream
                  </span>
                  <div style={{ display: "flex" }}>
                    <div
                      style={Component_Styles.dimensionContainerColumn}
                      className="layouts"
                      className="layouts"
                    >
                      <div style={Component_Styles.layout2}>1</div>
                      <div style={Component_Styles.layout2}>2</div>
                    </div>
                    <div
                      style={Component_Styles.dimensionContainerRow}
                      className="layouts"
                    >
                      <div style={Component_Styles.layout3}>1</div>
                      <div style={Component_Styles.layout3}>2</div>
                    </div>
                  </div>
                </div>
                <div style={Component_Styles.flexColumn}>
                  <span style={Component_Styles.dimensionHeading}>
                    3+ Video Stream
                  </span>
                  <div style={Component_Styles.wrapFlex}>
                    <div
                      style={Component_Styles.dimensionContainerColumn}
                      className="layouts"
                    >
                      <div style={Component_Styles.flexColumn}>
                        <div style={Component_Styles.layout4_1}>1</div>
                        <div style={Component_Styles.flexContent}>
                          <div style={Component_Styles.layout4}>2</div>
                          <div style={Component_Styles.layout4}>3</div>
                          <div style={Component_Styles.layout4}>4</div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={Component_Styles.dimensionContainerColumn}
                      className="layouts"
                    >
                      <div style={Component_Styles.layout5}>1</div>
                      <div style={Component_Styles.layout5}>2</div>
                      <div style={Component_Styles.layout5}>3</div>
                    </div>
                    <div
                      style={Component_Styles.dimensionContainerColumn}
                      className="layouts"
                    >
                      <div style={Component_Styles.layout6_1}>1</div>
                      <div style={Component_Styles.flexColumn}>
                        <div style={Component_Styles.layout6}>2</div>
                        <div style={Component_Styles.layout6}>3</div>
                      </div>
                    </div>
                    <div
                      style={Component_Styles.dimensionContainerColumn}
                      className="layouts"
                    >
                      <div style={Component_Styles.flexColumn}>
                        <div style={Component_Styles.layout7}>1</div>
                        <div style={Component_Styles.layout7}>2</div>
                      </div>
                      <div style={Component_Styles.flexColumn}>
                        <div style={Component_Styles.layout7}>3</div>
                        <div style={Component_Styles.layout7}>4</div>
                      </div>
                    </div>

                    <div
                      style={Component_Styles.dimensionContainerColumn}
                      className="layouts"
                    >
                      <div style={Component_Styles.flexColumn}>
                        <div style={Component_Styles.layout8}>1</div>
                        <div style={Component_Styles.layout8}>2</div>
                      </div>
                      <div style={Component_Styles.flexColumn}>
                        <div style={Component_Styles.layout8}>3</div>
                        <div style={Component_Styles.layout8}>4</div>
                      </div>
                      <div style={Component_Styles.flexColumn}>
                        <div style={Component_Styles.layout8}>5</div>
                        <div style={Component_Styles.layout8}>6</div>
                      </div>
                    </div>

                    <div
                      style={Component_Styles.dimensionContainerRow}
                      className="layouts"
                    >
                      <div style={Component_Styles.layout9_1}>1</div>
                      <div style={Component_Styles.flexContent}>
                        <div style={Component_Styles.layout9}>2</div>
                        <div style={Component_Styles.layout9}>3</div>
                        <div style={Component_Styles.layout9}>4</div>
                        <div style={Component_Styles.layout9}>5+</div>
                      </div>
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
