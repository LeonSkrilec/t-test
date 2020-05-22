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
          Vzorčni aritmetični sredini se {reject ? '' : 'ne'} razlikujeta statistično značilno.
        </Typography>
      )}
      {samples === 2 && statistic === 'proportions' && (
        <Typography variant="body1">
          Vzorčna deleža se {reject ? '' : 'ne'} razlikujeta statistično značilno.
        </Typography>
      )}

      {samples === 1 && statistic === 'means' && (
        <Typography variant="body1">
          Vzorčna aritmetična sredina se {reject ? '' : 'ne'} razlikuje statistično značilno od hipotetične vrednosti.
        </Typography>
      )}
      {samples === 1 && statistic === 'proportions' && (
        <Typography variant="body1">
          Vzorčni delež se {reject ? '' : 'ne'} razlikuje statistično značilno od hipotetične vrednosti.
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
