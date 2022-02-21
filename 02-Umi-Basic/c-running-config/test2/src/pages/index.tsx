import { useEffect } from 'react';
import styles from './index.less';

import { setTheme } from '@/utils/theme';

export default function IndexPage() {
  useEffect(() => {
    setTheme('Dark');
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button onChange={() => setTheme('Dark')}>切换主题</button>
    </div>
  );
}
