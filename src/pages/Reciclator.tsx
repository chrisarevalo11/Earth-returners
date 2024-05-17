import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function Reciclator() {
	const navigate = useNavigate()

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-center py-6 px-10 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5 self-start'>
				<Link to='/reciclate'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen'>Juan Monsalve</h2>
			</div>

			<img src='/images/juan.png' alt='juan' />

			<p className='mt-4 text-lightGreen'>
				Juan es un reciclador apasionado, con 15 años de experiencia, dedicado
				padre de familia y trabajador incansable. Con una determinación
				inquebrantable y una sonrisa constante, transforma desechos en
				oportunidades. Fuera de su labor, disfruta de momentos tranquilos en la
				naturaleza, compartiendo risas con su familia{' '}
			</p>
			<button
				onClick={() => navigate('/accept-reciclator')}
				className='button mt-10'
			>
				Aceptar recogida
			</button>
		</motion.div>
	)
}
