import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function SajuGlasses() {
	const navigate = useNavigate()

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
				<h2 className='text-3xl text-lightGreen'>Medellin Formuladas</h2>
			</div>

			<img src='/images/glasses.png' alt='glasses' className='w-full' />

			<div className='px-10 text-secondaryGreen'>
				<h1 className=' text-3xl font-inter text-secondaryGreen mb-2'>
					$180.000 o $4.000 puntos
				</h1>
				<span className='text-sm '>Envíos a nivel nacional</span>
				<p className='mt-10 font-medium'>
					Gafas hechas con materiales reciclados. Puedes elegir el color del
					marco y dejarnos la fórmula que necesitas para enviártelas a tu casa.{' '}
					<br />
					<br />
					Diseñadas para brindar una corrección óptica precisa y un confort
					excepcional, nuestras gafas formuladas son la solución perfecta para
					mejorar tu agudeza visual. Con una amplia selección de monturas
					modernas y estilizadas, encontrarás el estilo que mejor se adapte a
					ti. Experimenta una claridad visual incomparable y vive la vida con la
					mejor visión posible. <br />
					<br />
					¡Obtén tus gafas formuladas ahora y redescubre el mundo con nitidez!
				</p>

				<div className='flex flex-col mb-10 gap-5'>
					<input type='number' className='mt-5 p-4' placeholder='Cantidad' />
					<button onClick={() => navigate('/deliver')} className='button'>
						Comprar
					</button>
					<button
						onClick={() => navigate('/shopping')}
						className='text-center bg-lightBgGreen py-6 font-bold rounded-full'
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</motion.div>
	)
}
