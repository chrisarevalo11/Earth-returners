import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function Reciclate() {
	const navigate = useNavigate()

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
				<h2 className='text-3xl text-lightGreen'>Recicladores en tu zona</h2>
			</div>

			<div className='w-full flex flex-col items-center'>
				<label className='flex flex-col mx-auto w-full'>
					<span className='ml-5 text-green font-bold'>Localidad</span>
					<input
						type='text'
						className='!w-full'
						placeholder='Escribe aquí...'
					/>
				</label>
				<label className='flex flex-col mx-auto w-full mt-10'>
					<span className='ml-5 text-green font-bold'>Dirección</span>
					<input
						type='text'
						className='!w-full'
						placeholder='Escribe aquí...'
					/>
				</label>
				<button
					onClick={() => navigate('/reciclator')}
					className='button mt-20 mx-auto'
				>
					Buscar
				</button>
			</div>
		</motion.div>
	)
}
