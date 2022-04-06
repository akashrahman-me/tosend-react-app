import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import heroImage from '../../../images/image 2.png'

function Hero() {
	return (
		<Box component="main" sx={{ py: '30px', px: 3 }}>
			<Grid
				container
				columns={2}
				sx={{
					minHeight: 'calc(100vh - 100px)',
					alignItems: 'center',
					flexDirection: { xs: 'column-reverse', md: 'row' },
				}}
				spacing={{ md: '74px', xs: '30px' }}
			>
				<Grid
					item
					xs={2}
					md={1}
					sx={{ textAlign: { xs: 'cneter', md: 'left' } }}
				>
					<Typography
						fontSize="60px"
						lineHeight="135%"
						marginBottom="21px"
						color="#000"
					>
						Seek shelter <br />
						offer shelter
					</Typography>
					<Typography
						fontSize="20px"
						lineHeight="154%"
						color="#5C5C5C"
						marginBottom="30px"
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy
						text ever since the 1500s.
					</Typography>

					<Stack direction="row" spacing={'60px'}>
						<Button
							color="primary"
							sx={{
								fontSize: '14px',
								lineHeight: '21px',
								fontWeight: '500',
								py: '10px',
								px: '58px',
								borderRadius: '999px',
								boxShadow: 'none',
							}}
							variant="contained"
						>
							OFFER
						</Button>
						<Button
							color="primary"
							sx={{
								fontSize: '14px',
								lineHeight: '21px',
								fontWeight: '500',
								py: '10px',
								px: '58px',
								borderRadius: '999px',
								boxShadow: 'none',
							}}
							variant="contained"
						>
							OFFER
						</Button>
					</Stack>
				</Grid>
				<Grid item xs={2} md={1}>
					<img
						width="100%"
						style={{ maxWidth: 600, display: 'block', marginLeft: 'auto' }}
						src={heroImage}
						alt="hero image"
					/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Hero
