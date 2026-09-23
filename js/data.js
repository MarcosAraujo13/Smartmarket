const produtos = [

  // Seção 1 — Frutas
  { id: 61, nome: "Banana Prata 1kg",              valor: 6.99,  seção: 1 },
  { id: 62, nome: "Maçã Gala 1kg",                valor: 8.99,  seção: 1 },
  { id: 63, nome: "Laranja Pera 1kg",             valor: 5.49,  seção: 1 },

  // Seção 2 — Verduras e Legumes
  { id: 64, nome: "Tomate 1kg",                   valor: 7.99,  seção: 2 },
  { id: 65, nome: "Batata Inglesa 1kg",           valor: 5.99,  seção: 2 },
  { id: 66, nome: "Cebola 1kg",                  valor: 4.99,  seção: 2 },
  { id: 67, nome: "Alface Crespa Unidade",        valor: 3.49,  seção: 2 },
  { id: 68, nome: "Cenoura 1kg",                  valor: 4.49,  seção: 2 },

  // Seção 3 — Leites
  { id: 41, nome: "Leite Integral Piracanjuba 1L", valor: 5.79, seção: 3 },
  { id: 47, nome: "Margarina Qualy 500g",          valor: 7.99, seção: 3 },
  { id: 50, nome: "Leite em Pó Ninho 800g",        valor: 18.9, seção: 3 },

  // Seção 4 — Padaria
  { id: 48, nome: "Pão de Forma Pullman 500g",    valor: 8.99,  seção: 4 },

  // Seção 5 — Bebidas
  { id: 44, nome: "Água Mineral Crystal 1,5L",    valor: 2.99,  seção: 5 },

  // Seção 6 — Laticínios
  { id: 58, nome: "Iogurte Natural Nestlé 170g",  valor: 3.99,  seção: 6 },
  { id: 59, nome: "Requeijão Cremoso Vigor 200g", valor: 8.99,  seção: 6 },
  { id: 60, nome: "Manteiga Aviação 200g",        valor: 12.9,  seção: 6 },

  // Seção 7 — Frios
  { id: 45, nome: "Queijo Mussarela 500g",        valor: 24.9,  seção: 7 },
  { id: 46, nome: "Presunto Sadia 200g",          valor: 8.49,  seção: 7 },

  // Seção 8 — Biscoitos e Salgadinhos
  { id: 42, nome: "Biscoito Recheado Oreo 90g",   valor: 4.99,  seção: 8 },
  { id: 89, nome: "Salgadinho Cheetos 140g",      valor: 8.49,  seção: 8 },
  { id: 90, nome: "Batata Ruffles 115g",          valor: 9.49,  seção: 8 },

  // Seção 9 — Carnes
  { id: 51, nome: "Frango Congelado Seara 1kg",   valor: 14.9,  seção: 9 },
  { id: 52, nome: "Carne Moída Friboi 500g",     valor: 19.9,  seção: 9 },
  { id: 53, nome: "Linguiça Toscana Perdigão 700g", valor: 16.9, seção: 9 },
  { id: 54, nome: "Salsicha Hot Dog Sadia 500g", valor: 9.99,  seção: 9 },

  // Seção 11 — Congelados
  { id: 55, nome: "Pizza Congelada Sadia 460g",   valor: 14.99, seção: 11 },
  { id: 56, nome: "Batata Congelada McCain 700g", valor: 18.49, seção: 11 },

  // Seção 12 — Bebidas
  { id: 43, nome: "Refrigerante Coca-Cola 2L",    valor: 9.49,  seção: 12 },
  { id: 83, nome: "Suco de Laranja Del Valle 1L",valor: 7.49,  seção: 12 },
  { id: 84, nome: "Chá Matte Leão 1,5L",         valor: 6.99,  seção: 12 },

  // Seção 13 — Sorvetes
  { id: 57, nome: "Sorvete Kibon 1,5L",           valor: 24.9,  seção: 13 },

  // Seção 14 — Doces
  { id: 86, nome: "Chocolate Lacta 90g",          valor: 6.49,  seção: 14 },
  { id: 87, nome: "Bombom Sonho de Valsa 1kg",   valor: 39.9,  seção: 14 },
  { id: 88, nome: "Bala de Gelatina Fini 100g",   valor: 7.99,  seção: 14 },

  // Seção 15 — Mercearia
  { id: 26, nome: "Arroz Branco Camil 1kg",      valor: 5.49,  seção: 15 },
  { id: 27, nome: "Feijão Carioca Kicaldo 1kg",  valor: 7.99,  seção: 15 },
  { id: 28, nome: "Açúcar Refinado União 1kg",   valor: 4.29,  seção: 15 },
  { id: 29, nome: "Café Torrado Pilão 500g",     valor: 12.9,  seção: 15 },
  { id: 30, nome: "Óleo de Soja Liza 900ml",     valor: 6.79,  seção: 15 },
  { id: 31, nome: "Macarrão Espaguete Barilla 500g", valor: 5.99, seção: 15 },
  { id: 32, nome: "Molho de Tomate Fugini 340g", valor: 3.49,  seção: 15 },
  { id: 33, nome: "Farinha de Trigo Dona Benta 1kg", valor: 5.19, seção: 15 },
  { id: 34, nome: "Achocolatado Nescau 400g",   valor: 8.99,  seção: 15 },
  { id: 49, nome: "Achocolatado Toddy 370g",     valor: 7.49,  seção: 15 },
  { id: 111, nome: "Farofa Pronta Yoki 250g",    valor: 6.49,  seção: 15 },
  { id: 112, nome: "Milho Verde Quero 170g",     valor: 3.29,  seção: 15 },
  { id: 113, nome: "Ervilha Quero 170g",         valor: 3.49,  seção: 15 },

  // Seção 16 — Molhos
  { id: 114, nome: "Maionese Hellmann's 500g",   valor: 9.99,  seção: 16 },
  { id: 115, nome: "Ketchup Heinz 397g",         valor: 11.9,  seção: 16 },
  { id: 116, nome: "Mostarda Hemmer 200g",       valor: 6.99,  seção: 16 },

  // Seção 17 — Condimentos
  { id: 117, nome: "Molho de Pimenta Tabasco 60ml", valor: 14.9, seção: 17 },

  // Seção 18 — Óleos e Vinagres
  { id: 118, nome: "Azeite Gallo 500ml",          valor: 29.9,  seção: 18 },
  { id: 119, nome: "Vinagre Castelo 750ml",       valor: 4.99,  seção: 18 },

  // Seção 19 — Temperos
  { id: 120, nome: "Sal Refinado Cisne 1kg",      valor: 3.29,  seção: 19 },

  // Seção 20 — Limpeza
  { id: 35, nome: "Papel Higiênico Neve 12 rolos", valor: 21.9, seção: 20 },
  { id: 36, nome: "Sabão em Pó Omo 1,6kg",       valor: 19.9,  seção: 20 },
  { id: 37, nome: "Detergente Ypê 500ml",        valor: 2.49,  seção: 20 },
  { id: 38, nome: "Amaciante Comfort 1L",        valor: 10.9,  seção: 20 },
  { id: 69, nome: "Detergente Ypê 500ml",        valor: 2.49,  seção: 20 },
  { id: 70, nome: "Desinfetante Veja 2L",        valor: 8.99,  seção: 20 },
  { id: 71, nome: "Água Sanitária Qboa 1L",      valor: 4.49,  seção: 20 },
  { id: 72, nome: "Limpador Veja Multiuso 500ml",valor: 6.99, seção: 20 },

  // Seção 21 — Higiene pessoal
  { id: 39, nome: "Sabonete Dove 90g",            valor: 3.19,  seção: 21 },
  { id: 40, nome: "Shampoo Seda 325ml",           valor: 12.49, seção: 21 },
  { id: 75, nome: "Creme Dental Colgate 90g",     valor: 5.49,  seção: 21 },
  { id: 76, nome: "Escova Dental Oral-B",         valor: 8.99,  seção: 21 },
  { id: 77, nome: "Desodorante Rexona 150ml",     valor: 11.49, seção: 21 },
  { id: 78, nome: "Condicionador Seda 325ml",     valor: 12.49, seção: 21 },

  // Seção 22 — Utilidades de limpeza
  { id: 73, nome: "Esponja Scotch-Brite 4 unidades", valor: 5.99, seção: 22 },
  { id: 74, nome: "Saco para Lixo 50L 30 unidades",  valor: 12.49, seção: 22 },

  // Seção 23 — Papelaria doméstica
  { id: 79, nome: "Papel Toalha Kitchen 2 rolos", valor: 6.99,  seção: 23 },
  { id: 80, nome: "Guardanapo de Papel 50 unidades", valor: 3.99, seção: 23 },

  // Seção 25 — Bebidas alcoólicas
  { id: 81, nome: "Cerveja Heineken 350ml",         valor: 5.99, seção: 25 },

  // Seção 26 — Vinhos
  { id: 82, nome: "Vinho Tinto Aurora 750ml",       valor: 29.9, seção: 26 },

  // Seção 27 — Energéticos
  { id: 85, nome: "Energético Red Bull 250ml",      valor: 9.49, seção: 27 },

  // Seção 30 — Produtos para animais
  { id: 91, nome: "Ração Pedigree 1kg",             valor: 14.9, seção: 30 },
  { id: 92, nome: "Areia Sanitária para Gatos 4kg", valor: 19.9, seção: 30 },

  // Seção 31 — Higiene animal
  { id: 93, nome: "Shampoo para Cachorros 500ml",   valor: 17.49, seção: 31 },

  // Seção 35 — Elétrica
  { id: 94, nome: "Lâmpada LED 9W",                 valor: 7.99, seção: 35 },
  { id: 95, nome: "Pilha Alcalina AA 4 unidades",   valor: 12.99, seção: 35 },

  // Seção 36 — Ferramentas e utilidades
  { id: 96, nome: "Extensão Elétrica 3m",           valor: 24.9, seção: 36 },
  { id: 97, nome: "Fita Adesiva Transparente",      valor: 4.49, seção: 36 },

  // Seção 38 — Descartáveis
  { id: 98, nome: "Copo Descartável 200ml 100 unidades", valor: 8.99, seção: 38 },
  { id: 99, nome: "Prato Descartável 15cm 10 unidades",  valor: 5.99, seção: 38 },
  { id: 100, nome: "Talheres Descartáveis 50 unidades",  valor: 9.99, seção: 38 },

  // Seção 40 — Material escolar
  { id: 101, nome: "Papel Sulfite A4 500 folhas",   valor: 29.9, seção: 40 },
  { id: 102, nome: "Caneta Esferográfica Azul",     valor: 2.49, seção: 40 },

  // Seção 41 — Papelaria
  { id: 103, nome: "Lápis Preto HB",                valor: 1.99, seção: 41 },
  { id: 104, nome: "Caderno Universitário 10 matérias", valor: 24.9, seção: 41 },

  // Seção 43 — Bebês
  { id: 105, nome: "Fralda Pampers M 32 unidades",   valor: 39.9, seção: 43 },
  { id: 106, nome: "Lenço Umedecido Huggies 48 unidades", valor: 9.99, seção: 43 },

  // Seção 44 — Alimentação infantil
  { id: 107, nome: "Fórmula Infantil Nestogeno 800g", valor: 42.9, seção: 44 },

  // Seção 46 — Aquarismo
  { id: 108, nome: "Ração para Peixes 100g",        valor: 8.49, seção: 46 },

  // Seção 47 — Churrasco
  { id: 109, nome: "Carvão Vegetal 3kg",            valor: 14.99, seção: 47 },

  // Seção 48 — Utilidades
  { id: 110, nome: "Fósforo Extra Longo 40 unidades", valor: 4.49, seção: 48 }

];