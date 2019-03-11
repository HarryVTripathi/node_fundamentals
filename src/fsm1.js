//fs is probably the biggest API among all the built-in node modules

/**
    Can read and write files as buffers, we can also
    work files as streams, which is a lot more efficient
    when working with big files.

    For reading and writing into files, createReadStream and
    createWriteStream methods are better then readFile and
    writeFile because the latter ones use buffers to work and
    will use a lot more memory than the streaming based one.

    Using the fs module, we can append data to a file, this will
    also create a file if it does not exist.

    We can copy files to a specified destination and if it already
    exists, it will be overwritten.

    Can read info about the file using stat method.

    We can read user's permission for files and directories using the
    access method.

    We can change the permission and even owner of the file chmod and
    chown methods.

    mkdir
    readdir
    rmdir
 */

const fs = require('fs');

fs.access('..', (err, data) => {
    err ? console.log(err) : console.log("");
 })