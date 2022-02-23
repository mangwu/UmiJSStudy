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
  Drawer,
  Menu,
  Divider
} from 'antd';
import {
  ExclamationCircleOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
// import { antdRedTheme, antdBlueTheme } from '@/theme/antd.theme.config';
const { confirm } = Modal;

const { SubMenu } = Menu;
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
    let root: any = document.body.querySelector('#root');
    root.className = prefix;
    // 设置message
    message.config({
      rtl: true,
      duration: 2,
      prefixCls: `${prefix}-message`,
    });
    // 设置Modal
    Modal.config({
      rootPrefixCls: `${prefix}`,
    });
    // window.localStorage.myTheme = 'blue';
    // ConfigProvider.config({
    //   theme: antdBlueTheme,
    // });
  }, []);
  const showConfirm = () => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
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
  // 全局提示
  // const [_api, _contextHolder] = message.useMessage();

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
    let body: any = document.body.querySelector('#root');
    body.className = className;
    // 修改message
    // 设置message
    message.config({
      rtl: true,
      duration: 2,
      maxCount: 3,
      prefixCls: `${className}-message`,
    });
    // 设置Modal
    // 设置Modal
    Modal.config({
      rootPrefixCls: `${className}`,
    });

    // ConfigProvider.config({
    //   theme: className == 'blue' ? antdBlueTheme : antdRedTheme,
    // });
  };
  // modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  // drawer
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // 导航栏
  const [current, setCurrent] = useState<any>('mail');
  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
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
        <h1 className={prefix + ' title'}>antd version: {version}</h1>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>

          <SubMenu
            key="SubMenu"
            icon={<SettingOutlined />}
            title="Navigation Three - Submenu"
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
        <Divider />
        <Space>
          <DatePicker />
          <Button type="primary">Primary button</Button>
          <Button
            type="primary"
            onClick={() => {
              // message.destroy();
              message.info('信息');
            }}
          >
            提示
          </Button>
          <Button
            type="primary"
            onClick={() => {
              message.warning('警告');
            }}
          >
            警告
          </Button>
        </Space>
        <Divider />
        <Table dataSource={data} columns={columns} />
        <Space>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Button onClick={showConfirm}>Confirm</Button>
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </Space>
      </div>
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
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </ConfigProvider>
  );
}
