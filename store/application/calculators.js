const calculators = {
  // THIS DATA IS CURRENTLY NOT USED ANYWHERE
  baseFolder: '/kalkulatorji',
  list: [
    {
      name: 't-test',
      slug: 't-test',
      title: 'Studentov t-test',
      category: 'Statistično sklepanje',
      description: 'Preverite ali se vzorčna in hipotetična vrednost statistično značilno razlikujeta.',
      author: {
        image: '/assets/images/leon.jpeg'
      }
    },
    {
      name: 'opisne-statistike',
      slug: 'opisne-statistike',
      title: 'Kalkulator opisnih statistik',
      category: 'Opisne statistike',
      description: 'Hitro izračunajte povprečje, modus, mediano, kvartile, minumum in maximum.'
    }
  ]
};

export default function calulators(state = calculators, action) {
  // Currently we will not have any actions here
  // We are just setting initial state to calculator list
  // Maybe we can have GetCalculators
  switch (action.type) {
    default:
      return state;
  }
}
