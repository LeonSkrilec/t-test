import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

const samplesMeans = samples => {
  if (samples.length == 2) {
    return [samples[0].mean];
  }
};

const getCalculationSubject = (proportions_or_means, number_of_samples) => {
  if (proportions_or_means === 'means') {
    return number_of_samples == 2
      ? 'Test razlike povprečji dveh vzorcev.'
      : 'Test razlike vzorčnega povprečja s hipotetičnim.';
  } else {
    return number_of_samples == 2
      ? 'Test razlike deležev dveh vzorcev.'
      : 'Test razlike vzorčnega deleža s hipotetičnim';
  }
};

const getInputRows = (number_of_samples, data, proportions_or_means) => {
  return [
    {
      name: 'predmet izračuna',
      value: getCalculationSubject(proportions_or_means, number_of_samples)
    },
    {
      name: proportions_or_means === 'means' ? 'popvrečja' : 'deleži'
    },
    {
      name: 'variance'
    },
    {
      name: 'sample size'
    }
  ];
};

function InputTable(props) {
  // TODO: Create input rows.
  const rows = getInputRows(
    props.number_of_samples,
    props.data,
    props.proportions_or_means
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Input table">
        <TableHead>
          <TableRow>
            <TableCell>Podatek</TableCell>
            <TableCell align="right">Vzorec 1</TableCell>
            <TableCell align="right">Vzorec 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" colspan={2} align="right">
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

InputTable.propTypes = {
  data: PropTypes.object.isRequired,
  number_of_samples: PropTypes.number.isRequired,
  proportions_or_means: PropTypes.string.isRequired
};

export default InputTable;
