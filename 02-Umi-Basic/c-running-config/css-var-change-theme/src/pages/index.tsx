import './index.less';
import { antdTheme, antdDarkTheme } from '@/theme/antd.theme.config';
import { ConfigProvider, Button, message, Table, Tag, Space } from 'antd';
import { useEffect } from 'react';

ConfigProvider.config({
  theme: antdTheme,
});
// 表格数据
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
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
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

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
    // 设置项目自定义的默认主题
    const root = document.documentElement;
    root.className = 'light';
  });
  const changeTheme = () => {
    console.log('切换主题');
    const root = document.documentElement;
    const isLight = root.className == 'light';
    root.className = isLight ? 'dark' : 'light';
    ConfigProvider.config({
      theme: isLight ? antdDarkTheme : antdTheme,
    });
  };
  return (
    <ConfigProvider>
      <div className="global-body">
        <h1 className="title">Page index 自定义主题色</h1>
        <p className="content">使用antd中的主题色</p>
        <Button type="primary" onClick={() => message.success('成功')}>
          成功
        </Button>
        <Button type="primary" onClick={() => message.warning('警告')}>
          警告
        </Button>
        <Button onClick={() => message.info('信息')}>信息</Button>
        <Table dataSource={data} columns={columns} />
        <Button type="primary" onClick={changeTheme}>
          切换主题
        </Button>
      </div>
    </ConfigProvider>
  );
}
