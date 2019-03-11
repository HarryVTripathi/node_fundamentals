//The os module
'use strict';

const os = require('os')

console.log('OS Platform', os.platform());

console.log('CPU architecture', os.arch());

//console.log('CPU cores', os.cpus());

console.log('Home directory for current users', os.homedir());

console.log('Host Name : '+os.hostname());

console.log('OS Type : '+os.type());

console.log('OS : '+os.networkInterfaces().type);