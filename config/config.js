export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      // 在插件集 umi-plugin-react 中配置 antd 打开 antd 插件，antd 插件会帮你引入 antd 并实现按需编译。
      dva: true,
      // Model 是前端分层中的腰部力量，承上启下，负责管理数据（状态）。
      // 业界主流的状态管理类库有 redux、mobx，等。在我们的教程中，则使用 DVA 框架承担这一角色。
    }],
  ],
  singular: true, // 约定的存放页面代码的文件夹是 pages，是复数 配置项中你可以添加 singular 为 true 来让 page 变为约定的文件夹
  // 定义好容器组件之后，我们就可以通过路由配置的方式把路由对应的组件渲染到容器组件中去了，具体路由如何配置我们放在下面的章节中讲述。
  // 这里我们直接在 config/config.js 添加路由配置:
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        { path: 'app', component: './App' },
        { path: 'puzzlecards', component: './puzzlecards' },
        {
          path: '/',
          component:'./Login'
        }
      ]
    },
  ],
};