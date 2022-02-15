/*
 * @Author: mangwu
 * @File: index.tsx
 * @Date: 2022-02-15 16:24:10
 * @LastModifiedDate: 2022-02-15 18:14:02
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 mangwu
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */

import { history } from 'umi';
import './index.less';

import { useState } from 'react';

export default function () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 传递账号和密码
    Login({ username, password });
  };
  const Login = (data: any) => {
    fetch('/api/login', {
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
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        
        if (res.isAuthed) {
          history.push('/');
        } else {
          alert('账号密码错误！');
        }
      });
  };
  return (
    <div className="main">
      <h2 className="title">登录</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="user-name">
          <label htmlFor="username">用户名:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">密码:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="登录" />
      </form>
    </div>
  );
}
