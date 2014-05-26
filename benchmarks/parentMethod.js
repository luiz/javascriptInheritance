define('benchmarks/parentMethod', ['ParasiticCombination', 'PseudoClassic', 'Functional', 'BenchExecutor'],
       function(parasitic, pseudo, functional, benchRunner) {
    console.log('Loaded benchmarks/parentMethod');
    var run = function() {
        console.log("Parasitic:");
        var p = new parasitic.Pessoa("maroto", 12, "123");
        benchRunner.run(function(){
            p.fala();
        });

        console.log("Pseudo:");
        var p = new pseudo.Pessoa("maroto", 12, "123");
        benchRunner.run(function(){
            p.fala();
        });

        console.log("Functional:");
        var p = functional.pessoa("maroto", 12, "123");
        benchRunner.run(function(){
            p.fala();
        });
    };
    return {run: run};
});
