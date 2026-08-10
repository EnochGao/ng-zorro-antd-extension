export default {
  $schema: './node_modules/@angular/cli/lib/config/schema.json',
  version: 1,
  newProjectRoot: 'projects',
  projects: {
    demo: {
      root: '',
      sourceRoot: 'src',
      projectType: 'application',
      prefix: 'app',
      architect: {
        build: {
          builder: '@angular/build:application',
          options: {
            browser: 'src/main.ts',
            tsConfig: 'tsconfig.app.json',
            assets: ['src/favicon.ico', 'src/assets'],
            styles: ['node_modules/ng-zorro-antd/ng-zorro-antd.min.css', 'src/styles.css']
          },
          configurations: {
            production: {
              budgets: [{ type: 'initial', maximumWarning: '1mb', maximumError: '2mb' }],
              outputHashing: 'all'
            },
            development: { optimization: false, extractLicenses: false, sourceMap: true }
          },
          defaultConfiguration: 'production'
        },
        serve: {
          builder: '@angular/build:dev-server',
          configurations: {
            production: { buildTarget: 'demo:build:production' },
            development: { buildTarget: 'demo:build:development' }
          },
          defaultConfiguration: 'development'
        }
      }
    }
  }
};
