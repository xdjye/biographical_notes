import React, { useState } from "react";
import { ConfigProvider, theme, Button } from "antd";
import locale from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { HappyProvider } from '@ant-design/happy-work-theme';
import BNMain from "./views/main";
import SettingPrimary from "./views/settingPrimary";
import "./App.css";

function App() {
  const [themeData, setThemeData] = useState({
    colorPrimary: theme.defaultAlgorithm,
    borderRadius: 5,
    componentsSize: "small"
  });
  // algorithm: theme.defaultAlgorithm, // 默认主题
  // algorithm: theme.darkAlgorithm, // 暗色主题
  // algorithm: theme.compactAlgorithm, // 紧凑主题
  return (
    <ConfigProvider
      locale={locale} 
      componentSize={themeData.componentsSize}
      theme={{
        token: {
          colorPrimary: themeData.colorPrimary,
          borderRadius: themeData.borderRadius,
        }
      }}
    >
      <HappyProvider>
        <div className="App">
          <BNMain/>
          <SettingPrimary/>
        </div>
      </HappyProvider>
    </ConfigProvider>
  );
}

export default App;
