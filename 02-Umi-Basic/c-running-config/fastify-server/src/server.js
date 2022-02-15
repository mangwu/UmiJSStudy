/*
 * @Author: mangwu                                                             *
 * @File: server.js                                                            *
 * @Date: 2022-02-15 15:35:46                                                  *
 * @LastModifiedDate: 2022-02-15 23:14:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import Fastify from "fastify";

// 初始化一个fastify对象
const fastify = Fastify({
  logger: true,
});

var isAuthed = false;
/**
 * @description 声明路由
 * @argument {String} path
 * @argument {Function} 响应请求方法
 */
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});
fastify.get("/auth", function (request, reply) {
  reply.send({ isAuthed });
});
fastify.post("/login", function (request, reply) {
  console.log(request.body, request.body);
  const data = request.body;
  if (data.username == "admin" && data.password == "admin") {
    isAuthed = true;
  } else {
    isAuthed = false;
  }
  reply.send({ isAuthed });
});
fastify.post("/routes", function (request, reply) {
  console.log(request.body);
  const data = request.body;
  if (data.role == "admin") {
    // 管理员页面路由
    reply.send({
      routes: [
        { name: "管理", path: "/management" },
        { name: "你好", path: "/hello" },
      ],
    });
  } else {
    // 普通页面路由
    reply.send({ routes: [{ name: "你好", path: "/hello" }] });
  }
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

// 模拟设置退出登录时间
setInterval(() => {
  isAuthed = false;
}, 10000);
