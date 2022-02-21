/*
 * @Author: mangwu                                                             *
 * @File: theme.ts                                                             *
 * @Date: 2022-02-21 14:05:12                                                  *
 * @LastModifiedDate: 2022-02-21 16:40:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
import { storagePrefix } from '../config';

const { localStorage } = window;

const genKey = (subKey: any) => `${storagePrefix}_${subKey}`;

export default {
  getItem: (key: any) => {
    if (!localStorage) return;

    const data = localStorage.getItem(genKey(key));
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.log(e);
      }
    } else {
      return null;
    }
  },
  setItem: (key: any, data: any) => {
    if (!localStorage) return;
    try {
      return localStorage.setItem(genKey(key), JSON.stringify(data));
    } catch (e) {
      const notification = require('antd/lib/notification').default;

      notification.warn({
        message: 'Sorry, the browser’s storage space is full.',
        description:
          'To ensure the normal usage, please visit Tools > Clear ' +
          'Recent History > Cookies and select All in Time Range to release the storage space.',
      });
    }
  },
  removeItem: (key: any) => {
    if (!localStorage) return;
    try {
      localStorage.removeItem(genKey(key));
    } catch (e) {
      console.log(e);
    }
  },
};
