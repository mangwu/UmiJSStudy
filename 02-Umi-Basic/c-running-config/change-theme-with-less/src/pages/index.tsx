// import styles from './index.less';
import './index.less';
import {
  ConfigProvider,
  Button,
  DatePicker,
  Radio,
  Space,
  version,
} from 'antd';
import { useState } from 'react';

export default function IndexPage() {
  // css var变量前缀名默认为ant
  const [prefix, setPrefix] = useState('ant');
  // 修改前缀名称方法
  const handlePrefixChange = (e: any) => {
    setPrefix(e.target.value);
  };
  return (
    <ConfigProvider prefixCls={prefix}>
      <div>
        <h1 className="title">Page index</h1>
        <h1>
          <Space>
            <Radio.Group onChange={handlePrefixChange} value={prefix}>
              <Radio value="ant">Ant Style</Radio>
              <Radio value="custom">Custom Style</Radio>
            </Radio.Group>
          </Space>
        </h1>
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary">Primary button</Button>
      </div>
    </ConfigProvider>
  );
}
