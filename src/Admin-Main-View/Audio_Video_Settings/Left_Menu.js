import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import "./index.css";
const { Header, Content, Footer, Sider } = Layout;

const Left_Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          paddingTop: "10px",

          height: "612px",
          width: "100%",
          background: "#4E5054",
          borderRadius: "15px",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            background: "#63666B",
            padding: "15px 0px",
            cursor: "pointer",
          }}
        >
          <QrcodeOutlined style={{ fontSize: "30px", color: "#fff" }} />

          <span style={{ fontSize: "20px", color: "#fff" }}>Stream Layout</span>
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            // background: "#63666B",
            padding: "15px 0px",
            margin: "10px 0px",
            cursor: "pointer",
          }}
        >
          <AudioOutlined style={{ fontSize: "30px", color: "#fff" }} />

          <span style={{ fontSize: "20px", color: "#fff" }}>
            Audio Settings
          </span>
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            // background: "#63666B",
            padding: "15px 0px",
            cursor: "pointer",
          }}
        >
          <VideoCameraOutlined style={{ fontSize: "30px", color: "#fff" }} />

          <span style={{ fontSize: "20px", color: "#fff" }}>
            Video Settings
          </span>
        </span>
      </div>
    </div>
  );
};
export default Left_Menu;
