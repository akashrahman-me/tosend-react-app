import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'

function Foter() {
	return (
		<Box sx={{ px: 3 }}>
			<Box sx={{ py: '80px' }}>
				<Grid container spacing={{ xs: '36px', md: '80px' }}>
					<Grid item xs={12} md={4}>
						<Typography
							fontSize="20px"
							lineHeight="32px"
							sx={{ color: '#5C5C5C' }}
						>
							Contact
						</Typography>
						<Typography
							fontSize="14px"
							fontWeight="300"
							lineHeight="1"
							sx={{ color: '#5C5C5C' }}
							marginTop="8px"
						>
							You can contact us over
						</Typography>

						<table style={{ width: '100%', maxWidth: '500px' }}>
							<tbody>
								<tr>
									<td>
										<Typography
											fontSize="14px"
											fontWeight="300"
											lineHeight="1"
											sx={{ color: '#5C5C5C' }}
											marginTop="8px"
										>
											E-mail:
										</Typography>
									</td>
									<td>
										<Typography
											fontSize="14px"
											fontWeight="300"
											lineHeight="1"
											sx={{ color: '#5C5C5C' }}
											marginTop="8px"
										>
											office@freedom.live
										</Typography>
									</td>
								</tr>
								<tr>
									<td>
										<Typography
											fontSize="14px"
											fontWeight="300"
											lineHeight="1"
											sx={{ color: '#5C5C5C' }}
											marginTop="8px"
										>
											Instagram:
										</Typography>
									</td>
									<td>
										<Typography
											fontSize="14px"
											fontWeight="300"
											lineHeight="1"
											sx={{ color: '#5C5C5C' }}
											marginTop="8px"
										>
											@freedom
										</Typography>
									</td>
								</tr>
								<tr>
									<td>
										<Typography
											fontSize="14px"
											fontWeight="300"
											lineHeight="1"
											sx={{ color: '#5C5C5C' }}
											marginTop="8px"
										>
											Twitter:
										</Typography>
									</td>
									<td>
										<Typography
											fontSize="14px"
											fontWeight="300"
											lineHeight="1"
											sx={{ color: '#5C5C5C' }}
											marginTop="8px"
										>
											@freedom
										</Typography>
									</td>
								</tr>
							</tbody>
						</table>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ textAlign: { xs: 'left', md: 'center' } }}
					>
						<Typography
							fontSize="20px"
							lineHeight="32px"
							sx={{ color: '#5C5C5C' }}
						>
							About Project
						</Typography>
						<Typography
							fontSize="14px"
							fontWeight="300"
							lineHeight="1.5"
							sx={{ color: '#5C5C5C' }}
							marginTop="8px"
						>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s.
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ textAlign: { xs: 'left', md: 'right' } }}
					>
						<Typography
							fontSize="20px"
							lineHeight="32px"
							sx={{ color: '#5C5C5C' }}
						>
							About Project
						</Typography>
						<Typography
							fontSize="14px"
							fontWeight="300"
							lineHeight="1.5"
							sx={{ color: '#5C5C5C' }}
							marginTop="8px"
						>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s.
						</Typography>
						<Box sx={{ mt: '24px' }}>
							<Button
								color="error"
								sx={{
									fontSize: '12px',
									lineHeight: '21px',
									fontWeight: '500',
									py: '4px',
									px: '36px',
									borderRadius: '999px',
									boxShadow: 'none',
									textTransform: 'lowercase',
									opacity: '0.75',
								}}
								variant="contained"
							>
								delete offer
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default Foter
