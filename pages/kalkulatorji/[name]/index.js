import { useRouter } from 'next/router';
import CalculatorRoot from '../../../calculators/Root';

export default function Base() {
  const router = useRouter();
  const { name } = router.query;

  return <CalculatorRoot name={name}></CalculatorRoot>;
}
