export default function BackArrow({ className }: { className?: string }) {
	return (
		<svg
			width='24'
			height='24'
			className={className}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clip-path='url(#clip0_236_3265)'>
				<path
					d='M23.25 12L0.75 12'
					stroke='#4F9C3C'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M11.25 1.5L0.75 12L11.25 22.5'
					stroke='#4F9C3C'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_236_3265'>
					<rect
						width='24'
						height='24'
						fill='white'
						transform='matrix(-1 0 0 -1 24 24)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
}
