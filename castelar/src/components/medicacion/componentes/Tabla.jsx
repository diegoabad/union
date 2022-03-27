import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import data from '../../datos/vademecum.json'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'beige',
    color: theme.palette.common.black,
    fontSize: 'medium'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Tabla(props) {

  const { rows, handleChange, name, label } = props;
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Medicación</StyledTableCell>
            <StyledTableCell align="center">Tipo</StyledTableCell>
            <StyledTableCell align="center">Presentación</StyledTableCell>
            <StyledTableCell align="center">Horarios</StyledTableCell>
            <StyledTableCell align="center">Periodicidad</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{data[row.index].Descripcion}</StyledTableCell>
              <StyledTableCell align="center">{data[row.index].Forma}</StyledTableCell>
              <StyledTableCell align="center">{data[row.index].Presentacion}</StyledTableCell>
              <StyledTableCell align="center">{row.horarios.map(item => item + ', ')}</StyledTableCell>
              <StyledTableCell align="center">{row.periodicidad}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}