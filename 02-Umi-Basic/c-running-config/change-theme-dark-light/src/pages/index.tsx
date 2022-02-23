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
  Modal,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
// import { antdRedTheme, antdBlueTheme } from '@/theme/antd.theme.config';
const { confirm } = Modal;
let root: any = document.body.querySelector('#root')?.firstChild;
console.log(root);
function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    getContainer: root,
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}
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
    root.className = prefix;
    // window.localStorage.myTheme = 'blue';
    // ConfigProvider.config({
    //   theme: antdBlueTheme,
    // });
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
  const [prefix, setPrefix] = useState('custom-default');
  // 修改前缀名称方法
  const handlePrefixChange = (e: any) => {
    setPrefix(e.target.value);
    // 同时修改对应的自定义主题
    const className = e.target.value;
    window.localStorage.myTheme = className;
    const root = document.documentElement;
    root.className = className;
    // ConfigProvider.config({
    //   theme: className == 'blue' ? antdBlueTheme : antdRedTheme,
    // });
  };
  // modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <ConfigProvider prefixCls={prefix}>
      <div className={prefix}>
        {/* <h1 className="title">Page index</h1> */}
        <h1>
          <Space>
            <Radio.Group onChange={handlePrefixChange} value={prefix}>
              <Radio value="custom-default">custom-default</Radio>
              <Radio value="custom-dark">custom-dark</Radio>
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
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Button onClick={showConfirm}>Confirm</Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </ConfigProvider>
  );
}
