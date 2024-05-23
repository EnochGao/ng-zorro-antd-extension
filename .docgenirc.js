/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
  mode: "full",
  theme: "angular",
  title: "ng-zorro-antd-extension",
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
      locales: {
        "en-us": {
          title: "Components",
        },
      },
    },
  ],

  libs: [
    {
      name: "ng-zorro-antd-extension",
      abbrName: "nzx",
      rootDir: "./components",
      include: [],
      exclude: "",
      categories: [
        {
          id: "component",
          title: "组件",
          locales: {
            "en-us": {
              title: "Component",
            },
          },
        },
        {
          id: "directive",
          title: "指令",
          locales: {
            "en-us": {
              title: "Directive",
            },
          },
        },
        {
          id: "pipe",
          title: "管道",
          locales: {
            "en-us": {
              title: "Pipe",
            },
          },
        },
        {
          id: "util",
          title: "工具函数",
          locales: {
            "en-us": {
              title: "Util",
            },
          },
        },
      ],
    },
  ],
  locales: [
    {
      key: "zh-cn",
      name: "中文",
    },
    { key: "en-us", name: "English" },
  ],
  defaultLocale: "zh-cn",
};
