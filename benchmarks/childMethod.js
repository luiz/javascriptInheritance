define('benchmarks/childMethod', ['ParasiticCombination', 'PseudoClassic', 'Functional', 'BenchExecutor'],
       function(parasitic, pseudo, functional, benchRunner) {
    console.log('Loaded benchmarks/childMethod');
    var run = function() {
        console.log("Parasitic:");
        var pf = new parasitic.PessoaFisica("maroto", 12, "123");
        benchRunner.run(function(){
            pf.fala();
        });

        console.log("Pseudo:");
        var pf = new pseudo.PessoaFisica("maroto", 12, "123");
        benchRunner.run(function(){
            pf.fala();
        });

        console.log("Functional:");
        var pf = functional.pessoaFisica("maroto", 12, "123");
        benchRunner.run(function(){
            pf.fala();
        });
    };
    return {run: run};
});
