module.exports = function (){
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|tff|woff2|eot)$/i,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            ]
        }
    }
}