/**
 * Generate package.json content for the StackBlitz demo project.
 * @param nzVersion version of ng-zorro-antd
 * @param ngVersion version of Angular
 */
export default (nzVersion: string, ngVersion: string) => {
  return {
    name: 'ng-zorro-extension-demo',
    private: true,
    scripts: {
      ng: 'ng',
      start: 'ng serve',
      build: 'ng build'
    },
    dependencies: {
      '@angular/core': ngVersion,
      '@angular/forms': ngVersion,
      '@angular/common': ngVersion,
      '@angular/router': ngVersion,
      '@angular/compiler': ngVersion,
      '@angular/platform-browser': ngVersion,
      '@angular/cdk': ngVersion,
      '@angular/platform-browser-dynamic': ngVersion,
      '@ant-design/icons-angular': ngVersion,
      'date-fns': '^4.1.0',
      rxjs: '~7.8.1',
      tslib: '^2.0.0',
      'ng-zorro-antd': nzVersion,
      // demo 依赖本库
      'ng-zorro-antd-extension': 'latest'
    },
    devDependencies: {
      '@angular/build': ngVersion,
      '@angular/cli': ngVersion,
      '@angular/compiler-cli': ngVersion,
      typescript: '~5.8.0'
    }
  };
};
