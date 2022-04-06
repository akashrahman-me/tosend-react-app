import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../images/Group 3.svg'
import flag from '../../images/image 5.png'
import { Link } from 'react-router-dom'

export default function ButtonAppBar({ renderButton }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ boxShadow: 'none' }}>
				<Toolbar
					sx={{
						backgroundColor: 'white',
						color: 'black',
						justifyContent: 'space-between',
						py: '14px',
					}}
				>
					<Box>
						<Link to="/">
							<img src={logo} alt="LOGO" height={47} />
						</Link>
					</Box>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						<img src={flag} alt="flag" height={43} />
					</Box>

					<Stack spacing={0} direction="row">
						{renderButton}
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
