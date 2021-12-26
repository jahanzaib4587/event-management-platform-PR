import React from "react";

const MainScreen = () => {
  return (
    // <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", justifyContent: "stretch" }}>
      <video
        width="100%"
        // height={"550px"}
        autoPlay
        loop
        muted
        style={{ borderRadius: "50px" }}
      >
        <source src="./Videos/video3.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default MainScreen;
