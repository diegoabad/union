import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';

const Headers = ({ psiquiatria, setPsiquiatria }) => {
	return (
		<AppBar
			position='static'
			style={{ backgroundColor: '#f3efe1', color: 'black' }}
		>
			<Toolbar>
				<Grid container>
					<Grid item xs={12}>
						<h1>Evolución Psiquiatría </h1>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Headers;
