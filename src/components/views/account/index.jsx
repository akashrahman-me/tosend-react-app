import Navbar from '../../layout/Navbar'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import logoutIcon from '../../../images/log-out.svg'
import userpicture from '../../../images/Ellipse 1.svg'
import searchIcon from '../../../images/Vector (3).svg'
import secThumb from '../../../images/image 6.png'
import personIcon from '../../../images/Group.svg'
import infoIcon from '../../../images/image 7.svg'
import CirclePoint from './CirclePoint'
import Switch from '@mui/material/Switch'
import Radio from '@mui/material/Radio'

const StyledTextField = styled(InputBase)(({ theme }) => ({
	fontSize: '12px',
	lineHeight: '16px',
	boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.15)',
	padding: '6px 12px',
	borderRadius: '14px',
	width: '100%',
	'& input::placeholder': {
		color: '#666666',
		opacity: '1',
	},
}))

function Account() {
	const renderButton = (
		<>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<Button
					color="error"
					sx={{
						color: '#B5BAC7',
						fontSize: '14px',
						lineHeight: '21px',
						fontWeight: '600',
						py: '12px',
						px: '30px',
						borderRadius: '999px',
						boxShadow: 'none',
					}}
				>
					REFUGEE
				</Button>
			</Link>
			<Link to="/account" style={{ textDecoration: 'none' }}>
				<Button
					color="primary"
					sx={{
						fontSize: '14px',
						lineHeight: '21px',
						fontWeight: '600',
						py: '12px',
						px: '50px',
						borderRadius: '999px',
						boxShadow: 'none',
					}}
					variant="contained"
				>
					OFFER
				</Button>
			</Link>
		</>
	)

	return (
		<>
			<Navbar renderButton={renderButton} />
			<Box sx={{ px: 3 }}>
				<Box
					sx={{
						py: { xs: '28px', md: '48px' },
						textAlign: 'center',
						display: { xs: 'block', sm: 'flex' },
						justifyContent: 'center',
					}}
				>
					<Typography
						fontWeight="500"
						fontSize="14px"
						lineHeight="20px"
						sx={{ color: '#000', px: '20px' }}
					>
						Account settings
					</Typography>
					<Typography
						fontWeight="500"
						fontSize="14px"
						lineHeight="20px"
						sx={{ color: '#000', px: '20px' }}
					>
						Edit Profile
					</Typography>
					<Typography
						fontWeight="500"
						fontSize="14px"
						lineHeight="20px"
						sx={{ color: '#000', px: '20px' }}
					>
						About freedom.live
					</Typography>
					<Typography
						fontWeight="500"
						fontSize="14px"
						lineHeight="20px"
						sx={{ color: '#000', px: '20px', alignItems: 'center' }}
						display="inline-flex"
					>
						<span>Log Out</span>
						<img
							src={logoutIcon}
							width="16"
							height="16"
							style={{ display: 'block', marginLeft: '6px' }}
						/>
					</Typography>
				</Box>

				<Box sx={{ mt: '30px' }}>
					<Typography fontSize="20px" lineHeight="28px">
						How to offer help to ukrainians over{' '}
						<a
							href="#"
							style={{ color: '#005BBB', textDecoration: 'none' }}
						>
							freedom.live?
						</a>
					</Typography>
					<Grid container spacing={{ xs: '28px', md: '52px' }}>
						{[...Array(3)].map(() => (
							<Grid item xs={12} md={4} key={Math.random()}>
								<CirclePoint />
								<Typography
									fontWeight="500"
									fontSize="14px"
									lineheight="20px"
									sx={{ color: '#5C5C5C' }}
								>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the
									industry's standard dummy text ever since the 1500s.
								</Typography>
							</Grid>
						))}
					</Grid>
				</Box>

				<Box
					sx={{
						mt: '80px',
						pb: '14px',
						boxShadow: '0px 2px rgb(0 0 0 / 10%)',
					}}
				>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Box>
								<img
									width="72"
									height="72"
									alt="person"
									src={userpicture}
								/>
							</Box>
							<Box sx={{ ml: '12px' }}>
								<Button
									sx={{
										py: '6px',
										px: '16px',
										mb: '10px',
										borderRadius: '99px',
										fontSize: '10px',
										lineHeight: '12px',
										boxShadow: 'none',
										backgroundColor: '#005BBB',
										textTransform: 'initial',
									}}
									variant="contained"
									color="primary"
								>
									Upload Picture
								</Button>
								<br />
								<Button
									sx={{
										py: '6px',
										px: '16px',
										mb: '10px',
										borderRadius: '99px',
										fontSize: '10px',
										lineHeight: '12px',
										boxShadow: 'none',
										backgroundColor: '#BB0000',
										textTransform: 'initial',
									}}
									variant="contained"
									color="error"
								>
									Upload Picture
								</Button>
							</Box>
						</Box>
						<Box>
							<Button
								color="primary"
								sx={{
									fontSize: '12px',
									lineHeight: '18px',
									fontWeight: '500',
									py: '10px',
									px: { xs: '24px', md: '54px' },
									borderRadius: '999px',
									boxShadow: 'none',
									textTransform: 'initial',
								}}
								variant="contained"
							>
								save changes
							</Button>
						</Box>
					</Box>
					<Box sx={{ mt: '10px' }}>
						<Grid container spacing={'34px'}>
							<Grid item xs={12} md={4}>
								<Box sx={{ mb: '12px' }}>
									<label htmlFor="name">
										<Typography
											sx={{
												color: '#000',
												fontWeight: '500',
												fontSize: '14px',
												linHeight: '154%',
												ml: '6px',
												mb: '6px',
											}}
										>
											Name
										</Typography>
									</label>
									<StyledTextField
										id="name"
										placeholder="Enter Name"
									/>
								</Box>

								<Box sx={{ mb: '12px' }}>
									<label htmlFor="country">
										<Typography
											sx={{
												color: '#000',
												fontWeight: '500',
												fontSize: '14px',
												linHeight: '154%',
												ml: '6px',
												mb: '6px',
											}}
										>
											Country
										</Typography>
									</label>
									<Select
										id="country"
										defaultValue="ChooseCountry"
										input={
											<StyledTextField
												startAdornment={
													<InputAdornment position="start">
														<img
															width="14"
															height="14"
															src={searchIcon}
														/>
													</InputAdornment>
												}
											/>
										}
									>
										<option
											style={{ display: 'none' }}
											value="ChooseCountry"
										>
											Choose Country
										</option>
										<MenuItem
											sx={{
												fontSize: '12px',
												lineHeight: '16px',
											}}
											value="bd"
										>
											Bangladesh
										</MenuItem>
										<MenuItem
											sx={{
												fontSize: '12px',
												lineHeight: '16px',
											}}
											value="us"
										>
											United State
										</MenuItem>
									</Select>
								</Box>

								<Box sx={{ mb: '18px' }}>
									<label htmlFor="city">
										<Typography
											sx={{
												color: '#000',
												fontWeight: '500',
												fontSize: '14px',
												linHeight: '154%',
												ml: '6px',
												mb: '6px',
											}}
										>
											City
										</Typography>
									</label>
									<Select
										id="city"
										defaultValue="ChooseCity"
										input={
											<StyledTextField
												startAdornment={
													<InputAdornment position="start">
														<img
															width="14"
															height="14"
															src={searchIcon}
														/>
													</InputAdornment>
												}
											/>
										}
									>
										<option
											style={{ display: 'none' }}
											value="ChooseCity"
										>
											Choose City
										</option>
										<MenuItem
											sx={{
												fontSize: '12px',
												lineHeight: '16px',
											}}
											value="Dhaka"
										>
											Dhaka
										</MenuItem>
										<MenuItem
											sx={{
												fontSize: '12px',
												lineHeight: '16px',
											}}
											value="Bogura"
										>
											Bogura
										</MenuItem>
									</Select>
								</Box>

								<Box sx={{ mb: '16px' }}>
									<Select
										defaultValue="1"
										input={
											<StyledTextField
												startAdornment={
													<InputAdornment position="start">
														<img
															width="16"
															height="16"
															src={personIcon}
														/>
													</InputAdornment>
												}
											/>
										}
									>
										<option style={{ display: 'none' }} value="1">
											1 People
										</option>
										<MenuItem
											sx={{
												fontSize: '12px',
												lineHeight: '16px',
											}}
											value="2"
										>
											1 People
										</MenuItem>
										<MenuItem
											sx={{
												fontSize: '12px',
												lineHeight: '16px',
											}}
											value="2"
										>
											1 People
										</MenuItem>
									</Select>
								</Box>

								<Box
									sx={{
										mb: '12px',
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
										}}
									>
										<Typography
											sx={{
												fontWeight: '500',
												fontSize: '14px',
												lineHeight: '154%',
												color: '#000',
												mr: '6px',
											}}
										>
											Availibility
										</Typography>
										<Switch defaultChecked color="success" />
									</Box>
									<Box sx={{ display: 'flex', alignItems: 'center' }}>
										<Radio
											size="small"
											sx={{
												color: '#bbb',
												'&.Mui-checked': { color: '#bbb' },
											}}
										/>
										<Typography
											sx={{ color: '#666666' }}
											fontWeight="600"
											fontSize="10px"
										>
											Organization
										</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} md={4}>
								<Box sx={{ mb: '18px' }}>
									<label htmlFor="Contact">
										<Typography
											sx={{
												color: '#000',
												fontWeight: '500',
												fontSize: '14px',
												linHeight: '154%',
												ml: '6px',
												mb: '6px',
											}}
										>
											Contact
										</Typography>
									</label>
									<StyledTextField
										id="Contact"
										placeholder="Telephone Number"
									/>
								</Box>
								<Box sx={{ mb: '18px' }}>
									<StyledTextField placeholder="E-Mail (showed on page)" />
								</Box>
								<Box sx={{ mb: '16px' }}>
									<StyledTextField
										placeholder="E-Mail (for offer delete)"
										endAdornment={
											<InputAdornment
												position="end"
												sx={{ cursor: 'pointer' }}
											>
												<Box
													sx={{
														position: 'relative',
														'&:hover .fieldHelper': {
															display: 'block',
														},
													}}
												>
													<img
														width="14"
														height="14"
														src={infoIcon}
													/>
													<Box
														className="fieldHelper"
														sx={{
															px: '18px',
															py: '16px',
															position: 'absolute',
															borderRadius: '10px',
															boxShadow:
																'0px 4px 14px rgba(0, 0, 0, 0.15)',
															width: '236px',
															zIndex: '999',
															backgroundColor: 'white',
															display: 'none',
														}}
													>
														<Typography
															fontSize="10px"
															lineHeight="12px"
															marginBottom="8px"
															sx={{ color: '#B5AFAF' }}
														>
															Email
														</Typography>
														<Typography
															fontSize="10px"
															lineHeight="12px"
															marginBottom="8px"
															sx={{
																color: '#333333',
																whiteSpace: 'normal',
															}}
														>
															Lorem ipsum dollar sit amit
															elitskfk lkakl
															klasjflkjlfLorem ipsum
															dollar sit l klasjflkjlf
														</Typography>
													</Box>
												</Box>
											</InputAdornment>
										}
									/>
								</Box>
								<Box>
									<Typography
										sx={{
											fontWeight: '500',
											fontSize: '14px',
											lineHeight: '154%',
											color: '#000',
											mr: '6px',
										}}
									>
										Suited for
									</Typography>
									<Box>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												height: '25px',
											}}
										>
											<Radio
												size="small"
												sx={{
													color: '#bbb',
													'&.Mui-checked': { color: '#bbb' },
												}}
											/>
											<Typography
												sx={{ color: '#666666' }}
												fontWeight="600"
												fontSize="10px"
											>
												Parents with babys/children
											</Typography>
										</Box>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												height: '25px',
											}}
										>
											<Radio
												size="small"
												sx={{
													color: '#bbb',
													'&.Mui-checked': { color: '#bbb' },
												}}
											/>
											<Typography
												sx={{ color: '#666666' }}
												fontWeight="600"
												fontSize="10px"
											>
												Pets
											</Typography>
										</Box>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',

												height: '25px',
											}}
										>
											<Radio
												size="small"
												sx={{
													color: '#bbb',
													'&.Mui-checked': { color: '#bbb' },
												}}
											/>
											<Typography
												sx={{ color: '#666666' }}
												fontWeight="600"
												fontSize="10px"
											>
												Pets
											</Typography>
										</Box>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} md={4}>
								<Box sx={{ mb: '18px' }}>
									<label htmlFor="Description">
										<Typography
											sx={{
												color: '#000',
												fontWeight: '500',
												fontSize: '14px',
												linHeight: '154%',
												ml: '6px',
												mb: '6px',
											}}
										>
											Description
										</Typography>
									</label>
									<StyledTextField
										id="Description"
										multiline
										rows={8}
									/>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>

				<Box
					sx={{
						mt: '20px',
						mx: 'auto',
						boxShadow: '0px 2px rgb(0 0 0 / 10%)',
						pb: '36px',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Box>
						<Box
							sx={{
								boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
								p: '6px',
							}}
						>
							<Typography
								sx={{
									color: '#AAAAAA',
									px: '12px',
									fontSize: '14px',
									fontWeight: '300',
									lineHeight: '154%',
								}}
							>
								Captcha
							</Typography>
							<Box sx={{ px: '36px', pb: '20px', pt: '4px' }}>
								<Box
									sx={{
										backgroundColor: '#C4C4C4',
										width: '245px',
										height: '74px',
									}}
								/>
							</Box>
						</Box>
						<Stack spacing={'28px'} direction="row">
							<Button
								color="error"
								sx={{
									fontSize: '14px',
									lineHeight: '21px',
									fontWeight: '600',
									py: '12px',
									px: '50px',
									borderRadius: '999px',
									boxShadow: 'none',
								}}
								variant="contained"
							>
								Cancel
							</Button>
							<Button
								color="primary"
								sx={{
									fontSize: '14px',
									lineHeight: '21px',
									fontWeight: '600',
									py: '12px',
									px: '60px',
									borderRadius: '999px',
									boxShadow: 'none',
								}}
								variant="contained"
							>
								Add
							</Button>
						</Stack>
					</Box>
				</Box>

				<Box sx={{ mt: '42px' }}>
					<Grid container spacing={'64px'}>
						<Grid item xs={12} md={6}>
							<Typography
								sx={{
									fontSize: '20px',
									lineHeight: '135%',
									color: '#000',
									marginBottom: '22px',
								}}
							>
								How to delete offer?
							</Typography>
							<Typography
								sx={{
									fontSize: '14px',
									lineHeight: '154%',
									color: '#5C5C5C',
								}}
							>
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s.
							</Typography>
							<Box sx={{ mt: '18px' }}>
								<Box sx={{ mb: '18px' }}>
									<StyledTextField
										sx={{ maxWidth: '236px' }}
										placeholder="Offer Number"
									/>
								</Box>
								<Box sx={{ mb: '18px' }}>
									<StyledTextField
										sx={{ maxWidth: '236px' }}
										placeholder="Offer Number"
									/>
								</Box>
								<Box sx={{ mt: '36px', textAlign: 'left' }}>
									<Button
										color="error"
										sx={{
											fontSize: '14px',
											lineHeight: '21px',
											fontWeight: '600',
											py: '10px',
											px: '80px',
											borderRadius: '999px',
											boxShadow: 'none',
										}}
										variant="contained"
									>
										Cancel
									</Button>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography
								sx={{
									fontSize: '20px',
									lineHeight: '135%',
									color: '#000',
									marginBottom: '22px',
								}}
							>
								How to delete offer?
							</Typography>
							<Typography
								sx={{
									fontSize: '14px',
									lineHeight: '154%',
									color: '#5C5C5C',
								}}
							>
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s.
							</Typography>
							<Box sx={{ mt: '18px' }}>
								<Box sx={{ mb: '18px' }}>
									<StyledTextField
										sx={{ maxWidth: '236px' }}
										placeholder="Offer Number"
									/>
								</Box>
								<Box sx={{ mb: '18px' }}>
									<StyledTextField
										sx={{ maxWidth: '236px' }}
										placeholder="Offer Number"
									/>
								</Box>
								<Box
									sx={{
										mt: '36px',
										textAlign: { xs: 'left', md: 'right' },
									}}
								>
									<Button
										color="error"
										sx={{
											fontSize: '14px',
											lineHeight: '21px',
											fontWeight: '600',
											py: '10px',
											px: '80px',
											borderRadius: '999px',
											boxShadow: 'none',
										}}
										variant="contained"
									>
										Cancel
									</Button>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography
								sx={{
									fontSize: '20px',
									lineHeight: '135%',
									color: '#000',
									marginBottom: '22px',
								}}
							>
								How to delete offer?
							</Typography>
							<Typography
								sx={{
									fontSize: '14px',
									lineHeight: '154%',
									color: '#5C5C5C',
								}}
							>
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s.
							</Typography>
							<Box sx={{ mt: '18px' }}>
								<img
									src={secThumb}
									alt="section thumbnail"
									style={{ maxWidth: '100%' }}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ mb: '18px' }}>
								<img
									src={secThumb}
									alt="section thumbnail"
									style={{ maxWidth: '100%' }}
								/>
							</Box>
							<Typography
								sx={{
									fontSize: '20px',
									lineHeight: '135%',
									color: '#000',
									marginBottom: '22px',
								}}
							>
								How to delete offer?
							</Typography>
							<Typography
								sx={{
									fontSize: '14px',
									lineHeight: '154%',
									color: '#5C5C5C',
								}}
							>
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s.
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	)
}

export default Account
