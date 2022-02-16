import { useEffect, useState } from 'react';
import styles from './index.less';
import './index.less';
import request from '@/api/http';
export default function Hello() {
  const [pageViews, setPageViews] = useState("");
  useEffect(() => {
    request('/api/pageview?page=hello', 'GET')
      .then((res: any) => {
        console.log(res);
        setPageViews(res.pageview);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 className={styles.title}>hello</h1>
      <div className="page-view">被浏览</div>
      <div className="page-view-num">{pageViews}</div>
    </div>
  );
}
