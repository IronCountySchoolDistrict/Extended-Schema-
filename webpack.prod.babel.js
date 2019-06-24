import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import pkgInfo from 'pkginfo'

import common from './webpack.common.babel'

pkgInfo(module)

export default merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist/web_root'),
        filename: `scripts/escl/[name].js`,
        publicPath: 'https://ps.irondistrict.org' 
    },
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      includePaths: [
                        path.resolve(__dirname, 'node_modules/')
                      ]
                    }
                  },
                  'css-loader',
                  'sass-loader'
                ]
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `scripts/escl/css/[name].css`
        })
    ]
})
