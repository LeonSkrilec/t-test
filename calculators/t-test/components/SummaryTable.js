import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const getInputDataRows = (number_of_samples, data, proportions_or_means, results, two_tailed) => {
  let rows = [
    {
      name: 'n',
      columns: [
        {
          value: 'Število enot'
        },
        {
          value: data.samples[0].number_of_units,
          align: 'right'
        },
        {
          value: number_of_samples === 2 ? data.samples[1].number_of_units : '',
          align: 'right'
        }
      ]
    }
  ];

  if (proportions_or_means === 'means') {
    rows = [
      ...rows,
      {
        name: 'mean',
        columns: [
          { value: 'Povprečje' },
          { value: data.samples[0].mean, align: 'right' },
          {
            value: number_of_samples === 2 ? data.samples[1].mean : data.hypothetical_mean,
            align: 'right'
          }
        ]
      },
      {
        name: 'variance',
        columns: [
          { value: 'Varianca' },
          { value: data.samples[0].variance, align: 'right' },
          {
            value: number_of_samples === 2 ? data.samples[1].variance : '',
            align: 'right'
          }
        ]
      }
    ];
  } else {
    rows = [
      ...rows,
      {
        name: 'proportions',
        columns: [
          { value: 'Delež' },
          { value: data.samples[0].proportion, align: 'right' },
          {
            value: number_of_samples === 2 ? data.samples[1].proportion : data.hypothetical_proportion,
            align: 'right'
          }
        ]
      }
    ];
  }

  rows = [
    ...rows,
    {
      name: 't-value',
      columns: [
        {
          value: 't vrednost',
          span: 2,
          align: 'right',
          variant: 'head'
        },
        { value: results.tValue.toFixed(3), variant: 'head' }
      ]
    },
    {
      name: 'p-value',
      columns: [
        { value: 'p vrednost', span: 2, align: 'right', variant: 'head' },
        { value: two_tailed ? results.pValue.toFixed(3) : (results.pValue / 2).toFixed(3), variant: 'head' }
      ]
    }
  ];

  return rows;
};

function SummaryTable(props) {
  // TODO: Create input rows.
  const rows = getInputDataRows(
    props.number_of_samples,
    props.data,
    props.proportions_or_means,
    props.results,
    props.two_tailed
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Input table">
        <TableHead>
          <TableRow>
            <TableCell>Podatek</TableCell>
            <TableCell align="right">Vzorec 1</TableCell>
            <TableCell align="right">{props.number_of_samples === 1 ? 'Vrednost' : 'Vzorec 2'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              {row.columns.map((col, index) => (
                <TableCell
                  key={row.name + index}
                  component="th"
                  scope="row"
                  colSpan={col.span || 1}
                  align={col.align || 'left'}
                  variant={col.variant || 'body'}
                >
                  {col.value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

SummaryTable.propTypes = {
  data: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
  number_of_samples: PropTypes.number.isRequired,
  proportions_or_means: PropTypes.string.isRequired,
  two_tailed: PropTypes.bool.isRequired
};

export default SummaryTable;
