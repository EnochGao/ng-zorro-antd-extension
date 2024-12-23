/**
 * @type {import('@docgeni/core').DocgeniLibrary[]}
 */
const docsLibs = [
  {
    name: 'ng-zorro-antd-extension',
    abbrName: 'nzx',
    rootDir: './components',
    include: [],
    exclude: '',
    categories: [
      {
        id: 'component',
        title: '组件',
        locales: {
          'en-us': {
            title: 'Component',
          },
        },
      },
      {
        id: 'directive',
        title: '指令',
        locales: {
          'en-us': {
            title: 'Directive',
          },
        },
      },
      {
        id: 'pipe',
        title: '管道',
        locales: {
          'en-us': {
            title: 'Pipe',
          },
        },
      },
      {
        id: 'util',
        title: '工具函数',
        locales: {
          'en-us': {
            title: 'Util',
          },
        },
      },
    ],
  },
];

/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
  mode: "full",
  theme: "angular",
  switchTheme: true,
  title: "ng-zorro-antd-extension",
  description: "ng zorro 拓展包",
  siteProjectName: "docs-site",
  logoUrl: "assets/images/logo.png",
  repoUrl: "https://github.com/EnochGao/ng-zorro-antd-extension",
  footer:
    'Open-source MIT Licensed | Copyright © 2022-present Powered by EnochGao',
  navs: [
    {
      title: '组件',
      path: 'components',
      lib: 'ng-zorro-antd-extension',
      locales: {
        'en-us': {
          title: 'Components',
        },
      },
    },
  ],

  libs: docsLibs,
  locales: [
    {
      key: 'zh-cn',
      name: '中文',
    },
    { key: 'en-us', name: 'English' },
  ],
  defaultLocale: 'zh-cn',
};
