import PropTypes from 'prop-types';
import Page404 from '../components/404';
import AppLayout from '../layouts/AppLayout';
import ttest from './t-test/Root';
import descriptives from './descriptives/Root';
import samplesize from './sample-size/Root';
import deltaSampleSize from './delta-sample-size/Root';

const CalculatorRoot = props => {
  const calculatorNameToComponentMap = {
    't-test': ttest,
    'opisne-statistike': descriptives,
    'velikost-vzorca': samplesize,
    'odkrivanje-razlik': deltaSampleSize
  };

  const CalculatorRootComponent = calculatorNameToComponentMap[props.name] || Page404;

  return (
    <AppLayout>
      <CalculatorRootComponent step={props.step}></CalculatorRootComponent>
    </AppLayout>
  );
};

CalculatorRoot.propTypes = {
  name: PropTypes.string.isRequired,
  step: PropTypes.string
};

export default CalculatorRoot;
