import { Navbar, Hero } from '@/components'
import Dashboard from '@/components/Dashboard'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='h-screen w-screen'>
			<Navbar />
			<Hero />
		</div>
	)
}
