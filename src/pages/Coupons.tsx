import BackArrow from '@/components/icons/BackArrow'
import Coupons from '@/components/icons/Coupons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CouponsPage() {
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
				<h2 className='text-3xl text-lightGreen'>Cupones</h2>
			</div>

			<div>
				<p className='text-secondaryGreen font-medium'>
					Únete a nuestra causa y marca la diferencias en tu comunidad. <br />{' '}
					<br /> Descubre cómo tus esfuerzos de reciclaje están transformando
					vidas en nuestra sección de donaciones. <br /> <br /> Desde
					escritorios hechos de plástico reciclado hasta proyectos educativos,
					cada contribución cuenta.
				</p>
				<p className='text-lightGreen mt-6 text-center text-lg font-bold'>
					¡Sé parte del cambio hacia un mundo más verde y sostenible!
				</p>
			</div>
			<div className='flex flex-col gap-5 w-full'>
				<header className='flex items-center text-lightGreen gap-5'>
					<Coupons className='w-10 h-10 text-lightGreen' />
					<h2 className='text-3xl text-lightGreen'>Cupones</h2>
				</header>
				<div className='flex justify-center justify-self-center gap-5'>
					<div className='flex flex-col gap-3 items-center'>
						<Link to={'/saju'}>
							<img src='/images/saju.png' alt='saju' width={60} />
							<h2 className='text-center mt-2'>Sajú</h2>
						</Link>
					</div>
					<div className='flex flex-col gap-3 items-center'>
						<Link to={'/saju'}>
							<img src='/images/saju.png' alt='saju' width={60} />
							<h2 className='text-center mt-2'>Sajú</h2>
						</Link>
					</div>
					<div className='flex flex-col gap-3 items-center'>
						<Link to={'/saju'}>
							<img src='/images/saju.png' alt='saju' width={60} />
							<h2 className='text-center mt-2'>Sajú</h2>
						</Link>
					</div>
					<div className='flex flex-col gap-3 items-center'>
						<Link to={'/saju'}>
							<img src='/images/saju.png' alt='saju' width={60} />
							<h2 className='text-center mt-2'>Sajú</h2>
						</Link>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-x-2 gap-y-4 mt-10'>
					<Link to={'/saju-glasses'}>
						<div className='p-2 flex flex-col relative bg-white shadow-xl rounded-xl'>
							<img
								src='/images/discount.png'
								alt='discount'
								width={60}
								className='absolute top-[-20px] right-0'
							/>
							<img src='/images/glasses.png' alt='glasses' className='mt-5' />
							<h4 className='text-black font-thin text-lg mb-2'>
								$4.000 puntos
							</h4>
							<p className='text-sm text-gray-600'>
								Gafas hechas con materiales reciclados.
							</p>
						</div>
					</Link>
					<Link to={'/saju-glasses'}>
						<div className='p-2 flex flex-col relative bg-white shadow-xl rounded-xl'>
							<img
								src='/images/discount.png'
								alt='discount'
								width={60}
								className='absolute top-[-20px] right-0'
							/>
							<img src='/images/glasses.png' alt='glasses' className='mt-5' />
							<h4 className='text-black font-thin text-lg mb-2'>
								$4.000 puntos
							</h4>
							<p className='text-sm text-gray-600'>
								Gafas hechas con materiales reciclados.
							</p>
						</div>
					</Link>
					<Link to={'/saju-glasses'}>
						<div className='p-2 flex flex-col relative bg-white shadow-xl rounded-xl'>
							<img
								src='/images/discount.png'
								alt='discount'
								width={60}
								className='absolute top-[-20px] right-0'
							/>
							<img src='/images/glasses.png' alt='glasses' className='mt-5' />
							<h4 className='text-black font-thin text-lg mb-2'>
								$4.000 puntos
							</h4>
							<p className='text-sm text-gray-600'>
								Gafas hechas con materiales reciclados.
							</p>
						</div>
					</Link>
					<Link to={'/saju-glasses'}>
						<div className='p-2 flex flex-col relative bg-white shadow-xl rounded-xl'>
							<img
								src='/images/discount.png'
								alt='discount'
								width={60}
								className='absolute top-[-20px] right-0'
							/>
							<img src='/images/glasses.png' alt='glasses' className='mt-5' />
							<h4 className='text-black font-thin text-lg mb-2'>
								$4.000 puntos
							</h4>
							<p className='text-sm text-gray-600'>
								Gafas hechas con materiales reciclados.
							</p>
						</div>
					</Link>
				</div>
			</div>
		</motion.div>
	)
}
