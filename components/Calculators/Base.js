import PropTypes from 'prop-types';
import Page404 from '../../components/404';

import ttest from '../../calculators/t-test/Root';

const CalculatorBase = props => {
  const calculatorNameToComponentMap = {
    't-test': ttest
  };

  const CalculatorRootComponent =
    calculatorNameToComponentMap[props.name] || Page404;

  return <CalculatorRootComponent step={props.step}></CalculatorRootComponent>;
};

CalculatorBase.propTypes = {
  name: PropTypes.string.isRequired,
  step: PropTypes.string
};

export default CalculatorBase;
