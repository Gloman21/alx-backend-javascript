#!/usr/bin/node
export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  for (const a of set) {
    if (a && a.startsWith(startString)) {
      res += `${el.slice(startString.length)}-`;
    }
  }
  return res.slice(0, res.length - 1);
}
