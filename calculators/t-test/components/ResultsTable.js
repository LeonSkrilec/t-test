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

function ResultsTable(props) {
  const rows = [
    {
      name: 't',
      value: props.results.tValue
    },
    {
      name: 'p',
      value: props.results.pValue
    }
  ];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Input table">
        <TableHead>
          <TableRow>
            <TableCell>Statistika</TableCell>
            <TableCell>Vrednost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="right">
                {row.name}
              </TableCell>
              <TableCell>
                <strong>{row.value.toFixed(2)}</strong>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ResultsTable.propTypes = {
  results: PropTypes.object.isRequired
};

export default ResultsTable;
