const calculators = [
  {
    slug: 't-test'
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
