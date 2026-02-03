// Freelancers
// Projetos "Concluídos"
// Descontar taxa da plataforma (10%)
// Somar lucro líquido

const ProjetosConcluidos = [
    {id: 1, nome: "Website_A: Valor Bruto (R$)", preco: 1000.00, status: true},
    {id: 2, nome: "Website_A: Taxa (10%)", preco: 100.00, status: true},
    {id: 3, nome: "Website_A: Lucro Líquido (R$)", preco: 900.00, status: false},

    {id: 4, nome: "App_B: Valor Bruto (R$)", preco: 2500.00, status: false},
    {id: 5, nome: "App_B: Taxa (10%)", preco: 250.00, status: true},
    {id: 6, nome: "App_B: Lucro Líquido (R$)", preco: 2250.00, status: true},

    {id: 7, nome: "Consultoria_D: Valor Bruto (R$)", preco: 1200.00, status: true},
    {id: 8, nome: "Consultoria_D: Taxa (10%)", preco: 120.00, status: true},
    {id: 9, nome: "Consultoria_D: Lucro Líquido (R$)", preco: 1080.00, status: false}
];

// Filter
const ProjetosNaoConcluidos = ProjetosConcluidos.filter(projeto => projeto.status);

// Map 
const ProjetosComLucroLiquido = ProjetosNaoConcluidos.map(projeto => {
  return {
    ...projeto,
    lucroTotal: + projeto.preco * 0.90
  };
});
console.table(ProjetosConcluidos);

let LucroTotal = 0;
for(let i = 0; i < ProjetosComLucroLiquido.length; i++) {
    LucroTotal += ProjetosComLucroLiquido[i].lucroTotal;
}


// Reduce 
const lucroTotal = ProjetosComLucroLiquido.reduce((acumulador, item) =>{
    return acumulador + item.lucroTotal;
}, 0);

console.log(`--- RELATÓRIO DE FREELANCERS ---`);
console.log(`Projetos concluídos: ${ProjetosComLucroLiquido.length}`);
console.log(`Lucro líquido total: R$ ${lucroTotal.toFixed(2)}`);