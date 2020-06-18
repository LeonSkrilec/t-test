export default {
  // THIS DATA IS CURRENTLY NOT USED ANYWHERE
  baseFolder: '/kalkulatorji',
  list: [
    {
      name: 't-test',
      slug: 't-test',
      enabled: true,
      shown: true,
      title: 'Studentov t-test',
      category: 'Statistično sklepanje',
      description: 'Preverite ali se vzorčna in hipotetična vrednost statistično značilno razlikujeta.',
      author: {
        image: require(`../assets/images/authors/leon.jpeg`),
        name: 'Leon Škrilec'
      }
    },
    {
      name: 'velikost-vzorca',
      slug: 'velikost-vzorca',
      enabled: true,
      shown: true,
      title: 'Izračun velikosti vzorca',
      category: 'Vzorčenje',
      description: 'Kako velik vzorec potrebujem za svojo raziskavo?',
      author: {
        image: require(`../assets/images/authors/leon.jpeg`),
        name: 'Leon Škrilec'
      }
    },
    {
      name: 'opisne-statistike',
      slug: 'opisne-statistike',
      enabled: false,
      shown: true,
      title: 'Kalkulator opisnih statistik',
      category: 'Opisne statistike',
      description: 'Hitro izračunajte povprečje, modus, mediano, kvartile, minumum in maximum.',
      author: {
        image: require(`../assets/images/authors/leon.jpeg`),
        name: 'Leon Škrilec'
      }
    }
  ]
};
