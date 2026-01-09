/**
 * 滚动到第一个校验失败的表单控件
 *
 * @param delay 延时默认100ms
 * @param selector 选择器默认 .ant-form .ant-form-item .ant-form-item-control .ng-invalid.ng-dirty
 */
export function scrollToFirstInvalidControl(
  delay = 100,
  selector = '.ant-form .ant-form-item .ant-form-item-control .ng-invalid.ng-dirty'
) {
  setTimeout(() => {
    const firstInvalidControl = document.querySelector(selector) as HTMLElement;

    if (firstInvalidControl) {
      if (firstInvalidControl.hidden) {
        firstInvalidControl.hidden = false;
        firstInvalidControl.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        firstInvalidControl.hidden = true;
        return;
      }
      firstInvalidControl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, delay);
}
