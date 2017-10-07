## angular4 <img src='https://img.shields.io/badge/node-v7.8.0-green.svg'>
   
## 技术栈 (technology)

```
angular4+material2+ngrx 
```

## 文件结构 (File structure)


```
├── e2e                         端对端测试
├── dist                        项目build目录
├── tslint.json                 tslint配置文件
├── package.json                项目配置文件
├── src                         生产目录
    |—— app                     项目资源
    |——|—— animations           项目动画
    |——|—— components           项目公用组件（木偶组件）
    |——|—— config               项目配置文件    
    |——|——|—— ip                项目http请求IP配置    
    |——|—— core                 主模块下页面  
    |——|——|—— login             登录 
    |——|——|—— not-found         404 
    |——|—— ngrx                 项目状态管理
    |——|——|—— action            action
    |——|——|—— reducer           reducer
    |——|—— service              公用服务  
    |——|—— shared               共享模块
    |——|—— stones               项目页面（智能组件）
    |——|—— utils                工具类  
    |—— assets                  静态资源
    |——|—— style                全局样式    
    |——|—— img                  图片
    |——|—— fonts                字体图标
    |——|—— i18n                 国际化配置
    |—— environments            项目运行环境
   
```



## 项目运行(Probject running)

1.克隆项目到本地 : git clone https://github.com/jiwenjiang/angular4-material2.git 

2.安装依赖环境 : npm install      

3.启动项目 : npm run start        

4.打包项目 : npm run build  //默认打出来是开发环境，如果需要打生产环境，则需运行 npm run build --environment=prod


## 快速生成组件
运行命令： ng g component stones/foo 
会在stones文件下，生成foo文件夹，并生成foo.component.html,foo.component.less,foo.component.ts,foo.component.spec.ts等四个文件，并自动填充部分通用代码和向ngModule注入依赖关系，同理可以自动生成service等。

## 项目相关参考

ngrx:http://blog.csdn.net/j_bleach/article/details/78161765 <br/>
router:http://blog.csdn.net/j_bleach/article/details/78077844 <br/>



