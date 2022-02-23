import './index.less';
import {
  ConfigProvider,
  Button,
  DatePicker,
  Radio,
  Space,
  version,
  message,
  Table,
  Tag,
} from 'antd';
import { useEffect, useState } from 'react';


const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default function IndexPage() {
  useEffect(() => {
    // 设置默认主题
    const root = document.documentElement;
    root.className = 'blue';
  }, []);
  // 表格数据
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a className={`${prefix}-link`}>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_text: any, record: any) => (
        <Space size="middle">
          <a className={`${prefix}-link`}>Invite {record.name}</a>
          <a className={`${prefix}-link`}>Delete</a>
        </Space>
      ),
    },
  ];
  // css var变量前缀名默认为ant
  const [prefix, setPrefix] = useState('ant');
  // 修改前缀名称方法
  const handlePrefixChange = (e: any) => {
    setPrefix(e.target.value);
    // 同时修改对应的自定义主题
    const className = e.target.value == 'ant' ? 'blue' : 'red';
    const root = document.documentElement;
    root.className = className;
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
        <Button type="primary" onClick={() => message.info('提示')}>
          提示
        </Button>
        <Button type="primary" onClick={() => message.error('警告')}>
          警告
        </Button>
        <Table dataSource={data} columns={columns} />
      </div>
    </ConfigProvider>
  );
}
