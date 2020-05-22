import jStat from 'jstat';

export async function calculate({ number_of_samples, proportions_or_means, data, options }) {
  console.log('calculating ...');
  console.log(number_of_samples, proportions_or_means, data, options);

  return new Promise(resolve => {
    let results = {};

    if (proportions_or_means === 'means') {
      if (number_of_samples === 2) {
        results.tValue = twoSamplesMeans(
          data.samples[0],
          data.samples[1],
          options.equal_variances,
          options.paired_samples
        );
      } else {
        results.tValue = oneSampleMeans(data.samples[0], data.hypothetical_mean);
      }
    } else {
      if (number_of_samples === 2) {
        results.tValue = twoSamplesProportions(data.samples[0], data.samples[1]);
      } else {
        results.tValue = oneSampleProportions(data.samples[0], data.hypothetical_proportion);
      }
    }

    const degrees_of_freedom =
      number_of_samples === 2
        ? data.samples[0].number_of_units + data.samples[1].number_of_units
        : data.samples[0].number_of_units;

    // Get p-value from t-value
    results.pValue = calculatePvalue(results.tValue, degrees_of_freedom, options.two_tailed ? 2 : 1);
    resolve(results);
  });
}

/**
 * Calculates area under students t distribution given t-Value
 */

function calculatePvalue(tValue, degrees_of_freedom, sides = 2) {
  const p = jStat.ttest(tValue, degrees_of_freedom, sides);
  console.log('p', p);
  return p;
}

function twoSamplesMeans(sample_1_data, sample_2_data, equal_variances) {
  const u1 = sample_1_data.mean;
  const u2 = sample_2_data.mean;
  const n1 = sample_2_data.number_of_units;
  const n2 = sample_2_data.number_of_units;
  const v1 = sample_1_data.variance;
  const v2 = sample_2_data.variance;

  if (equal_variances) {
    // Normal independent samples studnets t-test
    const weightedVariance = ((n1 - 1) * v1 + (n2 - 1) * v2) / (n1 + n2 - 2);
    return (u1 - u2) / Math.sqrt(weightedVariance * (1 / n1 + 1 / n2));
  } else {
    // Welchs t-test
    return (u1 - u2) / Math.sqrt(v1 / n1 + v2 / n2);
  }
}

/**
 * SE = sqrt{ p * ( 1 - p ) * [ (1/n1) + (1/n2) ] }
 *
 * @param {*} sample_1_data
 * @param {*} sample_2_data
 * @param {*} two_tailed
 * @param {*} equal_variances
 * @param {*} paired_samples
 */
function twoSamplesProportions(sample_1_data, sample_2_data) {
  const p1 = sample_1_data.proportion / 100;
  const p2 = sample_2_data.proportion / 100;

  const SE1 = Math.sqrt((p1 * (1 - p1)) / sample_1_data.number_of_units);
  const SE2 = Math.sqrt((p2 * (1 - p2)) / sample_2_data.number_of_units);
  const combinedSE = Math.sqrt(Math.pow(SE1, 2) + Math.pow(SE2, 2));
  return (p1 - p2) / combinedSE;
}

/**
 * One sample mean test. We compare sample mean to hypothetical mean
 * Returns t-value which can be used to get p-value which would tell if means are significantly different
 */
function oneSampleMeans(sampleData, hypothetical_mean) {
  const sampleMean = sampleData.mean;
  const sd = Math.sqrt(sampleData.variance);
  const rootN = Math.sqrt(sampleData.number_of_units);
  // Returning the t value
  return (sampleMean - hypothetical_mean) / (sd / rootN);
}

/**
 * http://sphweb.bumc.bu.edu/otlt/MPH-Modules/BS/SAS/SAS6-CategoricalData/SAS6-CategoricalData2.html
 * SE = sqrt{ p * ( 1 - p ) / n}
 * t-test = p - hypothetical_proportion / SE
 * @param {*} sampleData
 * @param {*} hypothetical_proportion
 */
function oneSampleProportions(sampleData, hypothetical_proportion) {
  const p = sampleData.proportion / 100;
  const p0 = hypothetical_proportion / 100;
  const q = 1 - p;
  const SE = Math.sqrt((p * q) / sampleData.number_of_units);
  return (p - p0) / SE;
}
