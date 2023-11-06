import React, { useState } from "react";
import { Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ProjectExperienceWrapper } from "./styled";
const { Title } = Typography;

export default function ProjectExperience() {
  return (
    <ProjectExperienceWrapper>
      <div className="ProjectExperience-title">
        <Title level={4}>项目经历</Title>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
        />
      </div>
    </ProjectExperienceWrapper>
  );
}
