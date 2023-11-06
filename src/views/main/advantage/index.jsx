import React from "react";
import { Typography, Input } from "antd";
import { AdvantageWrapper } from "./styled";
const { Title } = Typography;
const { TextArea } = Input;

export default function Advantage() {
  return (
    <AdvantageWrapper>
      <Title level={4}>个人优势</Title>
      <TextArea showCount maxLength={100} placeholder="请输入" autoSize={{
        minRows: 8,
        maxRows: 8
      }} />
    </AdvantageWrapper>
  );
}
