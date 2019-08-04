export default {
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    }],
  ],
  singular: true, // 约定的存放页面代码的文件夹是 pages，是复数 配置项中你可以添加 singular 为 true 来让 page 变为约定的文件夹
  routes: [{
    path: '/',
    component: './HelloWorld',
  }],
};