import styles from './index.less';

import { MicroApp } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h2 className={styles.title2}>通过组件导入的微应用</h2>
      <MicroApp name="app-3"></MicroApp>
    </div>
  );
}
