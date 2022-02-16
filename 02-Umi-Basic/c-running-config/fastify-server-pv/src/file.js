/*
 * @Author: mangwu                                                             *
 * @File: file.js                                                              *
 * @Date: 2022-02-16 15:39:31                                                  *
 * @LastModifiedDate: 2022-02-16 17:26:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
import fs from "fs";

// 查文件 同步
export function queryFile(path, prop) {
  try {
    let rawdata = fs.readFileSync(path);
    // 二级制流转化为字符串
    let dataStr = rawdata.toString();
    let dataObj = JSON.parse(dataStr);
    // 根据属性读出数据
    console.log("---------读取文件成功---------");
    return dataObj[prop];
  } catch (error) {
    console.log("-----------读取文件时出现错误-------------");
    console.log(err);
  }
}

// 写文件
export function writeFile(path, prop, item, num = 1) {
  try {
    const rawData = fs.readFileSync(path);
    // 二级制流转化为字符串
    let dataStr = rawData.toString();
    let dataObj = JSON.parse(dataStr);
    dataObj[prop][item] += num;
    let str = JSON.stringify(dataObj);
    console.log(str);
    console.log(dataObj);
    fs.writeFileSync(path, str);
  } catch (error) {
    console.log("-----------读取修改文件时出现错误-------------");
    console.log(error);
  }
}
