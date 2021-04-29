'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {

  const config = utils.defaultConfigFile('darkmode_js', 'default.yaml');
  if (!config.enable) return;

  injects.bodyEnd.raw('darkmode_js', utils.getFileContent('darkmode_js.njk'));
  
});
