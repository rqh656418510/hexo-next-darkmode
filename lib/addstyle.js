const fs = require('hexo-fs');
const CleanCSS = require('clean-css');
const stylePath = __dirname + '/darkmode.css';

module.exports.addStyle = function(htmlContent){
    let injectExtraStyle = function () {
        if (!fs.exists(stylePath)) throw new TypeError(stylePath + ' not found!');
        let styleSourceCode = fs.readFileSync(stylePath, { escape: true });
        return '<style>' + new CleanCSS().minify(styleSourceCode).styles + '</style>';
    };
    if (/<\/head>/gi.test(htmlContent)) {
        let lastIndex = htmlContent.lastIndexOf('</head>');
        htmlContent = htmlContent.substring(0, lastIndex) + injectExtraStyle() + htmlContent.substring(lastIndex, htmlContent.length);
    }
    return htmlContent;
};
