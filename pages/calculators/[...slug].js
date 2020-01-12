import Calculator from '../../calculators/t-test/Index';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';

const DynamicCalculator = () => {
  // Dynamic calculator routing
  // We match everything after /calculators/{}/{}; Example: /calculators/t-test/intro
  // Every {} is an entry in router.query array
  // We load appropriate component based on route and pass sub-page to calculator
  // So each calculator is responsible for internal routing. Is this optimal?

  // Would you abstract routing away and just expose routing methods to calculators?

  const router = useRouter();
  const { slug } = router.query;

  return (
    <Container>
      <Calculator page={slug[1]}></Calculator>
    </Container>
  );
};

export default DynamicCalculator;
