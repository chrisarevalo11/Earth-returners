import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function MarceVideo() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 px-10 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5'>
				<Link to='/media'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen'>Contenidos</h2>
			</div>

			<img src='/images/marce-video.png' alt='marce' />
			<p className='mt-5 font-bold text-green text-2xl'>
				Reciclaje para Dummies con Marce la Recicladora
			</p>
			<span className='button my-5 self-center text-xl'>
				46,508 vistas 18 abr 2020
			</span>
			<p className='text-lightGreen font-bold text-lg'>
				Hola mis reciclamores les traigo un videito que me pidieron bastante
				explicandoles como con plastilina como separar en sus casas
				correctamente! espero que les guste y si tienen preguntas me las dejan
				acá en los comentarios, chao!
			</p>
		</motion.div>
	)
}
