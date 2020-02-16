import initalState from './initialState';
import {
  SET_NUMBER_OF_SAMPLES,
  SET_PROPORTIONS_OR_MEANS,
  SET_CALCULATOR_ERROR,
  SET_SAMPLE_DATA,
  SET_OPTIONS,
  SET_STEP_COMPLETED
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
    case SET_SAMPLE_DATA: {
      if (action.sampleIndex) {
        // We are updating state.samples array
        let updatedSamplesData = [...state.samples];
        updatedSamplesData[action.sampleIndex][action.property] = action.value;
        return { ...state, samples: updatedSamplesData };
      } else {
        // We are updating either hypothetical_mean or hypothetical_proportion (action.property)
        return { ...state, [action.property]: action.value };
      }
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
    // action.step is step object on which we have to set completed property

    default:
      // Actions that begin with @ are internal REDUX actions that gets called when initializing the store
      action.type[0] !== '@' &&
        console.warn(
          `Unknown action in /calculators/t-test reducer: ${action.type}. Returning default state ...`
        );
      return state;
  }
}
