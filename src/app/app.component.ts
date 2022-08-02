import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-zorro-antd-extension';
  value = '';

  checkOptions = [
    { label: '客户信赖', value: '客户信赖' },
    { label: '技术评估', value: '技术评估' },
  ];
}
