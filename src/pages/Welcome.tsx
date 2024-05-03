import Logo from '@/components/Logo'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
	const navigate = useNavigate()

	const handleLogin = () => {
		navigate('/city')
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='h-full flex flex-col justify-center items-center p-10 gap-[60px]'
		>
			<header className='space-y-5'>
				<h1 className='text-4xl'>¡Hola, Returner!</h1>
				<Logo className='size-[100px] mx-auto' />
			</header>
			<div className='space-y-5 w-full'>
				<label className='flex flex-col w-full '>
					<span className='ml-[22px] mb-2 text-green font-semibold'>
						Correo o número de teléfono
					</span>
					<input
						type='text'
						placeholder='Escribe aquí'
						className='placeholder:opacity-50'
					/>
				</label>
				<label className='flex flex-col w-full '>
					<span className='ml-[22px] mb-2 text-green font-semibold'>
						Contraseña
					</span>
					<input
						type='password'
						placeholder='Escribe aquí'
						className='placeholder:opacity-50'
					/>
				</label>
				<label className='flex flex-col w-full '>
					<span className='ml-[22px] mb-2 text-green font-semibold'>
						Confirmar contraseña
					</span>
					<input
						type='password'
						placeholder='Escribe aquí'
						className='placeholder:opacity-50'
					/>
				</label>
				<label className='flex flex-col w-full '>
					<span className='ml-[22px] mb-2 text-green font-semibold'>
						Nombre de usuario
					</span>
					<input
						type='text'
						placeholder='Escribe aquí'
						className='placeholder:opacity-50'
					/>
				</label>
			</div>
			<button className='button' onClick={handleLogin}>
				Crear cuenta
			</button>
		</motion.div>
	)
}
