import React from "react";
import { Modal_Styles } from "./modal_styles";
import { Progress } from "antd";
const PanelOptions = (props) => {
  return (
    <div style={Modal_Styles.optionHolder}>
      <p style={Modal_Styles.questionOptionsText}>{props.option}</p>
      <div style={Modal_Styles.w170}>
        <Progress
          strokeLinecap="square"
          strokeColor="#63666B"
          trailColor="transparent"
          percent={props.percentage}
          size="large"
        />
      </div>
    </div>
  );
};

export default PanelOptions;
