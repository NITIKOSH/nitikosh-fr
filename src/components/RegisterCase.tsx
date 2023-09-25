import React from 'react'
import PrimaryButton from './ui/Buttons/PrimaryButton'
import SecondaryButton from './ui/Buttons/SecondaryButton'
import Step1 from './Forms/Step1'
import Step3 from './Forms/Step3'
import Step2 from './Forms/Step2'
import Step0 from './Forms/Step0'

const RegisterCase = () => {
	const [steps, setSteps] = React.useState(0)

	return (
		<div className='absolute top-20 h-[calc(100vh-80px)] w-full z-20 flex items-center justify-center bg-[#211D3D80]'>
			<div className='h-5/6 w-4/5 shadow-xl rounded-xl bg-white overflow-hidden flex flex-col'>
				<div className='h-16 w-full flex justify-between items-center p-2 px-4 bg-purple text-white stroke-white'>
					<svg
						width='28'
						height='28'
						viewBox='0 0 28 28'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M17.5 4.375H23.625V10.5M23.0655 4.93281L16.625 11.375M10.5 23.625H4.375V17.5M4.93445 23.0672L11.375 16.625'
							stroke='white'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<div className=''>
						{steps === 0 ? 'Choose an option' : 'Upload a new case'}
					</div>

					<svg
						width='28'
						height='28'
						viewBox='0 0 28 28'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M23.0657 4.9328L13.5 14.5L4.93457 23.0672'
							stroke='white'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M23.0674 23.0655L13.5002 13.4999L4.93301 4.93445'
							stroke='white'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<div className='h-full w-full bg-gray-100'>
					<Step1/>
				</div>
				<div className='h-20 w-full border-t-[1px] flex gap-4 items-center justify-end p-4'>
					<div className='h-full w-24'>
						<SecondaryButton
							onClick={() => {}}
							classes={' gap-2 rounded-sm'}
						>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g opacity='0.6'>
									<path
										d='M12.8125 15.625L7.1875 10L12.8125 4.375'
										stroke='#211D3D'
										strokeWidth='1.875'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</g>
							</svg>
							Back
						</SecondaryButton>
					</div>
					<div className='h-full w-24'>
						<PrimaryButton
							onClick={() => {}}
							classes={' gap-2 rounded-sm'}
						>
							Next{' '}
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M7.1875 4.375L12.8125 10L7.1875 15.625'
									stroke='white'
									strokeWidth='1.875'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</PrimaryButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterCase
