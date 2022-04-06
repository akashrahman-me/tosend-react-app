import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'

const SearchField = styled(InputBase)(({ theme }) => ({
	border: '1px solid #D8D8D8',
	padding: '10px 18px',
	borderRadius: '10px',
	fontWeight: '500',
	fontSize: '13px',
	lineHeigh: '154%',
	transition: '156ms',
	'&:hover': {
		border: '1px solid #aaa',
	},
	'& input::placeholder': {
		color: '#D8D8D8',
		opacity: '1',
	},
}))

export default SearchField
