/*
    A node process, by default, will not keep running in
    the background, unless it has a reson to.

    Let's give it the reason.
*/

let i = 0;
setInterval(() => {
/*  
    if(i>6)
        process.exit(201);
*/
    console.log("Hello");

    i++;
}, 800);

/*
    The process won't terminate unless we kill it by
    uncommenting the aforementioned condtion of by ^C.
    
    The reason the process did not exit is because Node's
    event loop was itself busy. "Best friend in node."
    
    Event loop takes care of anything asynchrounous and we
    don't have to worry about threads. In other languages,
    if we need to do asynchronous work we have to manage
    threads ourselves.

    The E.L. is just a simple infinite loop that's built
    inside node and its main task is to monitor any asynchronus
    operations that need to be run and figure out when they're
    ready to be consumed.

    When the process has no asynchronous operations to be
    performed, the event loop will exit and the
*/