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
import PanelOptions from "./PanelOptions";
const PanelQuestion = () => {
  const Data = [
    {
      option: "I'm back again",
      percentage: 40,
    },
    {
      option: "Yes",
      percentage: 30,
    },
    {
      option: "No",
      percentage: 30,
    },
  ];
  return (
    <div style={Modal_Styles.parentContainer}>
      <p style={Modal_Styles.timeStamp}>11:12am</p>
      <p style={Modal_Styles.attendeesSummery}>
        1452/2,285 attendess responded (63.6 %)
      </p>
      <div style={Modal_Styles.InnerContainer}>
        <div style={Modal_Styles.questionsContainer}>
          {Data.map((value, index) => {
            return (
              <PanelOptions
                option={value.option}
                percentage={value.percentage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PanelQuestion;
