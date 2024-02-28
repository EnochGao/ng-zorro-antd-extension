export function getElementTag(tag: keyof HTMLElementTagNameMap): string {
  const html: string[] = [];
  const elements = document.getElementsByTagName(tag);
  for (let index = 0; index < elements.length; index++) {
    html.push(elements[index].outerHTML);
  }
  return html.join('\r\n');
}
