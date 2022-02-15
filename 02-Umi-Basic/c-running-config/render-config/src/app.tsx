/*
 * @Author: mangwu
 * @File: app.tsx
 * @Date: 2022-02-15 16:15:45
 * @LastModifiedDate: 2022-02-15 16:23:53
 * @ModifiedBy: mangwu
 * -----------------------
 * Copyright (c) 2022 inspur
 * -----------------------
 * @HISTORY:
 * Date   	            By 	    Comments
 * ---------------------	--------	-----------------------------------------------
 */

import { history } from "umi";

export function render(oldRender: any) {
  fetch('/api/auth')
    .then((res) => res.json())
    .then((res) => {
      if (!res.isAuthed) {
        history.push('/login');
      }
      oldRender();
    });
}
