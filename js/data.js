const produtos = [
  // Seção 1 — Hortifruti
  { id: 1, nome: "Banana Prata kg", valor: 5.99, seção: 1 },
  { id: 2, nome: "Maçã Fuji kg", valor: 8.49, seção: 1 },
  { id: 3, nome: "Tomate Salada kg", valor: 6.99, seção: 1 },
  { id: 4, nome: "Cebola kg", valor: 4.49, seção: 1 },
  { id: 5, nome: "Batata Inglesa kg", valor: 5.29, seção: 1 },
  { id: 6, nome: "Alface Crespa unidade", valor: 2.99, seção: 1 },

  // Seção 2 — Laticínios e ovos
  { id: 7, nome: "Leite Integral Piracanjuba 1L", valor: 4.89, seção: 2 },
  { id: 8, nome: "Iogurte Natural Danone 170g", valor: 2.99, seção: 2 },
  { id: 9, nome: "Queijo Mussarela Sadia 500g", valor: 24.9, seção: 2 },
  { id: 10, nome: "Manteiga com Sal Aviação 200g", valor: 9.49, seção: 2 },
  { id: 11, nome: "Requeijão Cremoso Catupiry 200g", valor: 8.99, seção: 2 },
  { id: 12, nome: "Ovos Brancos Grandes Dúzia", valor: 11.5, seção: 2 },

  // Seção 3 — Carnes e frios
  { id: 13, nome: "Peito de Frango Congelado Sadia 1kg", valor: 14.9, seção: 3 },
  { id: 14, nome: "Carne Moída Bovina 1kg", valor: 32.9, seção: 3 },
  { id: 15, nome: "Linguiça Toscana Perdigão 500g", valor: 13.49, seção: 3 },
  { id: 16, nome: "Filé de Tilápia Congelado 800g", valor: 22.9, seção: 3 },
  { id: 17, nome: "Presunto Fatiado Sadia 200g", valor: 7.49, seção: 3 },

  // Seção 8 — Bebidas
  { id: 18, nome: "Refrigerante Coca-Cola 2L", valor: 9.99, seção: 8 },
  { id: 19, nome: "Suco de Laranja Del Valle 1L", valor: 6.49, seção: 8 },
  { id: 20, nome: "Água Mineral Crystal 1,5L", valor: 2.79, seção: 8 },
  { id: 21, nome: "Cerveja Skol Lata 350ml", valor: 3.29, seção: 8 },

  // Seção 12 — Snacks e doces
  { id: 22, nome: "Biscoito Recheado Trakinas 130g", valor: 4.19, seção: 12 },
  { id: 23, nome: "Chocolate ao Leite Lacta 90g", valor: 6.99, seção: 12 },
  { id: 24, nome: "Salgadinho Ruffles 96g", valor: 7.49, seção: 12 },
  { id: 25, nome: "Pipoca de Micro-ondas Yoki 100g", valor: 3.99, seção: 12 },

  // Seção 15 — Mercearia
  { id: 26, nome: "Arroz Branco Camil 1kg", valor: 5.49, seção: 15 },
  { id: 27, nome: "Feijão Carioca Kicaldo 1kg", valor: 7.99, seção: 15 },
  { id: 28, nome: "Açúcar Refinado União 1kg", valor: 4.29, seção: 15 },
  { id: 29, nome: "Café Torrado Pilão 500g", valor: 12.9, seção: 15 },
  { id: 30, nome: "Óleo de Soja Liza 900ml", valor: 6.79, seção: 15 },
  { id: 31, nome: "Macarrão Espaguete Barilla 500g", valor: 5.99, seção: 15 },
  { id: 32, nome: "Molho de Tomate Fugini 340g", valor: 3.49, seção: 15 },
  { id: 33, nome: "Farinha de Trigo Dona Benta 1kg", valor: 5.19, seção: 15 },
  { id: 34, nome: "Achocolatado Nescau 400g", valor: 8.99, seção: 15 },

  // Seção 20 — Limpeza
  { id: 35, nome: "Papel Higiênico Neve 12 rolos", valor: 21.9, seção: 20 },
  { id: 36, nome: "Sabão em Pó Omo 1,6kg", valor: 19.9, seção: 20 },
  { id: 37, nome: "Detergente Ypê 500ml", valor: 2.49, seção: 20 },
  { id: 38, nome: "Amaciante Comfort 1L", valor: 10.9, seção: 20 },

  // Seção 21 — Higiene pessoal
  { id: 39, nome: "Sabonete Dove 90g", valor: 3.19, seção: 21 },
  { id: 40, nome: "Shampoo Seda 325ml", valor: 12.49, seção: 21 },
];