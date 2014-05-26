define('benchmarks/parentInstance', ['ParasiticCombination', 'PseudoClassic', 'Functional', 'BenchExecutor'],
       function(parasitic, pseudo, functional, benchRunner) {
    console.log('Loaded benchmarks/parentInstance');
    var run = function() {
        console.log("Parasitic:");
        benchRunner.run(function(){
            new parasitic.Pessoa("maroto", 12, "123");
        });

        console.log("Pseudo:");
        benchRunner.run(function(){
            new pseudo.Pessoa("maroto", 12, "123");
        });

        console.log("Functional:");
        benchRunner.run(function(){
            functional.pessoa("maroto", 12, "123");
        });
    };
    return {run: run};
});
