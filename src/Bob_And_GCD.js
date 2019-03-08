process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
})

.on("end", function () {
   main(stdin_input);
});


const MinOps = (K, N, arr) => 
{
    let ans = 0;
    
    for(let l of arr)
    {
        let inc = 0;
        if(l<K)
            inc = K-l;
            
        else
        {
            inc = l%K;
            inc = Math.min(inc, K-inc);
        }
        ans = ans + inc;
    }
    
    return ans;
}

function main(stdin_input) 
{
    const input = stdin_input.split('\n');
    let i = 0;
    let T = parseInt(input[i++]);
    
    while(T-->0)
    {
        let [K,N] = input[i++].split(" ");
        const arr = input[i++].split(" ");
        
        K = parseInt(K);
        N = parseInt(N);
        
        for(let i of arr)
            i = parseInt(i);
            
        let ans = MinOps(K, N, arr);

        process.stdout.write(ans + "\n");
    }
}

