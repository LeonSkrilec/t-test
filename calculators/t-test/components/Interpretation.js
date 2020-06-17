import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function Interpretation(props) {
  const { pvalue, statistic, data, samples, significance } = props;
  const reject = pvalue < significance;

  return (
    <>
      <Typography variant="body1">
        Izračunana stopnja značilnosti p = {props.pvalue.toFixed(3)} je {reject ? 'manjša' : 'večja'} od izbrane
        signifikance α = {significance}, zato{' '}
        {reject ? 'ničelno domnevo lahko zavrnemo' : 'ničelne domneve ne moremo zavrniti'}.
      </Typography>

      {samples === 2 && statistic === 'means' && (
        <Typography variant="body1">
          Pri {significance * 100}% stopnji značilnosti se vzorčni aritmetični sredini{' '}
          <strong>{reject ? '' : 'ne'} razlikujeta </strong> statistično značilno.
        </Typography>
      )}
      {samples === 2 && statistic === 'proportions' && (
        <Typography variant="body1">
          Pri {significance * 100}% stopnji značilnosti se vzorčna deleža{' '}
          <strong>{reject ? '' : 'ne'} razlikujeta </strong> statistično značilno.
        </Typography>
      )}

      {samples === 1 && statistic === 'means' && (
        <Typography variant="body1">
          Pri {significance * 100}% stopnji značilnosti se vzorčna aritmetična sredina{' '}
          <strong>{reject ? '' : 'ne'} razlikuje </strong>
          statistično značilno od hipotetične vrednosti.
        </Typography>
      )}
      {samples === 1 && statistic === 'proportions' && (
        <Typography variant="body1">
          Pri {significance * 100}% stopnji značilnosti se vzorčni delež{' '}
          <strong>{reject ? '' : 'ne'} razlikuje </strong>statistično značilno od hipotetične vrednosti.
        </Typography>
      )}
    </>
  );
}

Interpretation.propTypes = {
  pvalue: PropTypes.number.isRequired,
  statistic: PropTypes.oneOf(['means', 'proportions']).isRequired,
  data: PropTypes.object,
  samples: PropTypes.oneOf([1, 2]),
  significance: PropTypes.number.isRequired
};

export default Interpretation;
