'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#19D079',
			light: '#57e199',
			dark: '#128c59',
			contrastText: '#ffffff'
		},
	},
	typography: {
		fontFamily: 'var(--font-roboto)',
	},
	cssVariables: true,
});

export default theme;