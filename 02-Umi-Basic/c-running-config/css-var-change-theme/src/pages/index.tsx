import './index.less';
import { antdTheme, antdDarkTheme } from '@/theme/antd.theme.config';
import { ConfigProvider, Button, message } from 'antd';
import { useEffect } from 'react';
ConfigProvider.config({
  theme: antdTheme,
});

export default function IndexPage() {
  useEffect(() => {
    // 设置项目自定义的默认主题
    const root = document.documentElement;
    root.className = 'light';
  });
  const changeTheme = () => {
    console.log('切换主题');
    const root = document.documentElement;
    root.className = root.className == 'light' ? 'dark' : 'light';
    ConfigProvider.config({
      theme: root.className == 'dark' ? antdDarkTheme : antdTheme,
    });
  };
  return (
    <ConfigProvider>
      <div>
        <h1 className="title">Page index 自定义主题色</h1>
        <p className="content">使用antd中的主题色</p>
        <Button type="primary" onClick={() => message.success('成功')}>
          按钮
        </Button>
        <Button type="primary" onClick={changeTheme}>
          切换主题
        </Button>
      </div>
    </ConfigProvider>
  );
}
