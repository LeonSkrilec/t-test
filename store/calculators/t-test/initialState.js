export default {
  error: { text: '', type: '' },
  number_of_samples: null, // 1 or 2
  proportions_or_means: null, // Can be either "means" or "proportions"
  data: {
    samples: [
      {
        number_of_units: null, // Positive Integer
        mean: null, // Decimal number
        variance: null, // Positive Decimal number
        proportion: null // Decimal number between 0 and 100
      }
    ],
    hypothetical_mean: null, // Decimal number
    hypothetical_proportion: null // Decimal number
  },
  options: {
    equal_variances: true,
    two_tailed: true,
    significance: 0.05
  },
  steps: [
    {
      name: 'intro',
      subtitle: 'Teoretska izhodišča',
      completed: true,
      active: false
    },
    {
      name: 'subject',
      subtitle: 'Začetne nastavitve',
      completed: false,
      active: false
    },
    {
      name: 'data',
      subtitle: 'Vhodni podatki',
      completed: false,
      active: false
    },
    {
      name: 'results',
      subtitle: 'Rezultati in interpretacija',
      completed: false,
      active: false
    }
  ],
  results: {
    t_value: null,
    p_value: null
  }
};
