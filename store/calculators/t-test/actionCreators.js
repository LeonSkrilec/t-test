import {
  SET_NUMBER_OF_SAMPLES,
  SET_PROPORTIONS_OR_MEANS,
  SET_CALCULATOR_ERROR,
  SET_SAMPLE_DATA
} from './actionTypes';

const setNumberOfSamples = numberOfSamples => {
  // TODO: Validation? Is param really a number? Is it a whole number?
  // IDEA: If error, return different type of action - error action which will set an error on this calculator.
  // Some error component will then render depending on the error state.
  return {
    type: SET_NUMBER_OF_SAMPLES,
    numberOfSamples
  };
};

const setCalculationSubject = proportionsOrMeans => {
  // TODO: Validation? Is param really a string representing proprotions or means
  return {
    type: SET_PROPORTIONS_OR_MEANS,
    calculationSubject: proportionsOrMeans
  };
};

const setCalculatorError = errorObject => {
  return {
    type: SET_CALCULATOR_ERROR,
    errorObject
  };
};

const setSampleData = ({ sampleIndex, property, value }) => {
  return {
    type: SET_SAMPLE_DATA,
    sampleIndex,
    property,
    value
  };
};

export {
  setNumberOfSamples,
  setCalculationSubject,
  setCalculatorError,
  setSampleData
};
