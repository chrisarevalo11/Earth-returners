import City from '@/pages/City'
import Home from '@/pages/Home'
import Welcome from '@/pages/Welcome'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '@/components/Layout'
import Notifications from '@/pages/Notifications'
import ShoppingCart from '@/pages/ShoppingCart'
import Deliver from '@/pages/Deliver'
import ConfirmPayment from '@/pages/ConfirmPayment'
import PaymentMethod from '@/pages/PaymentMethod'
import Juli from '@/pages/Juli'

export default function AnimatedRoutes() {
	const location = useLocation()

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route index path='/' element={<Welcome />} />
				<Route path='/city' element={<City />} />
				<Route path='/home' element={<Layout children={<Home />} />} />
				<Route
					path='/notifications'
					element={<Layout children={<Notifications />} />}
				/>
				<Route
					path='/shopping'
					element={<Layout children={<ShoppingCart />} />}
				/>
				<Route path='/deliver' element={<Layout children={<Deliver />} />} />
				<Route
					path='/confirm-payment'
					element={<Layout children={<ConfirmPayment />} />}
				/>
				<Route
					path='/payment-method'
					element={<Layout children={<PaymentMethod />} />}
				/>
				<Route path='/juli' element={<Layout children={<Juli />} />} />
			</Routes>
		</AnimatePresence>
	)
}
