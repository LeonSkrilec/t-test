export default {
  // THIS DATA IS CURRENTLY NOT USED ANYWHERE
  baseFolder: '/calculators',
  list: [
    {
      name: 't-test',
      slug: 't-test',
      title: 'Studentov t-test',
      category: 'Statistično sklepanje',
      description:
        'Preverite ali se vzorčna in hipotetična vrednost statistično značilno razlikujeta.',
      author: {
        image: require(`../assets/images/authors/leon.jpeg`),
        name: 'Leon Škrilec'
      }
    },
    {
      name: 'opisne-statistike',
      slug: 'opisne-statistike',
      title: 'Kalkulator opisnih statistik',
      category: 'Opisne statistike',
      description:
        'Hitro izračunajte povprečje, modus, mediano, kvartile, minumum in maximum.',
      author: {
        image: require(`../assets/images/authors/leon.jpeg`),
        name: 'Leon Škrilec'
      }
    }
  ]
};
