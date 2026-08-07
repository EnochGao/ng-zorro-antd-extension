---
category: Components
type: 指令
title: Timer Button
subtitle: nzx-timer-button
cover: ''
description: 倒计时按钮指令，只能作用于 button 元素，一般用于获取验证码，支持全局配置。
order: 4
---

nzxTimerButton：倒计时 button，只能作用到 button 元素上，一般用来获取验证码。支持全局配置

## 支持版本

<label type="success">v15.6.0+</label>

## 何时使用

### 引入

```typescript
import { NzxTimerButtonModule } from 'ng-zorro-antd-extension/timer-button';
```

### html

```html
<button
  type="button"
  nz-button
  nzType="primary"
  nzxTimerButton
  [duration]="6"
  #timerBtn="NzxTimerButton"
>
  获取动态码6秒倒计时
</button>

<span> 剩余时间：{{ timerBtn.remainingTime | async }} </span>
<span> 完成：{{ timerBtn.isCompleted | async | json }}</span>
```

