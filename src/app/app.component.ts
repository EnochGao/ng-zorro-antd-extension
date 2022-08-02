import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  value = '';
  checkOptions = [
    { label: '客户信赖', value: '客户信赖' },
    { label: '技术评估', value: '技术评估' },
  ];

  ngOnInit(): void {
    console.log();

  }
}
