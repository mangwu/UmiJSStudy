/*
 * @Author: mangwu                                                             *
 * @File: server.js                                                            *
 * @Date: 2022-02-16 15:12:00                                                  *
 * @LastModifiedDate: 2022-02-16 17:27:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import Fastify from "fastify";
import { writeFile, queryFile } from "./file.js";
// 新建对象
const fastify = new Fastify({
  logger: true,
});
fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});
// 声明路由
fastify.get("/pageview", (request, reply) => {
  const data = queryFile("./data.json", "pageviews");
  console.log("data", data);
  const res = { pageview: data[request.query.page] };
  console.log(request.query);
  reply.send(res);
});
// 声明路由
fastify.post("/pageview", (request, reply) => {
  console.log(request.body);
  writeFile("./data.json", "pageviews", request.body.page);
  reply.send({ status: 200 });
});

/**
 * @description 启动服务
 * @argument {Number} Port 端口号号
 * @argument {Function}
 */
fastify.listen(3000, function (err, address) {
  if (err) {
    // 打印错误
    fastify.log.error(err);
    // 退出进程
    process.exit(1);
  }
  // 服务器监听地址:${address}
  fastify.log.info(`server listening on ${address}`);
});
