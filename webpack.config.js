const path = require('path');

module.exports = {
    mode: "production",
    entry: './target/index.js',
    output: {
        path: path.resolve(__dirname, 'public/js/libs'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                }
            }
        ]
    },
};
