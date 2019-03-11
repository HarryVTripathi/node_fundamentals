/**
    One of the most important in-built libraries in
    node because most of the other modules implement
    the EventEmitter module.

    Streams in node are event-emitters.
    process.stdin and process.stdout are both streams
    and that makes them even emitters as well.
 */

const EventEmitter = require('events');

//Creating an event-emitter object. E1 can now emit events.
const E1 = new EventEmitter();

/**
    An event emitting object has many methods; the two
    important ones are:

    emit('<name>');

    We use the name identifier to identify a certatin event.
    Let's emit a TEST-EVENT

    on() : How we can subscribe/listen to events emitted by
    this object
 */

 E1.emit('TEST_EVENT');

 E1.on('TEST-EVENT', () => {
    console.log('Event Fired');
 });

 E1.emit('TEST-EVENT');