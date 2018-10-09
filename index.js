console.log('issue : start')

const internalIp = require('internal-ip');

console.log(internalIp.v4.sync())

console.log('issue : end')