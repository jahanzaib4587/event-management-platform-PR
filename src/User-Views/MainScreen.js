import React from "react";

const MainScreen = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <video
          width="100%"
          autoPlay
          loop
          muted
          style={{ borderRadius: "50px" }}
        >
          <source src="./Videos/video3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MainScreen;
