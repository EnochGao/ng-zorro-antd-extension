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
  defaultLocale: 'zh-cn'
}
