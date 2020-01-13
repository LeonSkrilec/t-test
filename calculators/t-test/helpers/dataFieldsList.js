// Returns correct fields list according to number of samples and caluclation subject

/*
    Rules are defined according to simple-react-validator which we will use to validate
    https://www.npmjs.com/package/simple-react-validator
*/
const fields = {
  number_of_units: {
    // Positive whole number
    value: '',
    label: 'Št. enot',
    helperText: 'Število enot v vzorcu',
    name: 'number_of_units',
    error: false,
    id: 'number_of_units',
    type: 'number', // HTML input type
    validation: {
      rules: 'required|integer|min:0,num',
      errorMessage: 'Vnesite pozitivno celo število.'
    }
  },
  mean: {
    // Decimal number
    value: '',
    type: 'number',
    label: 'Aritmetična sredina',
    name: 'mean',
    id: 'mean',
    validation: {
      rules: 'required|numeric',
      errorMessage: 'Vnesite število.'
    }
  },
  variance: {
    // Positive Decimal number
    value: '',
    type: 'number',
    label: 'Elementarna varianca',
    name: 'variance',
    id: 'variance',
    validation: {
      rules: 'required|numeric|min:0,num',
      errorMessage: 'Vnesite pozitivno število.'
    }
  },
  proportion: {
    // Decimal number between 0 and 100
    value: '',
    type: 'number',
    label: 'Delež (%)',
    name: 'proportion',
    id: 'proportion',
    helperText: 'Delež dobljen na vzorcu. Vnesi število med 0 in 100.',
    validation: {
      rules: 'required|numeric|min:0,num|max:100,num',
      errorMessage: 'Vnesite število med 0 in 100.'
    }
  },
  hypothetical_mean: {
    // Decimal number
    value: '',
    type: 'number',
    label: 'Hipotetično povprečje',
    name: 'hypothetical_mean',
    id: 'hypothetical_mean',
    helperText: 'Povprečje s katerim primerjamo vzorčno povprečje',
    validation: {
      rules: 'required|numeric',
      errorMessage: 'Vnesite število.'
    }
  },
  hypothetical_proportion: {
    // Decimal number between 0 and 100
    value: '',
    type: 'number',
    label: 'Hipotetični delež (%)',
    name: 'hypothetical_proportion',
    id: 'hypothetical_proportion',
    helperText:
      'Delež s katerim primerjamo vzorčni delež. Vnesi število med 0 in 100.',
    validation: {
      rules: 'required|numeric|min:0,num|max:100,num',
      errorMessage: 'Vnesite število med 0 in 100'
    }
  }
};

// Here we map which fields go to certain combination of means/proportions and number of samples
// We also set column property in which column should fields be placed
const fieldsMap = [
  {
    number_of_samples: 1,
    proportions_or_means: 'means',
    fields: [
      { ...fields.number_of_units, column: 0 },
      { ...fields.mean, column: 0 },
      { ...fields.variance, column: 0 },
      { ...fields.hypothetical_mean, column: 1 }
    ]
  },
  {
    number_of_samples: 2,
    proportions_or_means: 'means',
    fields: [
      { ...fields.number_of_units, column: 0 },
      { ...fields.mean, column: 0 },
      { ...fields.variance, column: 0 },
      { ...fields.number_of_units, id: 'number-of-units-1', column: 1 },
      { ...fields.mean, id: 'mean-1', column: 1 },
      { ...fields.variance, id: 'variance-1', column: 1 }
    ]
  },
  {
    number_of_samples: 1,
    proportions_or_means: 'proportions',
    fields: [
      { ...fields.number_of_units, column: 0 },
      { ...fields.proportion, column: 0 },
      { ...fields.hypothetical_proportion, column: 1 }
    ]
  },
  {
    number_of_samples: 2,
    proportions_or_means: 'proportions',
    fields: [
      { ...fields.number_of_units, column: 0 },
      { ...fields.proportion, column: 0 },
      { ...fields.number_of_units, id: 'number-of-units-1', column: 1 },
      { ...fields.proportion, id: 'proportion-1', column: 1 }
    ]
  }
];

const getFields = ({ proportions_or_means, number_of_samples }) => {
  // Which fields to return?
  return fieldsMap.find(fieldMap => {
    return (
      fieldMap.number_of_samples === number_of_samples &&
      fieldMap.proportions_or_means === proportions_or_means
    );
  });
};

export { getFields };
