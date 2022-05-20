import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1E90FF',
    color: theme.palette.common.white,
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

  const { rows, handleDeleteTable, deleteOnTable } = props;
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Medicación</StyledTableCell>
            <StyledTableCell align="center">Miligramos</StyledTableCell>
            <StyledTableCell align="center">7:00</StyledTableCell>
            <StyledTableCell align="center">8:00</StyledTableCell>
            <StyledTableCell align="center">12:00</StyledTableCell>
            <StyledTableCell align="center">16:00</StyledTableCell>
            <StyledTableCell align="center">20:00</StyledTableCell>
            {deleteOnTable && <StyledTableCell align="center">Eliminar</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => ( 
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.medicacion}</StyledTableCell>
              <StyledTableCell align="center">{row.miligramos}</StyledTableCell>
              <StyledTableCell align="center">{row.siete}</StyledTableCell> 
              <StyledTableCell align="center">{row.ocho}</StyledTableCell>
              <StyledTableCell align="center">{row.doce}</StyledTableCell>
              <StyledTableCell align="center">{row.dieciseis}</StyledTableCell>
              <StyledTableCell align="center">{row.veinte}</StyledTableCell>
              {deleteOnTable && <StyledTableCell align="center"> 
                <Button className={classes.root} onClick={(e) => handleDeleteTable(e, index)} color= 'primary'>
                  <DeleteIcon style={{fontSize: 30, color: red[500]}}/>
                </Button>
              </StyledTableCell>}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}