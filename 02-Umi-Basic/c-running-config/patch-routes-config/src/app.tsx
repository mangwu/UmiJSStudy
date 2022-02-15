/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-15 11:14:01
 * @LastModifiedDate: 2022-02-15 14:24:51
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 inspur
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */

import Foo from './extraRoutes/foo';

export function patchRoutes(context: any) {
  console.log(context);
  const { routes } = context;
  routes[0].routes.push({
    name: 'foo',
    icon: 'smile',
    path: '/foo',
    component: Foo,
  });
}
