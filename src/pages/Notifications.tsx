import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Notifications(): JSX.Element {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 px-10 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5'>
				<Link to='/home'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen'>Notificaciones</h2>
			</div>
			<div className='w-full bg-white p-3 rounded-2xl flex items-center gap-5 stat-card'>
				<div className='p-[4px] rounded-full w-fit stat'>
					<div className='!size-14 grid place-items-center rounded-full bg-white'>
						25%
					</div>
				</div>
				<p>
					¡Alcanzaste el nivel de{' '}
					<span className='font-bold opacity-80'>Retorner Guardian</span>!
				</p>
			</div>
			<div className='w-full bg-white p-3 rounded-2xl flex items-center gap-5 stat-card'>
				<div className='p-[4px] rounded-full w-fit stat'>
					<div className='!size-14 grid place-items-center rounded-full bg-white'>
						25%
					</div>
				</div>
				<p>
					Gracias a tu aporte Maria Cruz logró tener sus{' '}
					<span className='font-bold opacity-80'>nuevas gafas</span>!
				</p>
			</div>
			<div className='w-full bg-white p-3 rounded-2xl flex items-center gap-5 stat-card'>
				<div className='p-[4px] rounded-full w-fit stat'>
					<div className='!size-14 grid place-items-center rounded-full bg-white'>
						25%
					</div>
				</div>
				<p>
					¡Alcanzaste el nivel de{' '}
					<span className='font-bold opacity-80'>Retorner Guardian</span>!
				</p>
			</div>
			<div className='w-full bg-white p-3 rounded-2xl flex items-center gap-5 stat-card'>
				<div className='p-[4px] rounded-full w-fit stat'>
					<div className='!size-14 grid place-items-center rounded-full bg-white'>
						25%
					</div>
				</div>
				<p>
					Gracias a tu aporte Maria Cruz logró tener sus{' '}
					<span className='font-bold opacity-80'>nuevas gafas</span>!
				</p>
			</div>
			<div className='w-full bg-white p-3 rounded-2xl flex items-center gap-5 stat-card'>
				<div className='p-[4px] rounded-full w-fit stat'>
					<div className='!size-14 grid place-items-center rounded-full bg-white'>
						25%
					</div>
				</div>
				<p>
					¡Alcanzaste el nivel de{' '}
					<span className='font-bold opacity-80'>Retorner Guardian</span>!
				</p>
			</div>
			<div className='w-full bg-white p-3 rounded-2xl flex items-center gap-5 stat-card'>
				<div className='p-[4px] rounded-full w-fit stat'>
					<div className='!size-14 grid place-items-center rounded-full bg-white'>
						25%
					</div>
				</div>
				<p>
					Gracias a tu aporte Maria Cruz logró tener sus{' '}
					<span className='font-bold opacity-80'>nuevas gafas</span>!
				</p>
			</div>
		</motion.div>
	)
}
