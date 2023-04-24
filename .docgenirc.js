/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
  mode: "full",
  theme: "angular",
  title: "zorro extension",
  description: "ng zorro 拓展包",
  siteProjectName: "docs-site",
  logoUrl: "https://avatars.githubusercontent.com/u/41459067?v=4",
  repoUrl: "https://github.com/EnochGao/ng-zorro-antd-extension",
  navs: [
    null,
    {
      title: "组件",
      path: "components",
      lib: "ng-zorro-antd-extension",
    },
  ],
  libs: [
    {
      name: "ng-zorro-antd-extension",
      rootDir: "./components",
      include: [],
      exclude: "",
      categories: [
        {
          id: "component",
          title: "组件",
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
