import { useRouter } from 'next/router';
import CalculatorBase from '../../../components/Calculators/Base';

export default function Base() {
  const router = useRouter();
  const { name } = router.query;

  return <CalculatorBase name={name}></CalculatorBase>;
}
