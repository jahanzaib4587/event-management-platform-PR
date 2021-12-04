import React, { useState } from "react";
import {
  Collapse,
  Badge,
  Avatar,
  Image,
  Modal,
  Input,
  Radio,
  Progress,
  Checkbox,
  Button,
} from "antd";
import { componentStyles } from "../styles";
import { Modal_Styles } from "./modal_styles";
import PanelQuestion from "./PanelQuestion";
import "../../App.css";
import "./style.css";
const Modal_Component = (props) => {
  const [activePanel, setActivePanel] = useState(1);

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
    <div className="modalStyling">
      <Modal
        centered
        title="Ask the Audience"
        visible={props.modalValue}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
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
          <TextArea style={Modal_Styles.textAreaStyle} rows={3} />
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
            <div style={Modal_Styles.respondBoxes}>
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
                <p style={Modal_Styles.respondBoxesText}>Pick one</p>
              </div>
            </div>
            <div style={Modal_Styles.respondBoxes}>
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
                <p style={Modal_Styles.respondBoxesText}>Pick Multiple</p>
              </div>
            </div>
            <div style={Modal_Styles.respondBoxes}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "10px",
                }}
              >
                <div style={Modal_Styles.respondBoxNumbering}>1</div>
                <div style={Modal_Styles.respondBoxNumbering}>2</div>
                <p style={Modal_Styles.respondBoxesText}>Rank Choices</p>
              </div>
            </div>
            <div style={Modal_Styles.respondBoxes}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "10px",
                }}
              >
                <div style={Modal_Styles.respondBoxCircle}></div>
                <p style={Modal_Styles.respondBoxesText}>Free Answer</p>
              </div>
            </div>
          </div>
          <Input placeholder="option 1" style={Modal_Styles.options}></Input>
          <Button style={Modal_Styles.addOptions}>
            <span style={Modal_Styles.addOptionsText}>Add another option</span>
          </Button>

          <Button size={"medium"} style={Modal_Styles.postBtn}>
            Post in Chat
          </Button>
          <p style={Modal_Styles.previousQuestion}>Previous Questions:</p>
          <div style={Modal_Styles.panelHeight}>
            <Collapse
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
