/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-15 22:48:59
 * @LastModifiedDate: 2022-02-15 23:27:40
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 inspur
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 * 2022年2月15日22点49分    mangwu    使用render和patchRoutes
 */
let extraRoutes: any = [];
// 获取当前角色
let role = 'admin';
// 动态路由
export function patchRoutes(context: any) {
  const { routes } = context;
  console.log(routes);

  extraRoutes.forEach((item: any) =>
    routes[0].routes.push({
      name: item.name,
      path: item.path,
      component: require(`@/pages/${item.path.substring(1)}`).default,
    }),
  );
}

// 获取路由信息
export function render(oldRender: any) {
  fetch('/api/routes', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ role }), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((res) => {
      extraRoutes = res.routes;
      oldRender();
    });
}
