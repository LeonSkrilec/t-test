import { combineReducers } from 'redux';
import application from './application';
import calculators from './calculators/reducer';

export default combineReducers({
  application,
  calculators
});
