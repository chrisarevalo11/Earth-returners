import BackArrow from '@/components/icons/BackArrow'
import Trash from '@/components/icons/Trash'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ShoppingCart() {
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
				<h2 className='text-3xl text-lightGreen'>Mi carrito</h2>
			</div>
			<div className='w-full bg-white p-3 rounded-2xl flex gap-2 mb-5 shadow-lg'>
				<img src='/images/glasses.png' alt='glasses' width={120} />
				<div className='text-secondaryGreen py-2  flex flex-col justify-between text-sm'>
					<p>Gafas Medellín formuladas</p>
					<p className='font-bold'>$180.000 COP o $4.000 PUNTOS</p>
				</div>
				<button className='self-start p-2'>
					<Trash />
				</button>
			</div>
			<div className='w-full bg-white p-3 rounded-2xl flex gap-2 mb-5 shadow-lg'>
				<img src='/images/glasses.png' alt='glasses' width={120} />
				<div className='text-secondaryGreen py-2  flex flex-col justify-between text-sm'>
					<p>Gafas Medellín formuladas</p>
					<p className='font-bold'>$180.000 COP o $4.000 PUNTOS</p>
				</div>
				<button className='self-start p-2'>
					<Trash />
				</button>
			</div>
			<div className='text-lightGreen flex justify-between items-center px-5 py-3 rounded-full border w-full'>
				<p>Subtotal</p>
				<p className='font-bold max-w-[150px] text-right'>
					$360.000 COP u $8.000 PUNTOS
				</p>
			</div>
			<Link
				to={'/deliver'}
				className='button w-[90%] mx-auto mt-8 shadow-xl text-center'
			>
				Comprar
			</Link>
		</motion.div>
	)
}
