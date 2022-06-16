const path = require('path')
const {merge} = require('webpack-merge')
const pug = require('./webpack/pug')
const devServer = require('./webpack/devServer')
const sass = require('./webpack/sass')

const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}
const PAGES_DIR = `${path.resolve(__dirname, "src")}/pages/`
const PAGES_DIRS = fs.readdirSync(PAGES_DIR).map(dir => `${path.resolve(__dirname, "src")}/pages/${dir}`)

const PAGES = PAGES_DIRS.map(dir => ({
    filenames: fs.readdirSync(dir).filter(filename => filename.endsWith(".pug")),
    path: dir
}))

const res = []

PAGES.forEach(page => page.filenames.forEach(filename => {
    res.push( new HtmlWebpackPlugin({
        template: `${page.path}/${filename}`,
        chunks: [filename.substring(0, filename.length-4)],
        filename: `${filename.replace(/\.pug/, '.html')}`
    }))
}))

const common = merge([
    {
        mode: "production",
        entry: {
            "index": PATHS.source + "/pages/index/index.js",
            "services": PATHS.source + "/pages/services/services.js"
        },
        output: {
            path: PATHS.build,
            filename: "[name].js"
        },
        plugins: [
            ...res
        ],
    },
    pug()
])

module.exports = function (env, argv){
    if(argv.mode === "production"){
        return common
    }
    if(argv.mode === "development"){
        return merge([
            common,
            devServer(),
            sass()
        ])
    }
}