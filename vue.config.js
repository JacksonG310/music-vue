const registerRouter = require('./server/router')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/assets/scss/variable.scss";
                @import "@/assets/scss/mixin.scss";
                `
            }
        }
    },
    devServer: {
        // express
        before(app) {
            registerRouter(app);
        }
    },
    configureWebpack: (config) => {
        if (process.env.npm_config_report) {
            const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
            config.plugins.push(new BundleAnalyzerPlugin())
        }
    },
}