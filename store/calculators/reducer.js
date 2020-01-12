import { combineReducers } from 'redux';
import ttest from './t-test/reducer';

export default combineReducers({
  't-test': ttest
});
