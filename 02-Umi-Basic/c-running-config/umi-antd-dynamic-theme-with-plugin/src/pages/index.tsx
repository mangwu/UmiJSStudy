import styles from './index.less';

import { setTheme } from '../theme';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={() => setTheme('Dark')}>Hello</button>
    </div>
  );
}
