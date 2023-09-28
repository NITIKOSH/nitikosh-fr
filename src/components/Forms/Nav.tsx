import React from 'react'

type x = {
	steps: any
}
const Nav: React.FC<x> = ({ steps }) => {
	return (
		<div className=' h-20 w-full border-b-[1px] border-[#211D3D80]'>
			<div className='flex flex-row h-full'>
				<div
					className={`h-full justify-center items-center w-1/4 flex flex-row ${
						steps === 1 && 'border-b-2 border-primary bg-[#F2F0FF]'
					}`}
				>
					<div className='py-3 pl-5'>
						<div
							className={`w-6 h-6 border-2 p-[1px]  border-purple/50 ${
								steps > 1 && 'border-purple'
							} rounded-full `}
						>
							{steps > 1 && (
								<div className='bg-purple rounded-full h-full w-full flex items-center  justify-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='white'
										className='w-3 h-3'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4.5 12.75l6 6 9-13.5'
										/>
									</svg>
								</div>
							)}
						</div>
					</div>
					<div className='py-3 pl-3 pr-5'>Case Information</div>
				</div>
				<div
					className={`h-full justify-center  w-1/4 flex flex-row ${
						steps === 2 && 'border-b-2 border-primary bg-[#F2F0FF]'
					}`}
				>
					<div className='py-3 pl-5'>
						<div
							className={`w-6 h-6 border-2 p-[1px]  border-purple/50 ${
								steps > 2 && 'border-purple'
							} rounded-full `}
						>
							{steps > 2 && (
								<div className='bg-purple rounded-full h-full w-full flex items-center  justify-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='white'
										className='w-3 h-3'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4.5 12.75l6 6 9-13.5'
										/>
									</svg>
								</div>
							)}
						</div>
					</div>
					<div className='py-3 pl-3 pr-5'>Case Documentation</div>
				</div>
				<div
					className={`h-full justify-center  w-1/4 flex flex-row ${
						steps === 3 && 'border-b-2 border-primary bg-[#F2F0FF]'
					}`}
				>
					<div className='py-3 pl-5'>
						<div
							className={`w-6 h-6 border-2 p-[1px]  border-purple/50 ${
								steps > 3 && 'border-purple'
							} rounded-full `}
						>
							{steps > 3 && (
								<div className='bg-purple rounded-full h-full w-full flex items-center  justify-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='white'
										className='w-3 h-3'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4.5 12.75l6 6 9-13.5'
										/>
									</svg>
								</div>
							)}
						</div>
					</div>
					<div className='py-3 pl-3 pr-5'>Case Details</div>
				</div>
			</div>
			<div className='hidden'></div>
		</div>
	)
}

export default Nav
