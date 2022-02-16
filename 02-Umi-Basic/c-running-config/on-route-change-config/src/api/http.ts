/*
 * @Author: mangwu                                                             *
 * @File: http.ts                                                              *
 * @Date: 2022-02-16 13:43:46                                                  *
 * @LastModifiedDate: 2022-02-16 16:54:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 *
 * @param {String} url 地址
 * @param {String} method 方法，默认为GET
 * @param {Object} options 可选配置
 * @returns 请求结果
 */
export default function request(
  url: any,
  method: string = 'GET',
  options: any = {},
) {
  let fetchPromise = null;
  if (method == 'GET') {
    fetchPromise = new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          res.json().then((jsonBody) => {
            if (jsonBody.status == 404) {
              reject('请求无效');
            } else {
              resolve(jsonBody);
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  } else if (method == 'POST') {
    fetchPromise = new Promise((resolve, reject) => {
      fetch(url, {
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
        body: JSON.stringify(options.params), // body data type must match "Content-Type" header
      })
        .then((res) => {
          res.json().then((jsonBody) => {
            if (jsonBody.status == 404) {
              reject('请求无效');
            } else {
              resolve(jsonBody);
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  return Promise.race([fetchPromise]);
}
