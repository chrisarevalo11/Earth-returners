import { Link, useLocation } from 'react-router-dom'
import Home from '@/components/icons/Home'
import Content from '@/components/icons/Content'
import Donations from '@/components/icons/Donations'
import Location from '@/components/icons/Location'
import Coupons from '@/components/icons/Coupons'

type Route = {
	path: string
	icon: JSX.Element
}

export default function Navbar(): JSX.Element {
	const location = useLocation()

	return (
		<nav className='w-full min-h-[80px] h-fit bg-green grid grid-cols-5 px-3 '>
			{routes.map((route, index) => (
				<Link
					to={route.path}
					key={index}
					className={`flex items-center justify-center ${
						location.pathname === route.path
							? 'bg-[#F1F1F1] rounded-full relative -top-[30px] w-[80px] h-[80px] p-3'
							: ''
					}`}
				>
					{route.path === location.pathname ? (
						<div
							className='w-full h-full flex items-center justify-center scale-[1.2]'
							style={{
								backgroundImage: `url(/images/active-path.png)`,
								backgroundSize: 'contain',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat'
							}}
						>
							{route.icon}
						</div>
					) : (
						route.icon
					)}
				</Link>
			))}
		</nav>
	)
}

const routes: Route[] = [
	{
		path: '/coupons',
		icon: <Coupons />
	},
	{
		path: '/zonas',
		icon: <Location />
	},
	{
		path: '/home',
		icon: <Home />
	},
	{
		path: '/media',
		icon: <Content />
	},
	{
		path: '/donations',
		icon: <Donations />
	}
]
