/**
    Provides four main methods that allow us to execute
    any OS command from within a node process using a
    subprocess and then get theresult of running that 
    command in our main process. Anything we can do in
    our OS shell can be done from within Node.

    Fork is a special one to create sub-processes that run
    node itself again.

    Spawn is the most recommended method.
 */

const { spawn } = require('child_process'); 

const pwd = spawn('pwd');

pwd.stdout.pipe(process.stdout);