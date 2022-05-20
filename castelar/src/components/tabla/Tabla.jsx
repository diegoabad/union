import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TouchAppRoundedIcon from '@material-ui/icons/TouchAppRounded';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#1E90FF',
		color: theme.palette.common.white,
		fontSize: 'medium',
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
	const { rows, handleClick } = props;

	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='center'>Nombre</StyledTableCell>
						<StyledTableCell align='center'>Apellido</StyledTableCell>

						<StyledTableCell align='center'>DNI</StyledTableCell>
						<StyledTableCell align='center'>
							Nº Asoc. Obra Social
						</StyledTableCell>
						<StyledTableCell align='center'>seleccionar</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<StyledTableRow key={index}>
							<StyledTableCell align='center'>{row.nombre}</StyledTableCell>
							<StyledTableCell align='center'>{row.apellido}</StyledTableCell>

							<StyledTableCell align='center'>{row.id}</StyledTableCell>
							<StyledTableCell align='center'>
								{row.nro_afiliado}
							</StyledTableCell>
							<StyledTableCell align='center'>
								<Button onClick={() => handleClick(row.id)}>
									<TouchAppRoundedIcon />
								</Button>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
