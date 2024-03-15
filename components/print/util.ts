export function getElementTag(tag: keyof HTMLElementTagNameMap): string {
  const html: string[] = [];
  const elements = document.getElementsByTagName(tag);
  for (let index = 0; index < elements.length; index++) {
    html.push(elements[index].outerHTML);
  }
  return html.join('\r\n');
}

export function getStyles(identifierStr: string | string[]): string {
  const stylesArray: string[] = [];
  const styleElements = document.getElementsByTagName('style');
  const length = styleElements.length;
  let identifiers: string[] = [];
  if (Array.isArray(identifierStr)) {
    identifiers = [...identifierStr];
  } else {
    identifiers = [identifierStr];
  }
  for (let index = 0; index < length; index++) {
    identifiers.forEach((s) => {
      if (styleElements[index].outerHTML.includes(s)) {
        const formateStr = styleElements[index].outerHTML.replace(
          /\/\*[\s\S]*?\*\//g,
          ''
        );
        stylesArray.push(formateStr);
      }
    });
  }
  return stylesArray.join('\r\n');
}
