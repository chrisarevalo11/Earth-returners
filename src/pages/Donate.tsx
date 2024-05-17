import BackArrow from '@/components/icons/BackArrow'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Donate() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 px-10 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5'>
				<Link to='/donations'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen line-clamp-2'>Donar</h2>
			</div>

			<section className='w-full flex flex-col mt-5 gap-7'>
				<label className='w-full flex flex-col gap-2'>
					<span className='text-secondaryGreen font-bold ml-5'>Banco</span>
					<input type='text' placeholder='Escribe aquí...' />
				</label>
				<label className='w-full flex flex-col gap-2'>
					<span className='text-secondaryGreen font-bold ml-5'>
						Nombre del titular
					</span>
					<input type='text' placeholder='Escribe aquí...' />
				</label>
				<label className='w-full flex flex-col gap-2'>
					<span className='text-secondaryGreen font-bold ml-5'>
						Apellido del titular
					</span>
					<input type='text' placeholder='Escribe aquí...' />
				</label>

				<label className='w-full flex flex-col gap-2'>
					<span className='text-secondaryGreen font-bold ml-5'>Correo</span>
					<input type='text' placeholder='Escribe aquí...' />
				</label>
			</section>

			<Link
				to={'/home'}
				className='button w-[80%] mx-auto mt-10 shadow-xl text-center'
			>
				Ir al banco
			</Link>
		</motion.div>
	)
}
