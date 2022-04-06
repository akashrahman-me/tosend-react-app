import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	typography: {
		fontFamily: `'Poppins', sans-serif`,
	},
	palette: {
		primary: {
			main: '#2488FF',
		},
		error: {
			main: '#DE5A5A',
		},
		success: {
			main: '#43BA56',
		},
	},
})

export default theme
