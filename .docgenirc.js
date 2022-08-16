/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
  mode: 'full',
  theme: 'angular',
  title: 'ng zorro extension',
  description: 'ng zorro 拓展包',
  logoUrl: 'https://cdn.pingcode.com/open-sources/docgeni/logo.png',
  repoUrl: 'https://github.com/docgeni/docgeni',
  navs: [
    null,
    {
      title: '组件',
      path: 'components',
      lib: 'ng-zorro-antd-extension'
    }
  ],
  libs: [
    {
      name: 'ng-zorro-antd-extension',
      rootDir: './components',
      include: [],
      exclude: '',
      categories: [
        {
          id: 'general',
          title: '通用',
          locales: {
            'zh-cn': {
              title: 'General'
            }
          }
        }
      ]
    }
  ],
  locales: [
    {
      key: 'zh-cn',
      name: '中文'
    }
  ],
  defaultLocale: 'zh-cn',
  sitemap: {
    host: 'https://docgeni.org'
  },
  footer: `Open-source MIT Licensed | Copyright © 2020-present Powered by <a href="https://pingcode.com" target="_blank">PingCode</a><br />
<div class="beian"><a href="https://beian.miit.gov.cn/" target="_blank" class="beian-icp">京ICP备13017353号-13</a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802034808" class="beian-public-security"><img src="assets/images/obtain-icp.png"> 京公网安备 11010802034808号 </a></div>`
}
