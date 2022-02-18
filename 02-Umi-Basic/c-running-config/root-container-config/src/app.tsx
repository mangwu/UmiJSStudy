/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-18 16:04:03
 * @LastModifiedDate: 2022-02-18 16:09:56
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 mangwu
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */

import React from 'react';

/**
 *
 * @param {any} LastRootContainer
 * @param {Object} args
 */
export function rootContainer(LastRootContainer: any, args: any) {
  const { routes, plugin, history } = args;
  console.log(routes, plugin, history);
  return React.createElement(
    'div',
    { className: 'provider' },
    LastRootContainer,
  );
}
