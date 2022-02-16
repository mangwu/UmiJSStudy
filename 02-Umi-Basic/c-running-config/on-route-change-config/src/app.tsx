/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-16 16:45:51
 * @LastModifiedDate: 2022-02-16 18:38:06
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 inspur
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */

import request from './api/http';

// 记录当前时间
let now: any = new Date();
console.log(now);

/**
 * @description 在切换或者初始加载路由时做的一些事情
 * @param context 切换路由的上下文
 */
export function onRouteChange(context: any) {
  console.log(context);
  // 埋点统计
  const { location, action } = context;
  // 初始加载或者刷新 进行埋点统计
  let page = location.pathname.substring(1);
  // page是'/'的情况
  if (!page) {
    page = 'index';
  }
  request('/api/pageview', 'POST', { params: { page } });
  // 更新被浏览时间
  // const newTime: any = new Date();
  // const sub = newTime - now;
  // now = newTime;
  // console.log(sub);
}
