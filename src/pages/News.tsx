import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function News() {
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
				<h2 className='text-3xl text-lightGreen'>Noticias</h2>
			</div>

			<Link to='/principal-news'>
				<div className='w-full bg-white p-3 rounded-2xl flex gap-5 mb-5 items-center shadow-lg'>
					<img src='/images/news1.png' alt='glasses' width={120} />
					<p className='text-green font-bold'>
						Los adinerados y turbios 'zares' del reciclajeque están en la
						miradel Gobierno...
					</p>
				</div>
			</Link>

			<Link to='/principal-news'>
				<div className='w-full bg-white p-3 rounded-2xl flex gap-5 mb-5 items-center shadow-lg'>
					<img src='/images/news2.png' alt='glasses' width={120} />
					<p className='text-green font-bold'>
						Las Rodríguez, la familia liderada por mujeresque lleva cuatro
						generaciones reciclando...
					</p>
				</div>
			</Link>

			<Link to='/principal-news'>
				<div className='w-full bg-white p-3 rounded-2xl flex gap-5 mb-5 items-center shadow-lg'>
					<img src='/images/news3.png' alt='glasses' width={120} />
					<p className='text-green font-bold'>
						Participe en las jornadas de 'reciclatón' en Bogotá del 15 al 17 de
						agosto
					</p>
				</div>
			</Link>
		</motion.div>
	)
}
