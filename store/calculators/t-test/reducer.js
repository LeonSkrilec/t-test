import initalState from './initialState';
import {
  SET_NUMBER_OF_SAMPLES,
  SET_PROPORTIONS_OR_MEANS,
  SET_CALCULATOR_ERROR,
  SET_CALCULATION_DATA,
  SET_OPTIONS,
  SET_STEP_COMPLETED,
  SET_RESULTS
} from './actionTypes';

export default function ttest(state = initalState, action) {
  // If state === "undefined" state will be equal to initialState. That why default argument.
  switch (action.type) {
    case SET_NUMBER_OF_SAMPLES:
      return { ...state, number_of_samples: action.numberOfSamples };
    case SET_PROPORTIONS_OR_MEANS:
      return { ...state, proportions_or_means: action.calculationSubject };
    case SET_CALCULATOR_ERROR:
      return { ...state, error: action.errorObject };
    case SET_CALCULATION_DATA: {
      return { ...state, data: { ...action.data } };
    }
    case SET_OPTIONS: {
      // We receive an object with an option. We spread this option into existing options object
      return { ...state, options: { ...state.options, ...action.options } };
    }
    case SET_STEP_COMPLETED: {
      const updatedSteps = state.steps.map(step => {
        if (step.name === action.step.name) return { ...step, completed: true };
        else return { ...step };
      });
      return { ...state, steps: [...updatedSteps] };
    }
    case SET_RESULTS: {
      return { ...state, results: { ...action.results } };
    }

    default:
      // Actions that begin with @ are internal REDUX actions that gets called when initializing the store
      action.type[0] !== '@' &&
        console.warn(
          `Unknown action in /calculators/t-test reducer: ${action.type}. Returning default state ...`
        );
      return state;
  }
}
