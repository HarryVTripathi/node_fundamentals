const http = require('http');

const requestListener = (req, res) => {
    
    //Display all properties but not nested properties
    console.log(req, { depth : 0 });

    /*
    The request object is of type IncomingMessage.
    The response object is of type ServerResponse.
    */
    
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

/*
    To run the server and activate it; make active to 
    listening requests.

    listen function itself is an asychronous one. When we run
    the file, the node process will not exit, because the event
    loop is also busy listening to incoming connections on port
    3000 and it will do that forever unless ^C.
*/