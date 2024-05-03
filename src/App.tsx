import { BrowserRouter as Router } from 'react-router-dom'
import '@fontsource-variable/sen'
import '@fontsource-variable/inter'
import AnimatedRoutes from './components/AnimatedRoutes'

function App(): JSX.Element {
	return (
		<main className='bg-white relative'>
			<Router>
				<AnimatedRoutes />
			</Router>
		</main>
	)
}

export default App
