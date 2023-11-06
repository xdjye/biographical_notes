import React from "react";
import { FloatButton } from "antd";
import { BgColorsOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

export default function SettingPrimary() {
  return (
    <div>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          bottom: 100,
        }}
        icon={<SettingOutlined />}
      >
        <FloatButton title="颜色样式" icon={<BgColorsOutlined />}/>
        <FloatButton title="大小" icon={<AppstoreOutlined />} />
      </FloatButton.Group>
      <FloatButton.BackTop />
    </div>
  );
}
