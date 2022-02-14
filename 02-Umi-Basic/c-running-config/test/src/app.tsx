/*
 * @Author: mangwu                                                             *
 * @File: app.ts                                                               *
 * @Date: 2022-02-14 15:43:17                                                  *
 * @LastModifiedDate: 2022-02-14 18:49:31
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let isSubApp = true;
export function modifyClientRenderOpts(memo: any) {
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,
  }
}