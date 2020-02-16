const calculators = {
  // THIS DATA IS CURRENTLY NOT USED ANYWHERE
  baseFolder: '/calculators',
  list: [
    {
      name: 't-test',
      folderName: 't-test',
      rootComponentName: 'Root'
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
