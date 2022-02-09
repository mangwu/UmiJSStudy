# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 修改配置

umi脚手架内置@umijs/preset-react,包含布局、权限、国际化、dva、简易数据流常用功能，编辑 ``.umirc.ts`` 文件配置``layout:{}`` ，安装``@ant-design/pro-layout`` 可自动修改为antd的布局形式

```bash
$ yarn add @ant-design/pro-layout
```

[pro-layout](https://www.npmjs.com/package/@ant-design/pro-layou) npm地址

```typescript
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  layout: {}, // + 添加代码段
});
```

## 部署发布

### 构建

```bash
$ yarn build
```

构建产物默认生成到```./dist``` 下，通过tree命令查看,

```bash
tree ./dist
```

### 本地验证

使用``serve`` 进行本地验证

```bash
$ yarn global add serve
$ serve ./dist
```

访问locallhost:5000 正常情况下和``yarn start`` 一致

### 部署

把dist目录部署到服务器上
