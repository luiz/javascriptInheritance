define('runBenchs', ['ParasiticCombination', 'PseudoClassic', 'Functional', 'benchmarks/main'],
       function(parasitic, pseudo, functional, benchs) {
    console.log('Loaded runBenchs');
    var parasiticPF = new parasitic.PessoaFisica("maroto", 12, "123");
    var pseudoPF = new pseudo.PessoaFisica("maroto", 12, "123");
    var functionalPF = functional.pessoaFisica("maroto", 12, "123");

    console.log("Parasitic instance:");
    console.log(parasiticPF);
    console.log("\nParasitic prototype:")
    console.log(parasitic.PessoaFisica.prototype);
    console.log("--------------------------");

    console.log("Pseudo instance:");
    console.log(pseudoPF);
    console.log("\nPseudo prototype:");
    console.log(pseudo.PessoaFisica.prototype);
    console.log("--------------------------");

    console.log("Functional instance:");
    console.log(functionalPF);
    console.log("\nFunctional prototype:");
    console.log(functional.pessoaFisica.prototype);
    console.log("--------------------------");

    benchs.run();
});
