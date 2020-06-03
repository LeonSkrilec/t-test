import Router from 'next/router';

export function changeCalculatorStep(calculatorName, step) {
  Router.push(`/kalkulatorji/[name]/[step]`, `/kalkulatorji/${calculatorName}/${step}`);
}
