import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Media() {
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
				<h2 className='text-3xl text-lightGreen'>Contenidos</h2>
			</div>

			<Link to={'/marce-video'} className='mt-10'>
				<div className='w-full bg-white rounded-t-xl flex flex-col'>
					<h2 className='font-inter font-bold text-xl text-secondaryGreen text-center my-5'>
						¡Alista tu material como todo un{' '}
						<span className='text-2xl'>Returner Master</span>!
					</h2>
					<img src='/images/marce.png' alt='marce' className='w-full' />
				</div>
			</Link>
			<Link to={'/marce-video'} className='mt-10'>
				<div className='w-full bg-white rounded-t-xl flex flex-col'>
					<h2 className='font-inter font-bold text-xl text-secondaryGreen text-center my-5'>
						¡Alista tu material como todo un{' '}
						<span className='text-2xl'>Returner Master</span>!
					</h2>
					<img src='/images/marce.png' alt='marce' className='w-full' />
				</div>
			</Link>
		</motion.div>
	)
}
