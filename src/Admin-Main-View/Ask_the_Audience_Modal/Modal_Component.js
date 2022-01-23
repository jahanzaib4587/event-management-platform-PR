import React, { useState } from "react";
import { Collapse, Modal, Input, Radio, Checkbox, Button } from "antd";
import { componentStyles } from "../styles";
import { Modal_Styles } from "./modal_styles";
import PanelQuestion from "./PanelQuestion";
import "../../App.css";
import "./style.css";
const Modal_Component = (props) => {
  const [activePanel, setActivePanel] = useState(1);
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [openModal, setOpenModal] = useState(props.modalValue);
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
  const handleBoxCLick = (value) => {
    if (value === "Box1") {
      setBox1(true);
      setBox2(false);
      setBox3(false);
      setBox4(false);
    }
    if (value === "Box2") {
      setBox1(false);
      setBox2(true);
      setBox3(false);
      setBox4(false);
    }
    if (value === "Box3") {
      setBox1(false);
      setBox2(false);
      setBox3(true);
      setBox4(false);
    }
    if (value === "Box4") {
      setBox1(false);
      setBox2(false);
      setBox3(false);
      setBox4(true);
    }
  };
  return (
    <div className="modalStyling">
      <Modal
        centered
        title="Ask the Audience"
        visible={props.modalValue}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={"40%"}
        className="modalAskAudience"
      >
        <div
          style={{
            background: "#4E5054",
            borderRadius: "20px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={Modal_Styles.textStyling}>What do you want to ask?</p>
          <TextArea
            style={Modal_Styles.textAreaStyle}
            rows={3}
            maxLength={50}
            className="borderedInput"
          />
          <p style={Modal_Styles.textStyling}>
            How should the audience respond?
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={
                box1
                  ? Modal_Styles.respondBoxesActive
                  : Modal_Styles.respondBoxes
              }
              onClick={() => handleBoxCLick("Box1")}
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
                <div style={Modal_Styles.pl10}>
                  <Radio checked disabled={!box1} />
                </div>
                <div style={Modal_Styles.pl10}>
                  <Radio disabled />
                </div>
                <p
                  style={
                    box1
                      ? Modal_Styles.respondBoxesTextActive
                      : Modal_Styles.respondBoxesText
                  }
                >
                  Pick one
                </p>
              </div>
            </div>
            <div
              style={
                box2
                  ? Modal_Styles.respondBoxesActive
                  : Modal_Styles.respondBoxes
              }
              onClick={() => handleBoxCLick("Box2")}
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
                <div style={Modal_Styles.pl10}>
                  <Checkbox
                    checked
                    className={box2 ? "value-checkbox" : ""}
                    disabled={!box2}
                  />
                </div>
                <div style={Modal_Styles.pl10}>
                  <Checkbox
                    checked
                    className={box2 ? "value-checkbox" : ""}
                    disabled={!box2}
                  />
                </div>
                <p
                  style={
                    box2
                      ? Modal_Styles.respondBoxesTextActive
                      : Modal_Styles.respondBoxesText
                  }
                >
                  Pick Multiple
                </p>
              </div>
            </div>
            <div
              style={
                box3
                  ? Modal_Styles.respondBoxesActive
                  : Modal_Styles.respondBoxes
              }
              onClick={() => handleBoxCLick("Box3")}
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
                  style={
                    box3
                      ? Modal_Styles.respondBoxNumberingActive
                      : Modal_Styles.respondBoxNumbering
                  }
                >
                  1
                </div>
                <div
                  style={
                    box3
                      ? Modal_Styles.respondBoxNumberingActive
                      : Modal_Styles.respondBoxNumbering
                  }
                >
                  2
                </div>
                <p
                  style={
                    box3
                      ? Modal_Styles.respondBoxesTextActive
                      : Modal_Styles.respondBoxesText
                  }
                >
                  Rank Choices
                </p>
              </div>
            </div>
            <div
              style={
                box4
                  ? Modal_Styles.respondBoxesActive
                  : Modal_Styles.respondBoxes
              }
              onClick={() => handleBoxCLick("Box4")}
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
                  style={
                    box4
                      ? Modal_Styles.respondBoxCircleActive
                      : Modal_Styles.respondBoxCircle
                  }
                ></div>
                <p
                  style={
                    box4
                      ? Modal_Styles.respondBoxesTextActive
                      : Modal_Styles.respondBoxesText
                  }
                >
                  Free Answer
                </p>
              </div>
            </div>
          </div>
          <Input
            placeholder="option 1"
            style={Modal_Styles.options}
            maxLength={40}
            className="borderedInput"
          ></Input>
          <Button style={Modal_Styles.addOptions} className="borderedBtn">
            <span style={Modal_Styles.addOptionsText}>Add another option</span>
          </Button>

          <Button
            size={"medium"}
            style={Modal_Styles.postBtn}
            className="borderedBtn"
          >
            Post in Chat
          </Button>
          <p style={Modal_Styles.previousQuestion}>Previous Questions:</p>
          <div style={Modal_Styles.panelHeight}>
            <Collapse
              className="modal_component"
              accordion
              style={componentStyles.colorWhite}
              destroyInactivePanel={true}
              style={componentStyles.colorWhite}
              activeKey={activePanel}
              ghost={true}
              onChange={(e) => {
                setActivePanel(e);
              }}
            >
              <Panel
                header="Is this your first livestream with our band?"
                key="1"
                style={componentStyles.activityFeedPanel}
              >
                <PanelQuestion />
              </Panel>
              <Panel
                header="Is this your first livestream with our band?"
                key="2"
                style={componentStyles.activityFeedPanel}
              >
                <PanelQuestion />
              </Panel>
            </Collapse>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Modal_Component;
