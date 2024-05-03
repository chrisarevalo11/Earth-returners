export default function Logo({
	className
}: {
	className?: string
}): JSX.Element {
	return <img src='/images/logo.png' alt='logo' className={className} />
}
