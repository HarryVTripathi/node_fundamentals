process.stdin.resume();
process.stdin.setEncoding("utf-8");
const stdin_arr = "";

process.stdin.on("data", function (input) {
    stdin_arr.push(input);                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});


function main(input) {
    
    process.stdout.write( + "\n");       // Writing output to STDOUT
}

