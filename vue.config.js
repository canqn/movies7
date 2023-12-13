module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5100',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    },
}