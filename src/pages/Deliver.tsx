import BackArrow from '@/components/icons/BackArrow'
import Chevron from '@/components/icons/Chevron'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Deliver() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 px-10 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5'>
				<Link to='/shopping'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen'>Forma de entrega</h2>
			</div>

			<Link to={'/confirm-payment'} className='w-full'>
				<div className='w-full bg-white p-3 rounded-2xl flex justify-between items-center mb-3 shadow-lg'>
					<div className='text-secondaryGreen opacity-80'>
						<p className='font-bold'>Enviar a domicilio</p>
						<p className='text-sm'>Carrera 12 #45-34 Bogotá D.C.</p>
					</div>
					<p className='font-bold text-secondaryGreen flex opacity-80 items-center'>
						$10.000 <Chevron className='ml-4' />
					</p>
				</div>
			</Link>

			<Link to={'/confirm-payment'} className='w-full'>
				<div className='w-full bg-white p-3 rounded-2xl flex justify-between items-center mb-3 shadow-lg'>
					<div className='text-secondaryGreen opacity-80'>
						<p className='font-bold'>Enviar a domicilio</p>
						<p className='text-sm'>Carrera 12 #45-34 Bogotá D.C.</p>
					</div>
					<p className='font-bold text-secondaryGreen flex opacity-80 items-center'>
						$0 <Chevron className='ml-4' />
					</p>
				</div>
			</Link>

			<Link
				to={'/confirm-payment'}
				className='button w-[90%] mx-auto mt-8 shadow-xl text-center'
			>
				Continuar
			</Link>
		</motion.div>
	)
}
