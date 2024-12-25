import { isString } from './isString';

/**
 * 获取当前document下所有指定标签
 * @param tagName 标签名
 * @param identifier 唯一标识符，选取标签内容
 *
 * @returns string 标签字符串
 */
export function getElementByTag(
  tagName: keyof HTMLElementTagNameMap,
  identifier?: string | string[]
): string {
  let identifiers: string[] = [];
  if (identifier) {
    if (Array.isArray(identifier)) {
      identifiers = [...identifier];
    } else if (isString(identifier)) {
      identifiers = [identifier];
    }
  }
  const html: string[] = [];
  const elements = document.getElementsByTagName(tagName);
  const length = elements.length;
  for (let index = 0; index < length; index++) {
    if (identifiers.length) {
      identifiers.forEach((s) => {
        if (elements[index].outerHTML.includes(s)) {
          const formateStr = elements[index].outerHTML.replace(
            /\/\*[\s\S]*?\*\//g,
            ''
          );
          html.push(formateStr);
        }
      });
    } else {
      const formateStr = elements[index].outerHTML.replace(
        /\/\*[\s\S]*?\*\//g,
        ''
      );
      html.push(formateStr);
    }
  }
  return html.join('\r\n');
}
