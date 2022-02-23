/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-23 15:01:23
 * @LastModifiedDate: 2022-02-23 15:05:12
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 mangwu
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */
import React from 'react';
import { ConfigProvider } from 'antd';

export function rootContainer(container: any) {
  ConfigProvider.config({
    theme: {
      primaryColor: '#85ae1d',
      infoColor: '#8d57dc',
    },
  });
  return React.createElement(ConfigProvider, null, container);
}
