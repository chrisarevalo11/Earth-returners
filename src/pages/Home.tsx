import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='px-8 py-6 flex flex-col'
		>
			<h1 className='text-3xl font-bold text-lightGreen'>Inicio</h1>
			<section className='flex flex-col gap-10 items-center mt-10'>
				<Link to={'/home'} className='h-52 w-[330px]'>
					<div
						style={{
							backgroundImage: 'url(/images/bg-item-home.png)',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat'
						}}
						className='h-52 w-full flex justify-center items-center'
					>
						<p className='w-[60%] p-3 rounded-full text-center font-bold text-2xl font-sen bg-white text-secondaryGreen'>
							Noticias
						</p>
					</div>
				</Link>
				<Link to={'/home'} className='h-52 w-[330px]'>
					<div
						style={{
							backgroundImage: 'url(/images/bg-item-home.png)',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat'
						}}
						className='h-52 w-full flex justify-center items-center'
					>
						<p className='w-[60%] p-3 rounded-full text-center font-bold text-2xl font-sen bg-white text-secondaryGreen'>
							Contenidos
						</p>
					</div>
				</Link>
				<Link to={'/home'} className='h-52 w-[330px]'>
					<div
						style={{
							backgroundImage: 'url(/images/bg-item-home.png)',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat'
						}}
						className='h-52 w-full flex justify-center items-center'
					>
						<p className='w-[60%] p-3 rounded-full text-center font-bold text-2xl font-sen bg-white text-secondaryGreen'>
							Mi planta
						</p>
					</div>
				</Link>
			</section>
		</motion.div>
	)
}
