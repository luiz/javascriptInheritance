define('benchmarks/main', ['benchmarks/childInstance', 'benchmarks/childMethod', 'benchmarks/parentInstance', 'benchmarks/parentMethod'],
       function(cI, cM, pI, pM) {
    console.log('Loaded benchmarks/main');
    var run = function() {
        console.log("--- Rodando childInstance ---");
        cI.run();
        console.log("--- Rodando childMethod ---");
        cM.run();
        console.log("--- Rodando parentInstance ---");
        pI.run();
        console.log("--- Rodando parentMethod ---");
        pM.run();
    };
    return { run: run };
});
