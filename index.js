'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

// add darkmode script
hexo.extend.filter.register('theme_inject', injects => {
  const config = utils.defaultConfigFile('darkmode_js', 'default.yaml');
  if (!config.enable) return;

  injects.bodyEnd.raw('darkmode_js', utils.getFileContent('darkmode.njk'));
});

// add darkmode css
hexo.extend.filter.register('after_render:html', require('./lib/addstyle').addStyle);
