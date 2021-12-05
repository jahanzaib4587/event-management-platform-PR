import React from "react";
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
import { Modal_Styles } from "./modal_styles";
const PanelQuestion = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "-10px" }}
    >
      <p style={Modal_Styles.timeStamp}>11:12am</p>
      <p style={Modal_Styles.attendeesSummery}>
        1452/2,285 attendess responded (63.6 %)
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#3B3C40",
          marginInline: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            padding: "10px",
            paddingInline: "20px",
          }}
        >
          <div style={Modal_Styles.optionHolder}>
            <p style={Modal_Styles.questionOptionsText}>I'm back again!</p>
            <div style={{ width: 170 }}>
              <Progress
                strokeLinecap="square"
                strokeColor="#63666B"
                trailColor="transparent"
                percent={30}
                size="large"
              />
            </div>
          </div>
          <div style={Modal_Styles.optionHolder}>
            <p style={Modal_Styles.questionOptionsText}>Yes</p>
            <div style={{ width: 170 }}>
              <Progress
                strokeLinecap="square"
                strokeColor="#63666B"
                trailColor="transparent"
                percent={50}
                size="large"
              />
            </div>
          </div>
          <div style={Modal_Styles.optionHolder}>
            <p style={Modal_Styles.questionOptionsText}>No</p>
            <div style={{ width: 170 }}>
              <Progress
                strokeLinecap="square"
                strokeColor="#63666B"
                trailColor="transparent"
                percent={70}
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelQuestion;
