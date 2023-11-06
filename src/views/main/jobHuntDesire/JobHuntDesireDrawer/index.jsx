import React, { useState } from "react";
import { Button, Drawer, Form, Radio, Input } from "antd";
import "./index.css";

export default function JobHuntDesireDrawer(proprs) {
  const [jobHuntDrawerOpen, setJobHuntDrawerOpen] = useState(false);
  return (
    <Drawer
      {...proprs}
      className="JobHuntDesire-Drawer"
      title="新增求职期望"
      placement="right"
      width={500}
      footer={
        <>
          <Button onClick={proprs.onClose}>取消</Button>
          <Button type="primary">保存</Button>
        </>
      }
    >
      <Form>
        <Form.Item label="求职类型">
          <Radio.Group defaultValue="all" buttonStyle="solid">
            <Radio.Button value="all">全职</Radio.Button>
            <Radio.Button value="a">兼职</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="工作城市">
          <Input />
        </Form.Item>
        <Form.Item label="期望职位">
          <Input />
        </Form.Item>
        <Form.Item label="其他感兴趣城市">
          <Input />
        </Form.Item>
        <Form.Item label="技能标签">
          <Input />
        </Form.Item>
        <Form.Item label="薪资要求">
          <Input />
        </Form.Item>
        <Form.Item label="期望行业">
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
