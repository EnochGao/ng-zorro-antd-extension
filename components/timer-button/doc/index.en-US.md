---
category: Components
type: Directive
title: Timer Button
subtitle: nzx-timer-button
cover: ''
description: A countdown button directive that only works on button elements, usually used to get verification codes. Supports global configuration.
order: 4
---

nzxTimerButton: a countdown button that only works on button elements, usually used to get verification codes. Supports global configuration.

## Support Version

<label type="success">v15.6.0+</label>

## When To Use

### Import

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
  Get code (6s countdown)
</button>

<span> Remaining: {{ timerBtn.remainingTime | async }} </span>
<span> Completed: {{ timerBtn.isCompleted | async | json }}</span>
```
