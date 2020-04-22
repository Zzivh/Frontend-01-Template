/* 1 写一个正则表达式 匹配所有 Number 直接量*/
/[\d]{1,16}|(?:[1-9]+\.[\d]+)|(NaN)|0[xX][1-9a-f]+/

/* 2 写一个 UTF-8 Encoding 的函数*/
function encodeUTF8(text) {
  const code = encodeURIComponent(text);
  const bytes = [];
  for (var i = 0; i < code.length; i++) {
      const c = code.charAt(i);
      if (c === '%') {
          const hex = code.charAt(i + 1) + code.charAt(i + 2);
          const hexVal = parseInt(hex, 16);
          bytes.push(hexVal);
          i += 2;
      } else {
        bytes.push(c.charCodeAt(0));
      }
  }
  return bytes;
}

/* 3 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号 */
/^(("([^"]|\")*")|('([^']|\')*'))$/