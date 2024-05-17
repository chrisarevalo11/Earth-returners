import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Saju() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5 px-10'>
				<Link to='/coupons'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen'>Sajú</h2>
			</div>
			<img src='/images/saju2.png' alt='saju' className='w-full' />
			<img src='/images/saju3.png' alt='saju' className='w-full -mt-5' />

			<p className='text-secondaryGreen text-md text-center px-5 my-10'>
				¡Nos enorgullece presentar a{' '}
				<span className='font-extrabold'>Sajú</span>, una de nuestras marcas
				aliadas más destacadas! Con un compromiso inquebrantable con la
				sostenibilidad y el cuidado del medio ambiente, Sajú ofrece una amplia
				gama de productos construidos con materiales reciclados. Desde
				mobiliario hasta accesorios, cada artículo de Sajú refleja su firme
				filosofía de responsabilidad ambiental y apoyo a nuestras comunidades.
				Únete a nosotros y descubre cómo Sajú y nuestra comunidad están creando
				un impacto positivo juntos.
			</p>
			<img src='/images/saju4.png' alt='saju' className='w-full pb-10' />
		</motion.div>
	)
}
