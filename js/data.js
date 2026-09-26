const produtos = [

  // Seção 1 — Frutas
  { id: 61,  nome: "Banana Prata 1kg",              valor: 6.99,  seção: 1 },
  { id: 62,  nome: "Maçã Gala 1kg",                 valor: 8.99,  seção: 1 },
  { id: 63,  nome: "Laranja Pera 1kg",               valor: 5.49,  seção: 1 },
  { id: 121, nome: "Uva Itália 500g",                valor: 9.99,  seção: 1 },
  { id: 122, nome: "Melancia Unidade (~5kg)",        valor: 14.90, seção: 1 },
  { id: 123, nome: "Abacaxi Pérola Unidade",         valor: 6.49,  seção: 1 },
  { id: 124, nome: "Manga Palmer 1kg",               valor: 7.49,  seção: 1 },
  { id: 125, nome: "Limão Tahiti 1kg",               valor: 4.99,  seção: 1 },
  { id: 126, nome: "Mamão Formosa 1kg",              valor: 5.99,  seção: 1 },
  { id: 280, nome: "Morango 300g",                   valor: 8.99,  seção: 1 },
  { id: 281, nome: "Pera Williams 1kg",              valor: 9.49,  seção: 1 },
  { id: 282, nome: "Abacate Unidade",                valor: 6.99,  seção: 1 },
  { id: 283, nome: "Kiwi Unidade",                   valor: 2.99,  seção: 1 },

  // Seção 2 — Verduras e Legumes
  { id: 64,  nome: "Tomate 1kg",                     valor: 7.99,  seção: 2 },
  { id: 65,  nome: "Batata Inglesa 1kg",             valor: 5.99,  seção: 2 },
  { id: 66,  nome: "Cebola 1kg",                     valor: 4.99,  seção: 2 },
  { id: 67,  nome: "Alface Crespa Unidade",          valor: 3.49,  seção: 2 },
  { id: 68,  nome: "Cenoura 1kg",                    valor: 4.49,  seção: 2 },
  { id: 127, nome: "Pepino 1kg",                     valor: 4.99,  seção: 2 },
  { id: 128, nome: "Chuchu 1kg",                     valor: 3.99,  seção: 2 },
  { id: 129, nome: "Brócolis Unidade",               valor: 5.49,  seção: 2 },
  { id: 130, nome: "Couve Manteiga Maço",            valor: 3.29,  seção: 2 },
  { id: 131, nome: "Pimentão Verde 1kg",             valor: 6.99,  seção: 2 },
  { id: 132, nome: "Abobrinha Italiana 1kg",         valor: 4.49,  seção: 2 },
  { id: 284, nome: "Beterraba 1kg",                  valor: 4.99,  seção: 2 },
  { id: 285, nome: "Alho Descascado 200g",           valor: 8.49,  seção: 2 },
  { id: 286, nome: "Repolho Verde Unidade",          valor: 4.49,  seção: 2 },
  { id: 287, nome: "Espinafre Maço",                 valor: 4.99,  seção: 2 },

  // Seção 3 — Leites
  { id: 41,  nome: "Leite Integral Piracanjuba 1L",  valor: 5.79,  seção: 3 },
  { id: 47,  nome: "Margarina Qualy 500g",           valor: 7.99,  seção: 3 },
  { id: 50,  nome: "Leite em Pó Ninho 800g",         valor: 18.90, seção: 3 },
  { id: 133, nome: "Leite Desnatado Piracanjuba 1L", valor: 5.99,  seção: 3 },
  { id: 134, nome: "Leite Condensado Moça 395g",     valor: 7.49,  seção: 3 },
  { id: 135, nome: "Creme de Leite Nestlé 200g",     valor: 3.99,  seção: 3 },
  { id: 136, nome: "Leite de Coco Sococo 200ml",     valor: 6.49,  seção: 3 },
  { id: 288, nome: "Leite Semidesnatado Itambé 1L",  valor: 5.89,  seção: 3 },
  { id: 289, nome: "Leite Sem Lactose Piracanjuba 1L", valor: 6.99, seção: 3 },
  { id: 290, nome: "Bebida Láctea Chocolate Piá 200ml", valor: 2.99, seção: 3 },

  // Seção 4 — Padaria
  { id: 48,  nome: "Pão de Forma Pullman 500g",      valor: 8.99,  seção: 4 },
  { id: 137, nome: "Pão Francês 1kg",                valor: 12.90, seção: 4 },
  { id: 138, nome: "Pão de Forma Integral Wickbold 500g", valor: 9.49, seção: 4 },
  { id: 139, nome: "Bisnaguinha Pullman 300g",       valor: 6.99,  seção: 4 },
  { id: 140, nome: "Torrada Bauducco 160g",          valor: 6.49,  seção: 4 },
  { id: 141, nome: "Rosca Doce 400g",                valor: 8.99,  seção: 4 },
  { id: 291, nome: "Pão de Queijo Congelado Forno de Minas 400g", valor: 13.90, seção: 4 },
  { id: 292, nome: "Croissant Folheado (4un)",       valor: 11.90, seção: 4 },
  { id: 293, nome: "Pão Sírio (5un)",                valor: 7.99,  seção: 4 },

  // Seção 5 — Bebidas (Águas)
  { id: 44,  nome: "Água Mineral Crystal 1,5L",      valor: 2.99,  seção: 5 },
  { id: 142, nome: "Água Mineral com Gás Crystal 1,5L", valor: 3.49, seção: 5 },
  { id: 143, nome: "Água de Coco Kero Coco 1L",      valor: 8.99,  seção: 5 },
  { id: 144, nome: "Água Tônica Schweppes 350ml",    valor: 4.49,  seção: 5 },
  { id: 294, nome: "Água Mineral Crystal 500ml (fardo 12un)", valor: 14.90, seção: 5 },
  { id: 295, nome: "Água com Gás Saborizada Limão 500ml", valor: 3.99, seção: 5 },

  // Seção 6 — Laticínios
  { id: 58,  nome: "Iogurte Natural Nestlé 170g",    valor: 3.99,  seção: 6 },
  { id: 59,  nome: "Requeijão Cremoso Vigor 200g",   valor: 8.99,  seção: 6 },
  { id: 60,  nome: "Manteiga Aviação 200g",          valor: 12.90, seção: 6 },
  { id: 145, nome: "Cream Cheese Philadelphia 150g", valor: 14.90, seção: 6 },
  { id: 146, nome: "Queijo Ralado Parmesão 50g",     valor: 6.99,  seção: 6 },
  { id: 147, nome: "Leite Fermentado Yakult 80ml (6un)", valor: 9.49, seção: 6 },
  { id: 262, nome: "Ovos Brancos Grandes (30un)",     valor: 21.90, seção: 6 },
  { id: 263, nome: "Ovos Caipiras Vermelhos (12un)",  valor: 14.90, seção: 6 },
  { id: 264, nome: "Ovos de Codorna (20un)",          valor: 8.99,  seção: 6 },
  { id: 265, nome: "Iogurte Grego Natural Nestlé 100g", valor: 5.49, seção: 6 },
  { id: 296, nome: "Iogurte de Morango Danone 170g", valor: 3.49,  seção: 6 },
  { id: 297, nome: "Petit Suisse Danoninho (4un)",   valor: 6.99,  seção: 6 },

  // Seção 7 — Frios
  { id: 45,  nome: "Queijo Mussarela 500g",          valor: 24.90, seção: 7 },
  { id: 46,  nome: "Presunto Sadia 200g",            valor: 8.49,  seção: 7 },
  { id: 148, nome: "Peito de Peru Sadia 200g",       valor: 9.99,  seção: 7 },
  { id: 149, nome: "Salame Italiano Sadia 200g",     valor: 11.49, seção: 7 },
  { id: 150, nome: "Mortadela Perdigão 200g",        valor: 6.49,  seção: 7 },
  { id: 151, nome: "Bacon Fatiado Sadia 250g",       valor: 12.90, seção: 7 },
  { id: 266, nome: "Queijo Minas Frescal 400g",       valor: 16.90, seção: 7 },
  { id: 267, nome: "Queijo Prato Fatiado 200g",       valor: 11.90, seção: 7 },
  { id: 275, nome: "Presunto Cozido Fatiado 250g",    valor: 10.90, seção: 7 },
  { id: 298, nome: "Queijo Provolone 300g",          valor: 22.90, seção: 7 },

  // Seção 8 — Biscoitos e Salgadinhos
  { id: 42,  nome: "Biscoito Recheado Oreo 90g",     valor: 4.99,  seção: 8 },
  { id: 89,  nome: "Salgadinho Cheetos 140g",        valor: 8.49,  seção: 8 },
  { id: 90,  nome: "Batata Ruffles 115g",            valor: 9.49,  seção: 8 },
  { id: 152, nome: "Biscoito Água e Sal Piraquê 200g", valor: 4.49, seção: 8 },
  { id: 153, nome: "Biscoito Cream Cracker Adria 200g", valor: 4.29, seção: 8 },
  { id: 154, nome: "Salgadinho Doritos 140g",        valor: 8.99,  seção: 8 },
  { id: 155, nome: "Pipoca para Micro-ondas Yoki 100g", valor: 3.99, seção: 8 },
  { id: 299, nome: "Biscoito Maisena Piraquê 200g",  valor: 4.49,  seção: 8 },
  { id: 300, nome: "Torcida Elma Chips 100g",        valor: 6.99,  seção: 8 },

  // Seção 9 — Carnes
  { id: 51,  nome: "Frango Congelado Seara 1kg",     valor: 14.90, seção: 9 },
  { id: 52,  nome: "Carne Moída Friboi 500g",        valor: 19.90, seção: 9 },
  { id: 53,  nome: "Linguiça Toscana Perdigão 700g", valor: 16.90, seção: 9 },
  { id: 54,  nome: "Salsicha Hot Dog Sadia 500g",    valor: 9.99,  seção: 9 },
  { id: 156, nome: "Picanha Bovina 1kg",             valor: 59.90, seção: 9 },
  { id: 157, nome: "Costela Bovina 1kg",             valor: 29.90, seção: 9 },
  { id: 158, nome: "Coxa e Sobrecoxa de Frango 1kg", valor: 12.90, seção: 9 },
  { id: 159, nome: "Bisteca Suína 1kg",              valor: 18.90, seção: 9 },
  { id: 160, nome: "Filé de Tilápia 500g",           valor: 22.90, seção: 9 },
  { id: 276, nome: "Linguiça Calabresa Defumada 500g", valor: 13.90, seção: 9 },
  { id: 277, nome: "Peito de Frango Congelado 1kg",   valor: 16.90, seção: 9 },
  { id: 301, nome: "Alcatra Bovina 1kg",             valor: 44.90, seção: 9 },

  // Seção 10 — Confeitaria
  { id: 161, nome: "Bolo Pronto de Chocolate Sadia 400g", valor: 14.90, seção: 10 },
  { id: 162, nome: "Cobertura de Chocolate Harald 400g",  valor: 9.99,  seção: 10 },
  { id: 163, nome: "Recheio de Morango Confeiteiro 400g", valor: 8.49,  seção: 10 },
  { id: 302, nome: "Chantilly Nestlé 200g",          valor: 9.99,  seção: 10 },
  { id: 303, nome: "Granulado de Chocolate Dori 150g", valor: 6.49, seção: 10 },

  // Seção 11 — Congelados
  { id: 55,  nome: "Pizza Congelada Sadia 460g",     valor: 14.99, seção: 11 },
  { id: 56,  nome: "Batata Congelada McCain 700g",   valor: 18.49, seção: 11 },
  { id: 164, nome: "Lasanha Congelada Sadia 600g",   valor: 16.90, seção: 11 },
  { id: 165, nome: "Hambúrguer Bovino Congelado Perdigão 672g", valor: 18.90, seção: 11 },
  { id: 166, nome: "Nuggets de Frango Sadia 300g",   valor: 11.49, seção: 11 },
  { id: 167, nome: "Polpa de Fruta Congelada Maguary 400g", valor: 6.99, seção: 11 },
  { id: 304, nome: "Legumes Congelados Sadia 300g",  valor: 8.49,  seção: 11 },
  { id: 305, nome: "Escondidinho Congelado Sadia 400g", valor: 15.90, seção: 11 },

  // Seção 12 — Bebidas (Refrigerantes e Sucos)
  { id: 43,  nome: "Refrigerante Coca-Cola 2L",      valor: 9.49,  seção: 12 },
  { id: 83,  nome: "Suco de Laranja Del Valle 1L",   valor: 7.49,  seção: 12 },
  { id: 84,  nome: "Chá Matte Leão 1,5L",            valor: 6.99,  seção: 12 },
  { id: 168, nome: "Refrigerante Guaraná Antarctica 2L", valor: 8.99, seção: 12 },
  { id: 169, nome: "Suco em Pó Tang 25g",            valor: 1.99,  seção: 12 },
  { id: 170, nome: "Isotônico Gatorade 500ml",       valor: 5.99,  seção: 12 },
  { id: 278, nome: "Suco de Uva Integral Maguary 1L", valor: 12.90, seção: 12 },
  { id: 306, nome: "Refrigerante Sprite 2L",         valor: 8.99,  seção: 12 },
  { id: 307, nome: "Suco de Maçã Del Valle 1L",      valor: 7.49,  seção: 12 },

  // Seção 13 — Sorvetes
  { id: 57,  nome: "Sorvete Kibon 1,5L",             valor: 24.90, seção: 13 },
  { id: 171, nome: "Picolé de Frutas Kibon (6un)",   valor: 12.90, seção: 13 },
  { id: 172, nome: "Sorvete Napolitano Nestlé 1,5L", valor: 22.90, seção: 13 },
  { id: 173, nome: "Polpa de Açaí Congelado 1kg",    valor: 24.90, seção: 13 },
  { id: 308, nome: "Picolé de Chocolate Kibon (6un)", valor: 12.90, seção: 13 },

  // Seção 14 — Doces
  { id: 86,  nome: "Chocolate Lacta 90g",            valor: 6.49,  seção: 14 },
  { id: 87,  nome: "Bombom Sonho de Valsa 1kg",      valor: 39.90, seção: 14 },
  { id: 88,  nome: "Bala de Gelatina Fini 100g",     valor: 7.99,  seção: 14 },
  { id: 174, nome: "Pirulito Chupa Chups Unidade",   valor: 1.49,  seção: 14 },
  { id: 175, nome: "Chiclete Trident 8g",            valor: 2.99,  seção: 14 },
  { id: 176, nome: "Wafer Bauducco 140g",            valor: 5.49,  seção: 14 },
  { id: 177, nome: "Paçoca de Amendoim (20un)",      valor: 9.99,  seção: 14 },
  { id: 273, nome: "Amendoim Torrado Salgado 500g",   valor: 9.99,  seção: 14 },
  { id: 274, nome: "Passas Pretas 200g",               valor: 8.49,  seção: 14 },
  { id: 309, nome: "Gelatina em Pó Morango Royal 20g", valor: 2.99, seção: 14 },

  // Seção 15 — Mercearia
  { id: 26,  nome: "Arroz Branco Camil 1kg",         valor: 5.49,  seção: 15 },
  { id: 27,  nome: "Feijão Carioca Kicaldo 1kg",     valor: 7.99,  seção: 15 },
  { id: 28,  nome: "Açúcar Refinado União 1kg",      valor: 4.29,  seção: 15 },
  { id: 29,  nome: "Café Torrado Pilão 500g",        valor: 12.90, seção: 15 },
  { id: 30,  nome: "Óleo de Soja Liza 900ml",        valor: 6.79,  seção: 15 },
  { id: 31,  nome: "Macarrão Espaguete Barilla 500g", valor: 5.99, seção: 15 },
  { id: 32,  nome: "Molho de Tomate Fugini 340g",    valor: 3.49,  seção: 15 },
  { id: 33,  nome: "Farinha de Trigo Dona Benta 1kg", valor: 5.19, seção: 15 },
  { id: 34,  nome: "Achocolatado Nescau 400g",       valor: 8.99,  seção: 15 },
  { id: 49,  nome: "Achocolatado Toddy 370g",        valor: 7.49,  seção: 15 },
  { id: 111, nome: "Farofa Pronta Yoki 250g",        valor: 6.49,  seção: 15 },
  { id: 112, nome: "Milho Verde Quero 170g",         valor: 3.29,  seção: 15 },
  { id: 113, nome: "Ervilha Quero 170g",             valor: 3.49,  seção: 15 },
  { id: 178, nome: "Aveia em Flocos Quaker 200g",    valor: 6.49,  seção: 15 },
  { id: 179, nome: "Granola Tradicional 250g",       valor: 9.99,  seção: 15 },
  { id: 180, nome: "Lentilha 500g",                  valor: 6.99,  seção: 15 },
  { id: 181, nome: "Grão de Bico 500g",              valor: 7.49,  seção: 15 },
  { id: 182, nome: "Extrato de Tomate Elefante 340g", valor: 4.99, seção: 15 },
  { id: 183, nome: "Amido de Milho Maizena 200g",    valor: 5.49,  seção: 15 },
  { id: 184, nome: "Fermento em Pó Royal 100g",      valor: 4.29,  seção: 15 },
  { id: 268, nome: "Tapioca Granulada 500g",          valor: 6.99,  seção: 15 },
  { id: 269, nome: "Polvilho Doce 500g",              valor: 6.49,  seção: 15 },
  { id: 270, nome: "Farinha de Rosca 500g",           valor: 4.99,  seção: 15 },
  { id: 272, nome: "Castanha do Pará 200g",           valor: 14.90, seção: 15 },
  { id: 279, nome: "Café Solúvel Nescafé 100g",       valor: 14.90, seção: 15 },
  { id: 310, nome: "Arroz Integral Tio João 1kg",    valor: 7.49,  seção: 15 },
  { id: 311, nome: "Feijão Preto Camil 1kg",         valor: 8.49,  seção: 15 },
  { id: 312, nome: "Macarrão Parafuso Adria 500g",   valor: 5.49,  seção: 15 },
  { id: 313, nome: "Farinha de Mandioca 500g",       valor: 6.49,  seção: 15 },
  { id: 314, nome: "Mel Puro Karo 280g",             valor: 12.90, seção: 15 },

  // Seção 16 — Molhos
  { id: 114, nome: "Maionese Hellmann's 500g",       valor: 9.99,  seção: 16 },
  { id: 115, nome: "Ketchup Heinz 397g",             valor: 11.90, seção: 16 },
  { id: 116, nome: "Mostarda Hemmer 200g",           valor: 6.99,  seção: 16 },
  { id: 185, nome: "Molho Shoyu Sakura 500ml",       valor: 9.99,  seção: 16 },
  { id: 186, nome: "Molho Barbecue Heinz 397g",      valor: 12.90, seção: 16 },
  { id: 187, nome: "Molho Inglês Lea & Perrins 150ml", valor: 11.49, seção: 16 },
  { id: 271, nome: "Molho de Soja Light Sakura 150ml", valor: 7.99, seção: 16 },
  { id: 315, nome: "Molho Agridoce Sakura 320ml",    valor: 10.90, seção: 16 },

  // Seção 17 — Condimentos
  { id: 117, nome: "Molho de Pimenta Tabasco 60ml",  valor: 14.90, seção: 17 },
  { id: 188, nome: "Orégano Kitano 20g",             valor: 3.49,  seção: 17 },
  { id: 189, nome: "Páprica Doce Kitano 30g",        valor: 3.99,  seção: 17 },
  { id: 190, nome: "Pimenta do Reino Moída Kitano 30g", valor: 4.49, seção: 17 },
  { id: 191, nome: "Canela em Pó Kitano 25g",        valor: 3.29,  seção: 17 },
  { id: 316, nome: "Cominho em Pó Kitano 25g",       valor: 3.49,  seção: 17 },
  { id: 317, nome: "Colorau Kitano 50g",             valor: 3.99,  seção: 17 },

  // Seção 18 — Óleos e Vinagres
  { id: 118, nome: "Azeite Gallo 500ml",             valor: 29.90, seção: 18 },
  { id: 119, nome: "Vinagre Castelo 750ml",          valor: 4.99,  seção: 18 },
  { id: 192, nome: "Óleo de Canola Liza 900ml",      valor: 8.99,  seção: 18 },
  { id: 193, nome: "Vinagre de Maçã Castelo 750ml",  valor: 6.49,  seção: 18 },
  { id: 318, nome: "Azeite Andorinha 500ml",         valor: 22.90, seção: 18 },

  // Seção 19 — Temperos
  { id: 120, nome: "Sal Refinado Cisne 1kg",         valor: 3.29,  seção: 19 },
  { id: 194, nome: "Tempero Alho e Sal Ajinomoto 100g", valor: 4.99, seção: 19 },
  { id: 195, nome: "Caldo de Galinha Knorr (6un)",   valor: 5.49,  seção: 19 },
  { id: 196, nome: "Sazon Completo Ajinomoto 60g",   valor: 3.99,  seção: 19 },
  { id: 319, nome: "Caldo de Carne Knorr (6un)",     valor: 5.49,  seção: 19 },

  // Seção 20 — Limpeza
  { id: 35,  nome: "Papel Higiênico Neve 12 rolos",  valor: 21.90, seção: 20 },
  { id: 36,  nome: "Sabão em Pó Omo 1,6kg",          valor: 19.90, seção: 20 },
  { id: 37,  nome: "Detergente Ypê 500ml",           valor: 2.49,  seção: 20 },
  { id: 38,  nome: "Amaciante Comfort 1L",           valor: 10.90, seção: 20 },
  { id: 70,  nome: "Desinfetante Veja 2L",           valor: 8.99,  seção: 20 },
  { id: 71,  nome: "Água Sanitária Qboa 1L",         valor: 4.49,  seção: 20 },
  { id: 72,  nome: "Limpador Veja Multiuso 500ml",   valor: 6.99,  seção: 20 },
  { id: 197, nome: "Álcool 46° Limpeza 1L",          valor: 8.99,  seção: 20 },
  { id: 198, nome: "Desengordurante Veja 500ml",     valor: 9.49,  seção: 20 },
  { id: 199, nome: "Limpa Vidros Vidrex 500ml",      valor: 7.49,  seção: 20 },
  { id: 200, nome: "Pastilha Sanitária Pato Purific (3un)", valor: 9.99, seção: 20 },
  { id: 320, nome: "Sabão em Barra Ypê (5un)",       valor: 9.99,  seção: 20 },
  { id: 321, nome: "Lustra Móveis Poliflor 200ml",   valor: 9.49,  seção: 20 },

  // Seção 21 — Higiene Pessoal
  { id: 39,  nome: "Sabonete Dove 90g",              valor: 3.19,  seção: 21 },
  { id: 40,  nome: "Shampoo Seda 325ml",             valor: 12.49, seção: 21 },
  { id: 75,  nome: "Creme Dental Colgate 90g",       valor: 5.49,  seção: 21 },
  { id: 76,  nome: "Escova Dental Oral-B",           valor: 8.99,  seção: 21 },
  { id: 77,  nome: "Desodorante Rexona 150ml",       valor: 11.49, seção: 21 },
  { id: 78,  nome: "Condicionador Seda 325ml",       valor: 12.49, seção: 21 },
  { id: 201, nome: "Absorvente Always (8un)",        valor: 6.99,  seção: 21 },
  { id: 202, nome: "Fio Dental Oral-B 50m",          valor: 8.49,  seção: 21 },
  { id: 203, nome: "Enxaguante Bucal Listerine 250ml", valor: 14.90, seção: 21 },
  { id: 204, nome: "Protetor Solar Nivea FPS30 200ml", valor: 39.90, seção: 21 },
  { id: 205, nome: "Aparelho de Barbear Gillette Prestobarba (3un)", valor: 12.90, seção: 21 },
  { id: 322, nome: "Sabonete Líquido Dove 250ml",    valor: 9.99,  seção: 21 },
  { id: 323, nome: "Lenço Umedecido Adulto (48un)",  valor: 8.99,  seção: 21 },

  // Seção 22 — Utilidades de Limpeza
  { id: 73,  nome: "Esponja Scotch-Brite 4 unidades", valor: 5.99, seção: 22 },
  { id: 74,  nome: "Saco para Lixo 50L 30 unidades",  valor: 12.49, seção: 22 },
  { id: 206, nome: "Pano de Prato (kit 3un)",        valor: 9.99,  seção: 22 },
  { id: 207, nome: "Rodo 40cm",                      valor: 12.90, seção: 22 },
  { id: 208, nome: "Vassoura de Nylon",              valor: 14.90, seção: 22 },
  { id: 209, nome: "Luva de Borracha Multiuso Par",  valor: 6.49,  seção: 22 },
  { id: 324, nome: "Balde Plástico 10L",             valor: 14.90, seção: 22 },

  // Seção 23 — Papelaria Doméstica
  { id: 79,  nome: "Papel Toalha Kitchen 2 rolos",   valor: 6.99,  seção: 23 },
  { id: 80,  nome: "Guardanapo de Papel 50 unidades", valor: 3.99, seção: 23 },
  { id: 210, nome: "Filme Plástico PVC 30cm",        valor: 5.99,  seção: 23 },
  { id: 211, nome: "Papel Alumínio Wyda 30cm",       valor: 8.49,  seção: 23 },
  { id: 325, nome: "Saco para Freezer (30un)",       valor: 6.99,  seção: 23 },

  // Seção 24 — Perfumaria
  { id: 212, nome: "Perfume Corporal O Boticário 100ml", valor: 49.90, seção: 24 },
  { id: 213, nome: "Loção Hidratante Nivea 400ml",   valor: 19.90, seção: 24 },
  { id: 214, nome: "Talco Johnson's 100g",           valor: 6.99,  seção: 24 },
  { id: 326, nome: "Desodorante Colônia Egeo 90ml",  valor: 24.90, seção: 24 },

  // Seção 25 — Bebidas Alcoólicas
  { id: 81,  nome: "Cerveja Heineken 350ml",         valor: 5.99,  seção: 25 },
  { id: 215, nome: "Vodka Smirnoff 998ml",           valor: 39.90, seção: 25 },
  { id: 216, nome: "Whisky Red Label 1L",            valor: 89.90, seção: 25 },
  { id: 217, nome: "Cachaça 51 965ml",               valor: 12.90, seção: 25 },
  { id: 327, nome: "Cerveja Brahma Lata 350ml",      valor: 3.99,  seção: 25 },
  { id: 328, nome: "Gin Rocks 750ml",                valor: 49.90, seção: 25 },

  // Seção 26 — Vinhos
  { id: 82,  nome: "Vinho Tinto Aurora 750ml",       valor: 29.90, seção: 26 },
  { id: 218, nome: "Vinho Branco Concha y Toro 750ml", valor: 34.90, seção: 26 },
  { id: 219, nome: "Espumante Chandon Brut 750ml",   valor: 79.90, seção: 26 },
  { id: 329, nome: "Vinho Rosé Salton 750ml",        valor: 32.90, seção: 26 },

  // Seção 27 — Energéticos
  { id: 85,  nome: "Energético Red Bull 250ml",      valor: 9.49,  seção: 27 },
  { id: 220, nome: "Energético Monster 473ml",       valor: 10.99, seção: 27 },
  { id: 221, nome: "Energético TNT 269ml",           valor: 6.49,  seção: 27 },

  // Seção 28 — Chás e Infusões
  { id: 222, nome: "Chá Verde Leão Sachê (25un)",    valor: 7.99,  seção: 28 },
  { id: 223, nome: "Chá de Camomila Leão Sachê (25un)", valor: 7.49, seção: 28 },
  { id: 330, nome: "Chá de Hortelã Leão Sachê (25un)", valor: 7.49, seção: 28 },
  { id: 331, nome: "Chá Mate Gelado em Pó 400g",     valor: 9.99,  seção: 28 },

  // Seção 30 — Produtos para Animais
  { id: 91,  nome: "Ração Pedigree 1kg",             valor: 14.90, seção: 30 },
  { id: 92,  nome: "Areia Sanitária para Gatos 4kg", valor: 19.90, seção: 30 },
  { id: 224, nome: "Petisco Pedigree para Cães 80g", valor: 6.99,  seção: 30 },
  { id: 225, nome: "Ração Whiskas para Gatos 1kg",   valor: 16.90, seção: 30 },
  { id: 332, nome: "Petisco Whiskas para Gatos 40g", valor: 5.99,  seção: 30 },

  // Seção 31 — Higiene Animal
  { id: 93,  nome: "Shampoo para Cachorros 500ml",   valor: 17.49, seção: 31 },
  { id: 226, nome: "Coleira Antipulgas para Cães",   valor: 24.90, seção: 31 },
  { id: 227, nome: "Tapete Higiênico para Cães (30un)", valor: 39.90, seção: 31 },
  { id: 333, nome: "Saco Coletor de Fezes (rolo)",   valor: 6.99,  seção: 31 },

  // Seção 33 — Peixaria
  { id: 228, nome: "Camarão Congelado 500g",         valor: 34.90, seção: 33 },
  { id: 229, nome: "Salmão Fresco 500g",             valor: 44.90, seção: 33 },
  { id: 334, nome: "Sardinha Fresca 1kg",            valor: 16.90, seção: 33 },
  { id: 335, nome: "Atum em Lata Gomes da Costa 170g", valor: 8.49, seção: 33 },

  // Seção 34 — Salgados e Massas Prontas
  { id: 230, nome: "Coxinha Congelada Perdigão 300g", valor: 12.90, seção: 34 },
  { id: 231, nome: "Pastel Congelado Sadia 300g",    valor: 11.49, seção: 34 },
  { id: 336, nome: "Massa de Pastel Fresca 500g",    valor: 8.99,  seção: 34 },
  { id: 337, nome: "Massa de Pizza Pronta 400g",     valor: 9.99,  seção: 34 },

  // Seção 35 — Elétrica
  { id: 94,  nome: "Lâmpada LED 9W",                 valor: 7.99,  seção: 35 },
  { id: 95,  nome: "Pilha Alcalina AA 4 unidades",   valor: 12.99, seção: 35 },
  { id: 232, nome: "Fita Isolante 3M 18m",           valor: 4.99,  seção: 35 },
  { id: 233, nome: "Adaptador de Tomada Universal",  valor: 9.99,  seção: 35 },
  { id: 338, nome: "Pilha Alcalina AAA 4 unidades",  valor: 12.99, seção: 35 },

  // Seção 36 — Ferramentas e Utilidades
  { id: 96,  nome: "Extensão Elétrica 3m",           valor: 24.90, seção: 36 },
  { id: 97,  nome: "Fita Adesiva Transparente",      valor: 4.49,  seção: 36 },
  { id: 234, nome: "Chave de Fenda 6mm",             valor: 8.49,  seção: 36 },
  { id: 235, nome: "Martelo Unha 25mm",              valor: 19.90, seção: 36 },
  { id: 339, nome: "Trena 5m",                       valor: 14.90, seção: 36 },

  // Seção 38 — Descartáveis
  { id: 98,  nome: "Copo Descartável 200ml 100 unidades", valor: 8.99, seção: 38 },
  { id: 99,  nome: "Prato Descartável 15cm 10 unidades",  valor: 5.99, seção: 38 },
  { id: 100, nome: "Talheres Descartáveis 50 unidades",   valor: 9.99, seção: 38 },
  { id: 236, nome: "Sacola Plástica Reforçada (50un)", valor: 6.99, seção: 38 },
  { id: 237, nome: "Copo Térmico Descartável 200ml (25un)", valor: 9.49, seção: 38 },
  { id: 340, nome: "Guardanapo de Papel Colorido 50un", valor: 4.49, seção: 38 },

  // Seção 40 — Material Escolar
  { id: 101, nome: "Papel Sulfite A4 500 folhas",    valor: 29.90, seção: 40 },
  { id: 102, nome: "Caneta Esferográfica Azul",      valor: 2.49,  seção: 40 },
  { id: 238, nome: "Borracha Branca Faber-Castell",  valor: 1.49,  seção: 40 },
  { id: 239, nome: "Apontador com Depósito",         valor: 2.49,  seção: 40 },
  { id: 240, nome: "Régua 30cm",                     valor: 2.99,  seção: 40 },
  { id: 341, nome: "Caneta Esferográfica Vermelha",  valor: 2.49,  seção: 40 },

  // Seção 41 — Papelaria
  { id: 103, nome: "Lápis Preto HB",                 valor: 1.99,  seção: 41 },
  { id: 104, nome: "Caderno Universitário 10 matérias", valor: 24.90, seção: 41 },
  { id: 241, nome: "Estojo Escolar Simples",         valor: 14.90, seção: 41 },
  { id: 242, nome: "Cola Bastão Pritt 20g",          valor: 4.49,  seção: 41 },
  { id: 243, nome: "Marca-texto Amarelo Stabilo",    valor: 5.99,  seção: 41 },
  { id: 342, nome: "Lápis de Cor (12un)",            valor: 12.90, seção: 41 },

  // Seção 42 — Eletrônicos e Acessórios
  { id: 244, nome: "Carregador USB Turbo",           valor: 29.90, seção: 42 },
  { id: 245, nome: "Fone de Ouvido com Fio",         valor: 19.90, seção: 42 },
  { id: 343, nome: "Cabo USB-C 1m",                  valor: 14.90, seção: 42 },

  // Seção 43 — Bebês
  { id: 105, nome: "Fralda Pampers M 32 unidades",   valor: 39.90, seção: 43 },
  { id: 106, nome: "Lenço Umedecido Huggies 48 unidades", valor: 9.99, seção: 43 },
  { id: 246, nome: "Chupeta Ortodôntica NUK",        valor: 19.90, seção: 43 },
  { id: 247, nome: "Mamadeira Avent 260ml",          valor: 34.90, seção: 43 },
  { id: 248, nome: "Talco Infantil Johnson's 200g",  valor: 9.99,  seção: 43 },
  { id: 344, nome: "Fralda Huggies P 40 unidades",   valor: 37.90, seção: 43 },

  // Seção 44 — Alimentação Infantil
  { id: 107, nome: "Fórmula Infantil Nestogeno 800g", valor: 42.90, seção: 44 },
  { id: 249, nome: "Papinha Nestlé Sachê 120g",      valor: 4.99,  seção: 44 },
  { id: 250, nome: "Suco Infantil Danoninho (pacote)", valor: 8.49, seção: 44 },
  { id: 345, nome: "Bolacha Infantil Mucilon 200g",  valor: 8.99,  seção: 44 },

  // Seção 45 — Jardinagem
  { id: 251, nome: "Terra Adubada Saco 5kg",         valor: 12.90, seção: 45 },
  { id: 252, nome: "Vaso de Planta Médio",           valor: 24.90, seção: 45 },
  { id: 253, nome: "Adubo Orgânico 1kg",             valor: 9.99,  seção: 45 },
  { id: 346, nome: "Sementes de Grama (pacote)",     valor: 8.99,  seção: 45 },

  // Seção 46 — Aquarismo
  { id: 108, nome: "Ração para Peixes 100g",         valor: 8.49,  seção: 46 },
  { id: 254, nome: "Filtro para Aquário Pequeno",    valor: 49.90, seção: 46 },
  { id: 255, nome: "Termômetro para Aquário",        valor: 8.99,  seção: 46 },

  // Seção 47 — Churrasco
  { id: 109, nome: "Carvão Vegetal 3kg",             valor: 14.99, seção: 47 },
  { id: 256, nome: "Sal Grosso 1kg",                 valor: 4.99,  seção: 47 },
  { id: 257, nome: "Espeto de Churrasco (kit 6un)",  valor: 9.99,  seção: 47 },
  { id: 347, nome: "Carvão em Briquete 2kg",         valor: 17.90, seção: 47 },

  // Seção 48 — Utilidades / Automotivo
  { id: 110, nome: "Fósforo Extra Longo 40 unidades", valor: 4.49, seção: 48 },
  { id: 258, nome: "Vela Branca (pacote 4un)",       valor: 6.49,  seção: 48 },
  { id: 259, nome: "Isqueiro Bic",                   valor: 3.99,  seção: 48 },
  { id: 260, nome: "Óleo Lubrificante Motor 1L",     valor: 39.90, seção: 48 },
  { id: 261, nome: "Aditivo de Radiador 1L",         valor: 24.90, seção: 48 },
  { id: 348, nome: "Água para Radiador 1L",          valor: 9.99,  seção: 48 },

];