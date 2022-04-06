import Box from '@mui/material/Box'
import circleImg from '../../../images/Ellipse 10.svg'

function CirclePoint() {
	return (
		<Box
			sx={{
				width: '100%',
				height: '6px',
				backgroundColor: '#F3F1F1',
				position: 'relative',
				my: '16px',
			}}
		>
			<img
				style={{
					position: 'absolute',
					top: '0',
					transform: 'translate(0%, calc(-50% + 3px))',
				}}
				src={circleImg}
				width="20"
				height="20"
			/>
		</Box>
	)
}

export default CirclePoint
