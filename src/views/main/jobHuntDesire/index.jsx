import React, { useState } from "react";
import { Typography, Button, Drawer } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { JobHuntDesireWrapper } from "./styled";
import JobHuntDesireDrawer from "./JobHuntDesireDrawer";
const { Title } = Typography;

export default function JobHuntDesire() {
  const [jobHuntDrawerOpen, setJobHuntDrawerOpen] = useState(false);
  return (
    <>
      <JobHuntDesireWrapper>
        <div className="JobHuntDesire-title">
          <Title level={4}>求职期望</Title>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={() => setJobHuntDrawerOpen(true)}
          />
        </div>
      </JobHuntDesireWrapper>
      <JobHuntDesireDrawer open={jobHuntDrawerOpen} onClose={() => setJobHuntDrawerOpen(false)}/>
    </>
  );
}
