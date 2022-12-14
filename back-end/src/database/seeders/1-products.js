module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Skol Lata 250ml',
      price: 2.20,
      url_image: `${IMG_URL}/images/skol_lata_350ml.jpg`,
    },
    {
      name: 'Heineken 600ml',
      price: 7.50,
      url_image: `${IMG_URL}/images/heineken_600ml.jpg`,
    },
    {
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      url_image: `${IMG_URL}/images/antarctica_pilsen_300ml.jpg`,
    },
    {
      name: 'Brahma 600ml',
      price: 7.50,
      url_image: `${IMG_URL}/images/brahma_600ml.jpg`,
    },
    {
      name: 'Skol 269ml',
      price: 2.19,
      url_image: `${IMG_URL}/images/skol_269ml.jpg`,
    },
    {
      name: 'Skol Beats Senses 313ml',
      price: 4.49,
      url_image: `${IMG_URL}/images/skol_beats_senses_313ml.jpg`,
    },
    {
      name: 'Becks 330ml',
      price: 4.99,
      url_image: `${IMG_URL}/images/becks_330ml.jpg`,
    },
    {
      name: 'Brahma Duplo Malte 350ml',
      price:2.79,
      url_image: `${IMG_URL}/images/brahma_duplo_malte_350ml.jpg`,
    },
    {
      name: 'Becks 600ml',
      price: 8.89,
      url_image: `${IMG_URL}/images/becks_600ml.jpg`,
    },
    {
      name: 'Skol Beats Senses 269ml',
      price: 3.57,
      url_image: `${IMG_URL}/images/skol_beats_senses_269ml.jpg`,
    },
    {
      name: 'Stella Artois 275ml',
      price: 3.49,
      url_image: `${IMG_URL}/images/stella_artois_275ml.jpg`
    },
    
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};

// info base
// (4, ' Brahma 600ml',7.50, 'http://localhost:3001/images/brahma_600ml.jpg'),
// (5, ' Skol 269ml',2.19, 'http://localhost:3001/images/skol_269ml.jpg'),
// (6, ' Skol Beats Senses 313ml',4.49, 'http://localhost:3001/images/skol_beats_senses_313ml.jpg'),
// (7, ' Becks 330ml',4.99, 'http://localhost:3001/images/becks_330ml.jpg'),
// (8, ' Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'),
// (9, ' Becks 600ml',8.89, 'http://localhost:3001/images/becks_600ml.jpg'),
// (10, 'Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/skol_beats_senses_269ml.jpg'),
// (11, 'Stella Artois 275ml',3.49, 'http://localhost:3001/images/stella_artois_275ml.jpg');