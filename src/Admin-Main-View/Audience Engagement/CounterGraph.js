import React, { useState, useEffect } from "react";

import { Line } from "@ant-design/charts";
import { componentStyles } from "../styles";
import "../../User-Views/index.css";

const CounterGraph = () => {
  const [data, setData] = useState([]);
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    annotations: [
      // {
      //   type: "regionFilter",
      //   start: ["min", "median"],
      //   end: ["max", "0"],
      //   color: "#F4664A",
      // },
      // {
      //   type: "text",
      //   position: ["min", "median"],
      //   content: "video",
      //   offsetY: -4,
      //   style: {
      //     textBaseline: "bottom",
      //   },
      // },
      {
        type: "line",
        start: ["min", "median"],
        end: ["max", "median"],
        style: {
          stroke: "#F4664A",
          lineDash: [2, 2],
        },
      },
    ],
  };
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  return (
    <div style={componentStyles.graphContainer}>
      <div style={componentStyles.graphHeadings}>
        <h3 style={componentStyles.lightWhiteColor} className="viewCount">
          View Count
        </h3>
        <p style={componentStyles.lightWhiteColor} className="viewCount">
          2378 watching
        </p>
      </div>
      <Line {...config} style={{ height: "8rem" }} className="graphLine" />
    </div>
  );
};

export default CounterGraph;
