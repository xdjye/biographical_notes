import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

export default function MainTitle() {
  return (
    <div style={{
      textAlign: "center"
    }}>
      <Title level={2}>个人简历</Title>
    </div>
  );
}
