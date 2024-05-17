import BackArrow from '@/components/icons/BackArrow'
import Calendar from '@/components/icons/Calendar'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function AcceptReciclator() {
	const navigate = useNavigate()

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 px-10 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5'>
				<Link to='/reciclator'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen'>Agendar recogida</h2>
			</div>

			<p className='text-lightGreen flex gap-3 mb-5'>
				<Calendar /> Selecciona una fecha disponible
			</p>

			<img src='/images/calendar.png' alt='calendar' className='' />

			<p className='text-lightGreen flex gap-3 mb-5'>
				<Calendar /> Selecciona una hora disponible
			</p>

			<select
				id='countries'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-lightBgGreen block w-full p-4 text-lightGreen font-bold'
				defaultValue='ph'
			>
				<option value='ph'>Elige hora de recogida</option>
				<option className='text-lightGreen font-bold'>10 am</option>
				<option className='text-lightGreen font-bold'> 7 pm</option>
			</select>

			<button
				onClick={() => {
					navigate('/pickups')
				}}
				className='button mt-10 self-center'
			>
				Agendar recogida
			</button>
		</motion.div>
	)
}
