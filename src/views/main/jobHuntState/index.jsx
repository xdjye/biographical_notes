import React from "react";
import { Typography, Select, DatePicker, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { JobHuntStateWrapper } from "./styled";
const { Title } = Typography;

export default function JobHuntState() {
  const options = [
    {
      label: "离职-随时到岗",
      value: "0"
    },
    {
      label: "在职-月内到岗",
      value: "1"
    },
    {
      label: "在职-考虑机会",
      value: "2"
    },
    {
      label: "在职-暂不考虑",
      value: "3"
    },
  ];
  return (
    <JobHuntStateWrapper>
      <Title level={4}>求职状态</Title>
      <Select style={{ minWidth: 130 }} placeholder="请选择" options={options} />
    </JobHuntStateWrapper>
  );
}
