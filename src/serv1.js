const http = require('http');

const requestListener = (req, res) => {
    res.end('Hello World');
    /*
    The above method is shorthand for writing the 
    single line on response object and ending the
    connection.
    */
};

const server = http.createServer(requestListener);



/*
    Callback 'requestListener' will be invoked every time 
    there's a request event.

    The server object is an event-emitter and one of the
    events it emits is named request. In fact, the same 
    code can be rewritten using event-emitter API.

    server.on('request', requestListener)

*/


server.listen(3000, () => {
    console.log("Server is Running");
});