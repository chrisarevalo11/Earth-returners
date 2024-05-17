import { Link } from 'react-router-dom'
import Bars from '@/components/icons/Bars'
import Notification from '@/components/icons/Notification'
import ShoppingCart from '@/components/icons/ShoppingCart'
import { useState } from 'react'
import Cross from '@/components/icons/Cross'
import User from '@/components/icons/User'
import Forum from '@/components/icons/Forum'
import Points from '@/components/icons/Points'
import Pickups from '@/components/icons/Pickups'
import Volunteers from '@/components/icons/Volunteers'
import Help from '@/components/icons/Help'
import Logout from '@/components/icons/Logout'

export default function Topbar() {
	const [open, setOpen] = useState(false)

	return (
		<section className='w-full h-10 bg-white flex items-center justify-between my-3 px-5'>
			<div className='flex gap-5'>
				<button
					className='p-0 bg-transparent !min-w-fit'
					onClick={() => setOpen(!open)}
				>
					<Bars />
				</button>
				<Link to='/notifications'>
					<Notification />
				</Link>
			</div>
			<Link to='/shopping'>
				<ShoppingCart />
			</Link>
			<div
				className={`w-[315px] h-full absolute top-0 bottom-0 transition-all z-50 bg-white flex flex-col items-center text-secondaryGreen ${
					open ? 'left-0' : 'left-[-315px]'
				}`}
			>
				<button
					className='p-0 bg-transparent !min-w-fit absolute right-5 top-[40px]'
					onClick={() => setOpen(!open)}
				>
					<Cross />
				</button>
				<div className='flex flex-col items-center justify-center mt-[40px] !'>
					<img src='/images/avatar.png' alt='avatar' width={120} />
					<h2 className='text-3xl text-secondaryGreen'>Liliana García</h2>
					<p className='uppercase'>Bogota D.C.</p>
				</div>
				<ul className='w-full mt-24 font-bold text-2xl'>
					<Link to={'/home'}>
						<li className='px-10 py-4 flex gap-3 bg-lightSecondaryGreen'>
							<User />
							<p className='text-2xl font-sen'>Mi perfil</p>
						</li>
					</Link>
					<Link to={'/home'}>
						<li className='px-10 py-4 flex gap-3'>
							<Forum />
							<p className='text-2xl font-sen'>Returners foro</p>
						</li>
					</Link>
					<Link to={'/home'}>
						<li className='px-10 py-4 flex gap-3 bg-lightSecondaryGreen'>
							<Points />
							<p className='text-2xl font-sen'>Mis puntos</p>
						</li>
					</Link>
					<Link to={'/pickups'}>
						<li className='px-10 py-4 flex gap-3'>
							<Pickups />
							<p className='text-2xl font-sen'>Mis recogidas</p>
						</li>
					</Link>
					<Link to={'/home'}>
						<li className='px-10 py-4 flex gap-3 bg-lightSecondaryGreen'>
							<Volunteers />
							<p className='text-2xl font-sen'>Voluntariados</p>
						</li>
					</Link>
					<Link to={'/home'}>
						<li className='px-10 py-4 flex gap-3'>
							<Help />
							<p className='text-2xl font-sen'>Ayuda</p>
						</li>
					</Link>
					<Link to={'/home'}>
						<li className='px-10 py-4 flex gap-3 bg-lightSecondaryGreen'>
							<Logout />
							<p className='text-2xl font-sen'>Salir</p>
						</li>
					</Link>
				</ul>
			</div>
		</section>
	)
}
