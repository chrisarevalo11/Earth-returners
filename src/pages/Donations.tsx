import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function Donations() {
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
				<h2 className='text-3xl text-lightGreen line-clamp-2'>Donaciones</h2>
			</div>

			<div className='text-lightGreen space-y-5'>
				<p className='text-green font-bold text-xl'>
					¡Únete a nuestra causa y haz una diferencia real en tu comunidad!
				</p>
				<p className='text-lg leading-6'>
					En nuestra sección de donaciones, destacamos las historias
					inspiradorasde cómo tus esfuerzos de reciclaje están transformando
					vidas.
				</p>
				<p className='text-lg leading-6'>
					Descubre cómo tus materiales reciclados se convierten en recursos
					valiosos para escuelas, organizaciones benéficas y proyectos de
					sostenibilidad.
				</p>
				<p className='text-lg leading-6'>
					Desde escritorios hechos de plásticoreciclado hasta iniciativas
					educativas,cada contribución cuenta.
				</p>
			</div>

			<button
				onClick={() => navigate('/donate')}
				className='button self-center mt-10'
			>
				¡Haz tu aporte!
			</button>

			<img src='/images/reciycle.png' alt='reciclar' className='mt-10 pb-10' />
		</motion.div>
	)
}
