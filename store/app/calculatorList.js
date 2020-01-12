const calculators = [
  {
    slug: 't-test',
    folder: 't-test',
    settings: 'settings',
    steps: {
      intro: {
        component: 'intro',
        order: 1
      },
      subject: {
        component: 'subject',
        order: 2
      },
      data: {
        component: 'data',
        order: 3
      },
      settings: {
        component: 'settings',
        order: 4
      }
    }
  }
];

export default function calculatorList(state = calculators, action) {
  // Currently we will not have any actions here
  // We are just setting initial state to calculator list
  // Maybe we can have GetCalculators
  switch (action.type) {
    default:
      return state;
  }
}
