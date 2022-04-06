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
import searchIcon from '../../../images/Vector.svg'
import countryFlag from '../../../images/image 6.svg'

import g1 from '../../../images/Vector (2).svg'
import g2 from '../../../images/ic_sharp-pets (1).svg'
import g3 from '../../../images/Group 12.svg'
import g4 from '../../../images/Group 13.svg'

import person from '../../../images/Ellipse 1.png'
import filterIcon from '../../../images/clarity_filter-2-line.svg'
import SearchField from '../../global/SearchField'
import { useState } from 'react'

const Table = styled('table')(({ theme }) => ({
	padding: '25px',
	borderRadius: '6px',
	backgrundColor: '#F8F8F8',
	boxShadow: '1px 1px 2px #ccc',
	minWidth: 900,
	transition: '156ms',
	cursor: 'pointer',
	width: '100%',
	'&:hover': {
		backgroundColor: '#2488FF',
		'& p': {
			color: 'white',
		},
	},
}))

function Peoplation() {
	const [filter, setFilter] = useState(null)
	const openFilter = event => {
		setFilter(event.currentTarget)
	}
	const closeFilter = () => setFilter(null)

	return (
		<Box sx={{ px: 3, py: 3 }}>
			<Grid container>
				<Grid item xs={12} sm={6}>
					<SearchField
						startAdornment={
							<InputAdornment position="start">
								<img
									width="13"
									height="13"
									src={searchIcon}
									alt="search"
								/>
							</InputAdornment>
						}
						sx={{ width: { xs: '100%', sm: '220px' } }}
						placeholder="Enter Location"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Stack
						spacing="20px"
						direction="row"
						sx={{
							alignItems: 'center',
							justifyContent: { xs: 'space-between', md: 'right' },
						}}
					>
						<Typography
							color="#5C5C5C"
							fontSize="15px"
							lineHeight="154%"
							sx={{ textDecoration: 'underline' }}
						>
							Search by map
						</Typography>
						<IconButton onClick={openFilter}>
							<img width="33" height="33" src={filterIcon} alt="filter" />
						</IconButton>
						<Menu
							open={Boolean(filter)}
							anchorEl={filter}
							onClose={closeFilter}
							sx={{
								'& ul': {
									boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.15)',
								},
							}}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
						>
							<Typography
								sx={{
									fontSize: '12px',
									lineHeight: '15px',
									color: '#B5AFAF',
									minWidth: 200,
									p: 2,
								}}
							>
								Filter by
							</Typography>
							<MenuItem
								sx={{
									fontSize: '12px',
									lineHeight: '15px',
									color: '#333',
									py: 1.5,
								}}
								onClick={closeFilter}
							>
								City
							</MenuItem>
							<MenuItem
								sx={{
									fontSize: '12px',
									lineHeight: '15px',
									color: '#333',
									py: 1.5,
								}}
								onClick={closeFilter}
							>
								Country
							</MenuItem>
							<MenuItem
								sx={{
									fontSize: '12px',
									lineHeight: '15px',
									color: '#333',
									py: 1.5,
								}}
								onClick={closeFilter}
							>
								Organization
							</MenuItem>
						</Menu>
					</Stack>
				</Grid>
			</Grid>
			<Box sx={{ mt: '20px', overflowX: 'auto' }}>
				{[...Array(5)].map(() => (
					<Box sx={{ mb: '24px' }} key={Math.random()}>
						<Table>
							<tbody>
								<tr>
									<th
										style={{
											paddingRight: '18px',
											textAlign: 'left',
										}}
										rowSpan="2"
									>
										<img
											width="60"
											height="60"
											src={person}
											alt="person"
										/>
									</th>
									<th
										style={{
											paddingRight: '18px',
											textAlign: 'left',
										}}
									>
										<Typography
											fontWeight="500"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											Country
										</Typography>
									</th>
									<th
										style={{
											paddingRight: '18px',
											textAlign: 'left',
										}}
									>
										<Typography
											fontWeight="500"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											City
										</Typography>
									</th>
									<th
										style={{
											paddingRight: '18px',
											textAlign: 'left',
										}}
									>
										<Typography
											fontWeight="500"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											What?
										</Typography>
									</th>
									<th
										style={{
											paddingRight: '18px',
											textAlign: 'left',
										}}
									>
										<Typography
											fontWeight="500"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											Description
										</Typography>
									</th>
									<th
										style={{
											paddingRight: '18px',
											textAlign: 'left',
										}}
									>
										<Typography
											fontWeight="500"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
											noWrap
										>
											Suited for
										</Typography>
									</th>
									<th
										style={{
											paddingRight: '18px',
											textAlign: 'center',
										}}
									>
										<Typography
											fontWeight="500"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											Contact
										</Typography>
									</th>
									<th
										style={{
											paddingRight: '18px',
											textAlign: 'left',
										}}
									>
										<Typography
											fontWeight="500"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											Avaiable?
										</Typography>
									</th>
								</tr>
								<tr>
									<td>
										<Stack direction="row" spacing={'5px'}>
											<img
												width="14"
												src={countryFlag}
												alt="country"
											/>
											<Typography
												marginRight="18px"
												fontWeight="300"
												fontSize="13px"
												lineHeight="154%"
												sx={{ color: '#000' }}
											>
												Austria
											</Typography>
										</Stack>
									</td>
									<td>
										<Typography
											marginRight="18px"
											fontWeight="300"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
											noWrap
										>
											Vienna
										</Typography>
									</td>
									<td>
										<Typography
											marginRight="18px"
											fontWeight="300"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
											noWrap
										>
											I offer shelter
										</Typography>
									</td>
									<td>
										<Typography
											marginRight="18px"
											fontWeight="300"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											hi, my name is Szymon and i’m a professional
											shelterer at my 3 Room apartament in viennai
											can host you
										</Typography>
									</td>
									<td>
										<img src={g1} height="16" />
										<img src={g2} height="16" />
										<img src={g3} height="16" />
										<br />
										<img src={g4} height="18" />
									</td>
									<td>
										<Typography
											fontWeight="400"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											+43 676 49459295
										</Typography>
										<Typography
											marginRight="18px"
											fontWeight="300"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#000' }}
										>
											szymon@gmail.com
										</Typography>
									</td>
									<td>
										<Typography
											marginRight="18px"
											fontWeight="500"
											fontSize="13px"
											lineHeight="154%"
											sx={{ color: '#51BF69' }}
										>
											avaiable
										</Typography>
									</td>
								</tr>
							</tbody>
						</Table>
					</Box>
				))}
			</Box>
		</Box>
	)
}

export default Peoplation
