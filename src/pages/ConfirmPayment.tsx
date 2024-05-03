import BackArrow from '@/components/icons/BackArrow'
import Location2 from '@/components/icons/Location2'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ConfirmPayment() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col items-start py-6 gap-[10px]'
		>
			<div className='flex items-center gap-5 mb-5 px-10'>
				<Link to='/deliver'>
					<BackArrow />
				</Link>
				<h2 className='text-3xl text-lightGreen'>Confirma tu compra</h2>
			</div>

			<section
				className='w-full flex flex-col gap-16 p-10'
				style={{
					background: 'url(/images/receipt.png) no-repeat center center',
					backgroundSize: '120% 100%'
				}}
			>
				<div className='w-full flex justify-between items-center font-bold text-white'>
					<p>Gafas Medellin (x2)</p>
					<p>$360.000</p>
				</div>
				<div className='w-full flex justify-between items-center font-bold text-white'>
					<p>Envío</p>
					<p>$10.000</p>
				</div>
				<div className='w-full flex justify-between items-center font-bold text-white'>
					<p>Total</p>
					<p>$370.000</p>
				</div>
				<div className='w-full flex text-center justify-center items-center font-bold gap-5 text-white mb-16'>
					<Location2 />
					Carrera 12 #45-34 Bogotá D.C.
				</div>
			</section>

			<Link
				to={'/payment-method'}
				className='button w-[80%] mx-auto mt-8 shadow-xl text-center'
			>
				Ir a pagar
			</Link>
		</motion.div>
	)
}
