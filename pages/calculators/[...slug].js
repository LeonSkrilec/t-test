import Ttest from '../../calculators/t-test/Index';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import Page404 from '../../components/404';

const DynamicCalculator = () => {
  // Dynamic calculator routing
  // We match everything after /calculators/{}/{}; Example: /calculators/t-test/intro
  // Every {} is an entry in router.query array
  // We load appropriate component based on route and pass sub-page to calculator
  // So each calculator is responsible for internal routing. Is this optimal?

  const calculatorMap = {
    't-test': Ttest
  };

  // Would you abstract routing away and just expose routing methods to calculators?
  const router = useRouter();

  const { slug } = router.query;
  // Slug can be either array or string.
  let calculatorName, calculatorPage;
  if (typeof slug === 'object') {
    calculatorName = slug[0];
    calculatorPage = slug[1];
  } else {
    calculatorName = slug;
    calculatorPage = '';
  }

  const ComponentToRender = calculatorMap[calculatorName] || Page404;

  return (
    <Container>
      <ComponentToRender page={calculatorPage}></ComponentToRender>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    calculatorsList: state.calculatorList
  };
};

export default connect(mapStateToProps)(DynamicCalculator);
