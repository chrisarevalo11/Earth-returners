export default function User({ className }: { className?: string }) {
	return (
		<svg
			width='25'
			height='25'
			className={className}
			viewBox='0 0 25 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.625 8.375C9.625 9.2701 9.98058 10.1285 10.6135 10.7615C11.2465 11.3944 12.1049 11.75 13 11.75C13.8951 11.75 14.7535 11.3944 15.3865 10.7615C16.0194 10.1285 16.375 9.2701 16.375 8.375C16.375 7.4799 16.0194 6.6215 15.3865 5.9885C14.7535 5.3556 13.8951 5 13 5C12.1049 5 11.2465 5.3556 10.6135 5.9885C9.98058 6.6215 9.625 7.4799 9.625 8.375Z'
				stroke='#4A9582'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M19 18.5C18.8046 17.0472 18.0888 15.7146 16.9854 14.7497C15.882 13.7847 14.4659 13.2528 13 13.2528C11.5341 13.2528 10.1181 13.7847 9.01462 14.7497C7.91118 15.7146 7.19535 17.0472 7 18.5'
				stroke='#4A9582'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<circle
				cx='12.5'
				cy='12.5'
				r='11.75'
				stroke='#4A9582'
				stroke-width='1.5'
			/>
		</svg>
	)
}
