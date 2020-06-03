import { useRouter } from 'next/router';
import CalculatorRoot from '../../../calculators/Root';

export default function Base() {
  const router = useRouter();
  const { name, step } = router.query;

  return <CalculatorRoot name={name} step={step}></CalculatorRoot>;
}
