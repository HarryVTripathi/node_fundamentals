process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
})

.on("end", function () {
   main(stdin_input);
});

function main(input) {

    process.stdout.write( + "\n");       // Writing output to STDOUT
}

