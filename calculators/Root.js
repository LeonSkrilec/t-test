import PropTypes from 'prop-types';
import Page404 from '../components/404';
import ttest from './t-test/Root';
import AppLayout from '../layouts/AppLayout';

const CalculatorRoot = props => {
  const calculatorNameToComponentMap = {
    't-test': ttest
  };

  const CalculatorRootComponent =
    calculatorNameToComponentMap[props.name] || Page404;

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
