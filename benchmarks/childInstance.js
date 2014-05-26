define('benchmarks/childInstance', ['ParasiticCombination', 'PseudoClassic', 'Functional', 'BenchExecutor'],
       function(parasitic, pseudo, functional, benchRunner) {
    console.log('Loaded benchmarks/childInstance');
    var run = function() {
        console.log("Parasitic:");
        benchRunner.run(function(){
            new parasitic.PessoaFisica("maroto", 12, "123");
        });

        console.log("Pseudo:");
        benchRunner.run(function(){
            new pseudo.PessoaFisica("maroto", 12, "123");
        });

        console.log("Functional:");
        benchRunner.run(function(){
            functional.pessoaFisica("maroto", 12, "123");
        });
    };
    return {run: run};
});
