import React, { useState } from "react";
import { Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { WorkExperienceWrapper } from "./styled";
const { Title } = Typography;

export default function WorkExperience() {
  return (
    <WorkExperienceWrapper>
      <div className="WorkExperience-title">
        <Title level={4}>工作经历</Title>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
        />
      </div>
    </WorkExperienceWrapper>
  );
}
