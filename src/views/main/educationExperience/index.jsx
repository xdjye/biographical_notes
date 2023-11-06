import React, { useState } from "react";
import { Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { EducationExperienceWrapper } from "./styled";
const { Title } = Typography;

export default function EducationExperience() {
  return (
    <EducationExperienceWrapper>
      <div className="EducationExperience-title">
        <Title level={4}>教育经历</Title>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
        />
      </div>
    </EducationExperienceWrapper>
  );
}
