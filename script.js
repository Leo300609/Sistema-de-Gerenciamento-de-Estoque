// Simulação de lógica para o TCC: Controle de Estoque
const estoque = [
  { id: 1, produto: "Teclado Mecânico", quantidade: 15 },
  { id: 2, produto: "Mouse Gamer", quantidade: 10 },
];

// --- FUNÇÕES ---

// Função para adicionar novos produtos ou repor estoque
function adicionarProduto(id, nome, qtd) {
  const itemExistente = estoque.find((i) => i.id === id);

  if (itemExistente) {
    itemExistente.quantidade += qtd;
    console.log(
      `Reposição: +${qtd} unidades de ${nome}. Total: ${itemExistente.quantidade}`,
    );
  } else {
    estoque.push({ id: id, produto: nome, quantidade: qtd });
    console.log(`Novo produto cadastrado: ${nome} com ${qtd} unidades.`);
  }
}

// Função para registrar a saída de produtos
function registrarSaida(id, qtd) {
  const item = estoque.find((i) => i.id === id);
  if (item && item.quantidade >= qtd) {
    item.quantidade -= qtd;
    console.log(`Saída registrada: ${qtd} unidades de ${item.produto}.`);
    console.log(`Estoque atual: ${item.quantidade}`);
  } else {
    console.log("Erro: Quantidade insuficiente ou produto não encontrado.");
  }
}

// --- TESTES DE EXECUÇÃO ---

registrarSaida(1, 5);
adicionarProduto(3, "Monitor 24'", 5);
adicionarProduto(1, "Teclado Mecânico", 10);

console.log("--- ESTOQUE FINAL ---", estoque);
