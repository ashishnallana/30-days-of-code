function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        var p = 0
        for(var i = 1; i <= n; i++) {
            for(var q = i+1; q <= n; q++) {
                var s = i&q
                if(s < k) {
                    if(s > p) p = s
                }
            }
        }
        console.log(p)
    }

}
