import Logo from '@/components/Logo'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function City() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/home')
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col justify-around items-center p-10 gap-[60px]'
		>
			<div className='space-y-10 w-full'>
				<Logo className='size-[90px] mx-auto mb-20' />
				<h1 className='text-3xl text-center'>¿En qué ciudad te encuentras?</h1>

				<select
					id='countries'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-lightBgGreen block w-full p-4 text-lightGreen font-bold'
					defaultValue='ph'
				>
					<option value='ph'>Elige tu ciudad</option>
					<option className='text-lightGreen font-bold'>BOGOTÁ D.C.</option>
					<option className='text-lightGreen font-bold'>MEDELLIN</option>
					<option className='text-lightGreen font-bold'>CALI</option>
				</select>
			</div>
			<button className='mt-10 button' onClick={handleClick}>
				¡Listo!
			</button>
		</motion.div>
	)
}
