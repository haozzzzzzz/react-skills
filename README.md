### *创建项目*
 -  npx create-react-app demand_skills(React技能需求点) 

### *Antd按需引入*
 - yarn add antd -S
 - yarn add react-app-rewired customize-cra -D
 - yarn add babel-plugin-import -D
 - 根目录新建config-overrides.js
 - 修改package.json启动配置

### *SVG-iconfont字体图标使用*
 - Svg 直接在iconfont下载svg,项目中引入使用即可
 - iconfont 下载iconfont.zip解压，文件存放在assets/iconfont 在入口文件 引入iconfont.css即可

### *文件上传、下载、导出*
 - 请参考`antdCompoents/index.jsx`文件