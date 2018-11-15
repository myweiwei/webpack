
//import $ from 'jquery'会报错 由于 ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
//需安装如下一些包
//npm install babel-core --save-dev
//npm install babel-loader --save-dev
//npm install babel-preset-env --save-dev
//在package中的script中加入"build": "webpack"，输入npm run build即可将main.js打包为bundle.js
import $ from 'jquery'
//如果要处理非js类型得文件，我们需要手动安装一些合适得loader加载器；
//如果要处理css文件，（1）npm i css-loader style-loader -D
//(2)在webpack.config.js文件得module中配置
import '../css/style.css'
import '../css/style.less'
$(function(){
     $('li').css('backgroundColor','yellow');
    alert(2);
})
//但是每次修改js文件都要执行npm run ，可以避免此步骤，即安装webpack-dev-server
// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 安装完毕后，这个 工具的用法， 和 webpack 命令的用法，完全一样
// 3. 由于，我们是在项目中，本地安装的 webpack-dev-server ， 所以，无法把它当作 脚本命令，在powershell 终端中直接运行；（只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行）
// 4. 注意： webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
// 5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的 bundle.js;
// 6. 我们可以认为， webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到了 咱们项目的 根目录中，虽然我们看不到它，但是，可以认为， 和 dist  src   node_modules  平级，有一个看不见的文件，叫做 bundle.js

//安装失败可执行以下指令。https://blog.csdn.net/longzhoufeng/article/details/81026467
//链接//卸载版本
// cnpm uninstall webpack -g
// cnpm uninstall -g webpack-dev-server
// //安装指定版本
// cnpm install webpack@3.8.0 --save-dev
// cnpm install webpack-dev-server@2.9.7 --save-dev
//安装后在package得script中添加"dev": "webpack-dev-server"，npm run dev即可运行，接下来的每次修改只需ctrl+s即可自动打包

// 1. webpack 能够处理 JS 文件的互相依赖关系；
// 2. webpack 能够处理JS的兼容问题，把 高级的、浏览器不是别的语法，转为 低级的，浏览器能正常识别的语法

// 刚才运行的命令格式：    webpack  要打包的文件的路径  打包好的输出文件的路径



// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 安装完毕后，这个 工具的用法， 和 webpack 命令的用法，完全一样
// 3. 由于，我们是在项目中，本地安装的 webpack-dev-server ， 所以，无法把它当作 脚本命令，在powershell 终端中直接运行；（只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行）
// 4. 注意： webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
// 5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的 bundle.js;
// 6. 我们可以认为， webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到了 咱们项目的 根目录中，虽然我们看不到它，但是，可以认为， 和 dist  src   node_modules  平级，有一个看不见的文件，叫做 bundle.js