/*
 * @Author: mangwu
 * @File: index.tsx
 * @Date: 2022-02-15 20:01:25
 * @LastModifiedDate: 2022-02-15 22:47:33
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 inspur
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */
import './index.less';

export default function Management() {
  return (
    <div>
      <h1 className="title">Hello, admin!</h1>
      <p>Management，只有管理员都可以进入到此页面</p>
    </div>
  );
}
