import Hero from './Hero'
import Peoplation from './Peoplation'
import Navbar from '../../layout/Navbar'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

function Home() {
	const renderButton = (
		<>
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
				REFUGEE
			</Button>
			<Link to="/account" style={{ textDecoration: 'none' }}>
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
					variant="text"
				>
					OFFER
				</Button>
			</Link>
		</>
	)

	return (
		<>
			<Navbar renderButton={renderButton} />
			<Hero />
			<Peoplation />
		</>
	)
}

export default Home
