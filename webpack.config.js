
module.exports = {
    entry:'./App',
    output: {
        path:'',
        filename:'bundle.js'
    },
    devServer:'',
    module: {
        loaders: [
            {
                test:/\.js$/,
                loaders: 'babel-loader'
            }
        ]
    }


}
