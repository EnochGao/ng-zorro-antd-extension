/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
  mode: "full",
  theme: "angular",
  title: "Zorro Extension",
  description: "ng zorro 拓展包",
  siteProjectName: "docs-site",
  logoUrl: "https://avatars.githubusercontent.com/u/41459067?v=4",
  repoUrl: "https://github.com/EnochGao/ng-zorro-antd-extension",
  footer:
    "Open-source MIT Licensed | Copyright © 2022-present Powered by EnochGao",
  navs: [
    {
      title: "组件",
      path: "components",
      lib: "ng-zorro-antd-extension",
    },
  ],

  libs: [
    {
      name: "ng-zorro-antd-extension",
      abbrName: "nzx",
      rootDir: "./components",
      include: [],
      exclude: "",
      // apiMode: "automatic",
      categories: [
        {
          id: "component",
          title: "组件",
        },
        {
          id: "directive",
          title: "指令",
        },
        {
          id: "pipe",
          title: "管道",
        },
      ],
    },
  ],
  locales: [
    {
      key: "zh-cn",
      name: "中文",
    },
  ],
  defaultLocale: "zh-cn",
};
