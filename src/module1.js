/*
    A file or a folder that contains code. 
    Node actually does not just execute as is,
    it wraps the file with a function first.

    Because node wraps every file it executes, with
    a function, the following line will work.
*/


//  function(exports, module, require, __filename, __dirname) {
console.log(arguments);
    
    /*  
    return module.exports;
    
    The wrapping function also internally returns
    module.exports property be default.

    When node invokes the wrapping function it simply 
    passes "module.exports" as the value ofthe first 
    argument here.

    The result of require('ThisModule') call would be this 
    module.exports object.

    "exports" is just an alias initiall pointing to 
    "module.exports". If we reassign the "exports" object,
    we are not modifying the "module.exports" object,
    we're just breaking the assignment reference between
    "exports" and "module.exports".

    "module.exports" is by default an empty object

    */
//} (module.exports, )

/*
    It outputs exactly 5 arguments which node passed
    to that hidden wrapping function. Module is not 
    just a file. It is a function that will receive
    something and also return something
*/

let f = 1;
/*
    The scope of this variable is hidden wrapping
    function. In browser, it would be a global because
    browsers don't have hidden wrapping function
*/