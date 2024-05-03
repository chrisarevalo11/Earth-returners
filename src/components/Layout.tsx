import { ReactNode } from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='customGrid h-full'>
			<Topbar />
			<div className='bg-[#F1F1F1] overflow-auto'>{children}</div>
			<Navbar />
		</div>
	)
}
