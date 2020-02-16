export default {
  error: { text: '', type: '' },
  number_of_samples: null, // 1 or 2
  proportions_or_means: null, // Can be either "means" or "proportions"
  samples: [
    {
      number_of_units: null, // Positive Integer
      mean: null, // Decimal number
      variance: null, // Positive Decimal number
      proportion: null // Decimal number between 0 and 100
    },
    {
      number_of_units: null,
      mean: null,
      variance: null,
      proportion: null
    }
  ],
  hypothetical_mean: null, // Decimal number
  hypothetical_proportion: null, // Decimal number
  options: {
    equal_variances: true,
    paired_samples: false,
    significance: 0.05,
    two_tailed: true
  },
  steps: [
    {
      name: 'intro',
      completed: true,
      componentName: 'Intro',
      active: false
    },
    {
      name: 'subject',
      completed: false,
      componentName: 'Subject',
      active: false
    },
    {
      name: 'data',
      completed: false,
      componentName: 'Data',
      active: false
    },
    {
      name: 'options',
      completed: false,
      componentName: 'Data',
      active: false
    },
    {
      name: 'results',
      completed: false,
      componentName: 'Data',
      active: false
    }
  ],
  results: {
    t_value: null
  }
};
