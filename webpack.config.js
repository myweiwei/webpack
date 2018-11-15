const path = require('path');
//启用热键第二步
const webpack = require('webpack');
//1.导入在内存中生成html页面得插件
//2.自动把打包好的bundle.js文件追加到内存中去
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    //配置入口，即你想让webpack打包哪个文件？？
    entry:path.resolve(__dirname,'src/js/Main.js'),
    //出口，即你想将打包好的文件放到哪里，然后在静态页面中引入打包好的文件就可以用啦
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname,'build'),
    },
    //配置dev-server命令参数得另一种方式
    devServer:{
        open:true,
        contentBase:'src',
        hot:true
        //启用热更新得第一步
    },
    plugins:[
        //启用热键第三步
        new webpack.HotModuleReplacementPlugin(),
        //创建一个在内存中生成html文件得插件
        new htmlWebpackPlugin({
            //根据指定得路径，去生成内存中的页面
            template:path.join(__dirname,'./src/index.html'),
            //指定生成得页面得名称
            filename:'index.html'
        })
    ],
    // 这个节点，用于配置 所有 第三方模块 加载器 
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "env"
                        ]
                    }
                },
                exclude:path.resolve(__dirname,"node_modules"),
                include:path.resolve(__dirname,"src")
            },
            {
                test:/\.css$/,use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,use:['style-loader','css-loader','less-loader']
            }
        ]
    }
}

// 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；