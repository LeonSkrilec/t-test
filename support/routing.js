import Router from 'next/router';

export function changeCalculatorStep(calculatorName, step) {
  Router.push(
    `/calculators/[name]/[step]`,
    `/calculators/${calculatorName}/${step}`
  );
}
