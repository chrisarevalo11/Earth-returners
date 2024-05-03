export default function Chevron({ className }: { className?: string }) {
	return (
		<svg
			width='10'
			height='17'
			className={className}
			viewBox='0 0 10 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 1L8.83932 8.14667C8.89022 8.19307 8.93067 8.24813 8.95824 8.30873C8.98581 8.3694 9 8.4344 9 8.5C9 8.5656 8.98581 8.6306 8.95824 8.69127C8.93067 8.75187 8.89022 8.80693 8.83932 8.85333L1 16'
				stroke='#4A9582'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}
