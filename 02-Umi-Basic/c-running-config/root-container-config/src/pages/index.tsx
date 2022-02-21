import './index.less';
import { Button, message } from 'antd';
export default function IndexPage() {
  const info = () => {
    message.info('提示色已改变');
  };
  return (
    <div>
      <h1 className="title">Page index(主色)</h1>
      <h2 className="tishi">提示色</h2>
      <h2 className="highlight">高亮色</h2>
      <Button type="primary" onClick={info}>
        antd btn
      </Button>
    </div>
  );
}
