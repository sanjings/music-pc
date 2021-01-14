# vue3-vite-ts-music-pc

### 项目简介
基于vue3+vite+ts开发仿网易云音乐webpc，不使用任何UI框架，所有组件和样式均自主开发。

#### 技术栈
- **[vite v1.x](https://github.com/vitejs/vite/tree/1.x):**  vite构建工具
- **[vue v3.0.2](https://github.com/vuejs/vue):**  vue3全家桶 
- **[typescript v4.1.3](https://github.com/microsoft/TypeScript):**  javascript的超集 
- **[axios](https://github.com/axios/axios):**  基于promise的HTTP库
- **[dayjs](https://github.com/iamkun/dayjs):**  一个轻量的处理时间和日期的库
- **[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi):**  开源的NodeJS版api接口 

#### 已完成功能
  - 推荐页面
    - 轮播图
    - 热门推荐
    - 入驻歌手
    - 新碟上架
    - 榜单

  - 排行榜页面
    - 榜单列表
    - 榜单详情
    - 榜单评价（分页）

  - 歌单页面
    - 歌单分类
    - 歌单列表（分页）

  - 歌单详情页面
    - 歌曲列表
    - 歌单评价（分页）

  - 歌手列表页面
    - 歌手分类
    - 首字母筛选
    - 歌手列表

  - 歌手详情页面
    - 歌曲列表

  - 新碟上架页面
    - 专辑分类
    - 专辑列表（分页）

  - 歌曲播放
    - 只要有歌曲列表的地方，都可以直接点击播放
    - 底部播放
    - 歌曲控制（暂停、播放、上一首、下一首）
    - 歌词解析、展示、滚动
    - 播放列表
    
### 项目规范
1. 所有组件的文件夹命名和文件命名用大驼峰，出口文件使用index命名；
2. 插件命名使用大驼峰，其他所有文件和文件夹均使用小驼峰；
3. 样式通过scss编写，所有的css类名全部小写，并用-连接；
4. 全局类型声明和静态数据类型声明在typings文件夹中，各模块对应的类型声明在各模块的typing.ts中编写；
5. 网络请求相关封装和api接口管理、数据处理都在apis文件夹中；
6. 工具方法统一放在utils文件夹中，再分类管理；
7. 插件统一放在plugins文件夹中；
8. 自定义hooks统一放在hooks文件夹中；
9. 页面组件和业务模块组件统一放在pages文件夹中，页面组件作为容器组件，用于处理数据、逻辑和布局，业务模块组件是对应页面的UI组件，只负责UI不负责逻辑；
10. 通用组件和其它UI组件统一放在components中；
11. 组件内部书写顺序：
    - 定义响应式数据（ref，reactive）
    - 解构自定义hooks
    - 定义computed
    - 生命周期函数
    - 其他逻辑代码
    - watch和watchEffect
12. vuex规范：
    - 每个页面模块有自己独立的module，在store文件夹下创建对应的文件夹
    - actionTypes统一管理
    
### 项目运行
#### clone项目
```
git clone https://github.com/sanjings/vue3-vite-ts-music.git
```
#### 安装依赖（如果没有yarn推荐使用cnpm）
```
npm install cnpm -g --registry=https://registry.npm.taobao.org
yarn install or cnpm install
```

#### 本地运行
```
yarn dev or npm run dev
```
#### 打包
```
yarn build or npm run build
```

### 最后
欢迎pr，喜欢就赏个⭐吧，谢谢支持
