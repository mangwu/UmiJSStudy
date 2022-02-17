/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-17 18:55:24
 * @LastModifiedDate: 2022-02-17 19:09:20
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 mangwu
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */

/**
 * @description 初始加载或者路由切换是做的事情
 * @param {Object} context 路由上下文
 */
export function onRouteChange(context: any) {
  const { matchedRoutes } = context;
  console.log(matchedRoutes);
  if (matchedRoutes.length) {
    console.log(matchedRoutes[matchedRoutes.length - 1].route.title);
    // document.title =
    //   'umi app - ' + matchedRoutes[matchedRoutes.length - 1].route.title;
    console.log(document.title);
  }
}
