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
import CouponsPage from '@/pages/Coupons'
import Saju from '@/pages/Saju'
import SajuGlasses from '@/pages/SajuGlasses'
import Reciclate from '@/pages/Reciclate'
import Reciclator from '@/pages/Reciclator'
import AcceptReciclator from '@/pages/AcceptReciclator'
import Pickups from '@/pages/Pickups'
import Media from '@/pages/Media'
import MarceVideo from '@/pages/MarceVideo'
import News from '@/pages/News'
import PrincipalNews from '@/pages/PrincipalNews'
import Donations from '@/pages/Donations'
import Donate from '@/pages/Donate'

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

				<Route
					path='/coupons'
					element={<Layout children={<CouponsPage />} />}
				/>
				<Route path='/saju' element={<Layout children={<Saju />} />} />
				<Route
					path='/saju-glasses'
					element={<Layout children={<SajuGlasses />} />}
				/>
				<Route
					path='/reciclate'
					element={<Layout children={<Reciclate />} />}
				/>
				<Route
					path='/reciclator'
					element={<Layout children={<Reciclator />} />}
				/>
				<Route
					path='/accept-reciclator'
					element={<Layout children={<AcceptReciclator />} />}
				/>
				<Route path='/pickups' element={<Layout children={<Pickups />} />} />
				<Route path='/media' element={<Layout children={<Media />} />} />
				<Route
					path='/marce-video'
					element={<Layout children={<MarceVideo />} />}
				/>
				<Route path='/news' element={<Layout children={<News />} />} />
				<Route
					path='/principal-news'
					element={<Layout children={<PrincipalNews />} />}
				/>
				<Route path='/juli' element={<Layout children={<Juli />} />} />
				<Route
					path='/donations'
					element={<Layout children={<Donations />} />}
				/>
				<Route path='/donate' element={<Layout children={<Donate />} />} />
			</Routes>
		</AnimatePresence>
	)
}
