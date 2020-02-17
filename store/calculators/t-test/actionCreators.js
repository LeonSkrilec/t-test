import {
  SET_NUMBER_OF_SAMPLES,
  SET_PROPORTIONS_OR_MEANS,
  SET_CALCULATOR_ERROR,
  SET_CALCULATION_DATA,
  SET_OPTIONS,
  SET_STEP_COMPLETED,
  SET_RESULTS
} from './actionTypes';

const setNumberOfSamples = numberOfSamples => {
  // IDEA: If error, return different type of action - error action which will set an error on this calculator.
  // Some error component will then render depending on the error state.
  return {
    type: SET_NUMBER_OF_SAMPLES,
    numberOfSamples
  };
};

const setCalculationSubject = proportionsOrMeans => {
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

const setCalculationData = data => {
  return {
    type: SET_CALCULATION_DATA,
    data
  };
};

const setOptions = options => {
  return {
    type: SET_OPTIONS,
    options
  };
};

const setStepCompleted = step => {
  return {
    type: SET_STEP_COMPLETED,
    step
  };
};

const setResults = results => {
  return {
    type: SET_RESULTS,
    results
  };
};

export {
  setNumberOfSamples,
  setCalculationSubject,
  setCalculatorError,
  setCalculationData,
  setOptions,
  setStepCompleted,
  setResults
};
