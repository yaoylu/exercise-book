/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-07 17:06:59
 * @LastEditors: alysalu(alysalu@tencent.com)
 */

function ipToInt(ip) {
  let xH = ''; const  result = REG.exec(ip);
  if (!result) return -1;
  for (let i = 1; i <= 4; i++) {
    const h = parseInt(result[i]);
    xH += (h > 15 ? '' : '0') + h.toString(16);
  }
  return parseInt(xH, 16);
}


const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
const ip2int = (ip) => {
  let hx = '';
  const result = reg.exec(ip);
  if (!result) return -1;
  for (let i = 1;i <= 4;i++) {
    const h = parseInt(result[i], 10);

    hx += (h > 16 ? '' : '0') + h.toString(16);;
  }
  return parseInt(hx, 16);
};
console.log(ip2int('192.168.2.2'));

const int2ip = (num) => {
  const h = num.toString(16);
  const ips = [];
  console.log(h);
  if (h.length !== 8) return -1;
  for (let i = 0;i < 8;i += 2) {
    const hs =  h[i] + h[i + 1];
    ips.push(parseInt(hs, 16).toString());
  }
  const result  = ips.join('.');
  console.log(result);
  return reg.exec(result) ? result : -1;
};
console.log(int2ip(4132236034));
