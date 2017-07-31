# avalon-started

[![Build Status](https://travis-ci.org/wangxingkang/avalon-starter.svg?branch=master)](https://travis-ci.org/wangxingkang/avalon-starter)

## 目录简介
1. [项目介绍](#项目介绍)
2. [项目目录](#项目目录)
3. [开发环境搭建](#开发环境搭建)
    * [环境配置](#环境配置)
    * [环境搭建](#环境搭建)
4. [命令说明](#命令说明)
 
## 项目介绍

avalon2 单页面应用开发种子项目

AngularJS请移步[angularjs-starter](https://github.com/wangxingkang/angularjs-starter)

## 项目目录

```
├── build                    # 项目环境搭建目录
│   ├── build.js             # 项目编译命令文件
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.test.conf.js
├── config                   
│   ├── dev.env.js
│   ├── index.js 
│   ├── prod.env.js
│   └── test.env.js       
├── dist                     # 项目打包目录        
├── src                      # 程序源文件
│   ├── app                
│   └── style              
├── static                   # 静态资源存放目录  
└── test                     # 测试目录
```


## 开发环境搭建

### 环境配置

1. 安装[node](https://nodejs.org/en/)
2. 安装[git](https://git-scm.com/)
3. 安装[yarn](https://yarnpkg.com/zh-Hans/) -- 可选

### 环境搭建

1. clone project
```
$ https://github.com/wangxingkang/avalon-starter.git
$ cd avalon-webpack-start
```

2. 安装依赖

* npm

  ```
  $ npm i
  $ npm run dev
  
  ```
  
* yarn 

  ```
  $ yarn
  $ yarn run dev
  
  ```

## 命令说明

1. `yarn run dev` 或 `npm run dev`; 开发
2. `yarn run build` 或 `npm run build`; 项目打包
3. `yarn run unit` 或 `npm run unit`; 单元测试


**持续完善中...**
