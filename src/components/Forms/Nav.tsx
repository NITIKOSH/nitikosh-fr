import React from 'react'

type x = {
	steps: any
}
const Nav: React.FC<x> = ({ steps }) => {
	return <div className=' h-20 w-full border-b-[1px] border-[#211D3D80]'>
		<div className='flex flex-row'>
			<div className='p-5 w-1/4 flex flex-row'>
				<div className='py-3 pl-5'>
					<div className='w-6 h-6 border-2 border-purple rounded-full '></div>
				</div>
				<div className='py-3 pl-3 pr-5'>Case Information</div>
			</div>
			<div className='p-5 w-1/4 flex flex-row'>
				<div className='py-3 pl-5'>
					<div className='w-6 h-6 border-2 border-purple rounded-full '></div>
				</div>
				<div className='py-3 pl-3 pr-5'>Case Documentation</div>
			</div>
			<div className='p-5 w-1/4 flex flex-row'>
				<div className='py-3 pl-5'>
					<div className='w-6 h-6 border-2 border-purple rounded-full '></div>
				</div>
				<div className='py-3 pl-3 pr-5'>Case Details</div>
			</div>
			<div className='p-5 w-1/4 flex flex-row'>
				<div className='py-3 pl-5'>
					<div className='w-6 h-6 border-2 border-purple rounded-full '></div>
				</div>
				<div className='py-3 pl-3 pr-5'>Review & Submit</div>
			</div>
			
		</div>
		<div className='hidden'></div>
		
		
	</div>
}

export default Nav
