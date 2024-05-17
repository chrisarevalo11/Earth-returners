import BackArrow from '@/components/icons/BackArrow'
import Calendar from '@/components/icons/Calendar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AcceptReciclator() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 px-10 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5'>
				<Link to='/accept-reciclator'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen'>Mis recogidas</h2>
			</div>

			<p className='text-lightGreen flex gap-3 mb-5'>
				<Calendar /> ¡Recogida programada!
			</p>

			<div className='w-full bg-white px-3 py-5 rounded-2xl flex justify-center gap-5 items-center mb-3 shadow-lg'>
				<div className='rounded-full bg-secondaryGreen'>
					<img
						src='/images/juan.png'
						alt='calendar'
						className='rounded-full size-24 object-cover m-1'
					/>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-secondaryGreen text-2xl'>Juan Monsalve</h1>
					<p className='text-secondaryGreen mt-2'>
						<span className='font-bold'>Fecha:</span> Abril 10
					</p>
					<p className='text-secondaryGreen -mt-1'>
						<span className='font-bold'>Hora:</span> 7 pm
					</p>
				</div>
			</div>

			<h1 className='mt-10 mb-3 text-lightGreen text-3xl self-center'>
				¡Returner!
			</h1>
			<p className='text-center text-lightGreen'>
				¡Returner! Asegúrate de tener todo tu material listo, limpio y separado
				adecuadamente. Si tienes dudas sobre cómo hacerlo, no te preocupes.
				Visita nuestra sección de contenidos donde te explicamos todo
				detalladamente.
			</p>
		</motion.div>
	)
}
