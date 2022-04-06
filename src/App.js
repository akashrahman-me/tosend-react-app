import Home from './components/views/home'
import Account from './components/views/account'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from './theme/default'
import { ThemeProvider } from '@mui/material/styles'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/account" element={<Account />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
