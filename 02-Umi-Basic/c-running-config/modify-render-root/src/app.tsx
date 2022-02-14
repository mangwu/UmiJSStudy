/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-14 13:28:36
 * @LastModifiedDate: 2022-02-14 15:29:30
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 * 2022-02-14 13:29:04  mangwu  运行时配置-modifiyClientRenderOpts(fn) 修改clientRender参数
 */

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('app2 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('app2 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app2 unmount', props);
  },
};
// 声明变量判断是否是微前端
let isSubApp = true;
export function modifyClientRenderOpts(memo: any) {
  // const subRoot = document.querySelector('#sub-root');
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,
  };
}
