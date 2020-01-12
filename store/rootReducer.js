import { combineReducers } from 'redux';
import calculatorList from './app/calculatorList';
import calculators from './calculators/reducer';

export default combineReducers({
  calculatorList,
  calculators
});
