console.log('issue ts : start')

import * as internalIp from 'internal-ip';

internalIp.v4().then(ip => console.log(ip)) // working

// console.log(internalIp.v4().sync()) // not working : Property 'sync' does not exist on type 'Promise<string>'

// console.log(internalIp.v4.sync()) // not working : Property 'sync' does not exist on type '() => Promise<string>'.

console.log('issue ts : end')