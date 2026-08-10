import fs from 'fs';
const code = fs.readFileSync('components/acl/nzx-acl.directive.ts', 'utf8');

function extractInputs(body) {
  const re = /@Input(?:\((['"][^'"]+['"])\))?\s+([\w$]+)/g;
  const res = [];
  let m;
  while ((m = re.exec(body))) {
    const alias = m[1]?.replace(/['"]/g, '');
    const name = alias || m[2];
    const end = body.indexOf(';', m.index);
    const decl = end > m.index ? body.slice(m.index + m[0].length, end) : '';
    const typeMatch = decl.match(/:\s*([\w<>\[\]|, ?]+)/);
    const defMatch = decl.match(/=\s*([^;]+)/);
    res.push({ name, type: typeMatch ? typeMatch[1].trim() : '', default: defMatch ? defMatch[1].trim() : '' });
  }
  return res;
}
function extractOutputs(body) {
  const re = /@Output(?:\((['"][^'"]+['"])\))?\s+([\w$]+)\s*=\s*new\s+EventEmitter<([\w<>\[\]|, ?]+)>/g;
  const res = [];
  let m;
  while ((m = re.exec(body))) {
    const alias = m[1]?.replace(/['"]/g, '');
    const name = alias || m[2];
    res.push({ name, type: `EventEmitter<${m[3].trim()}>` });
  }
  return res;
}
console.log('INPUTS', JSON.stringify(extractInputs(code), null, 0));
console.log('OUTPUTS', JSON.stringify(extractOutputs(code)));
