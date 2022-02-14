/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-14 14:34:07
 * @LastModifiedDate: 2022-02-14 15:18:19
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 inspur
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app1 unmount', props);
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
