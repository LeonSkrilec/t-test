import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const getInputDataRows = (number_of_samples, data, proportions_or_means, results, two_tailed) => {
  let rows = [
    {
      name: 'n',
      columns: [
        {
          value: '<strong>Število enot</strong>'
        },
        {
          value: `n<sub>1</sub> = ${data.samples[0].number_of_units}`,
          align: 'right'
        },
        {
          value: number_of_samples === 2 ? `n<sub>2</sub>  = ${data.samples[1].number_of_units}` : '',
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
          { value: '<strong>Povprečje</strong>' },
          { value: `μ<sub>1</sub> = ${data.samples[0].mean}`, align: 'right' },
          {
            value: number_of_samples === 2 ? `μ<sub>2</sub> = ${data.samples[1].mean}` : data.hypothetical_mean,
            align: 'right'
          }
        ]
      },
      {
        name: 'variance',
        columns: [
          { value: '<strong>Varianca</strong>' },
          { value: `s<sub>1</sub> = ${data.samples[0].variance}`, align: 'right' },
          {
            value: number_of_samples === 2 ? `s<sub>2</sub> = ${data.samples[1].variance}` : '',
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
          { value: '<strong>Delež</strong>' },
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
        { value: `<strong>${results.tValue.toFixed(3)}</strong>`, variant: 'head' }
      ]
    },
    {
      name: 'p-value',
      columns: [
        { value: 'p vrednost', span: 2, align: 'right', variant: 'head' },
        {
          value: two_tailed
            ? `<strong>${results.pValue.toFixed(3)}</strong>`
            : `<strong>${(results.pValue / 2).toFixed(3)}</strong>`,
          variant: 'head'
        }
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">
              <strong>Vzorec 1</strong>
            </TableCell>
            <TableCell align="right">
              {props.number_of_samples === 1 ? <strong>Vrednost</strong> : <strong>Vzorec 2</strong>}
            </TableCell>
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
                  <span dangerouslySetInnerHTML={{ __html: col.value }}></span>
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
