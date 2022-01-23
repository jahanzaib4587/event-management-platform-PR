import React from "react";

import VideoBackground from "./VideoBackground";
import BottomRow from "./BottomRow/Index";
import { fullScreenStyles } from "./styles";
const Index = (props) => {
  return (
    <div style={fullScreenStyles.indexContainer}>
      <VideoBackground props={props} />
      <BottomRow />
    </div>
  );
};

export default Index;
