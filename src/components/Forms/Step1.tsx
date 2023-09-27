import { useForm, SubmitHandler } from 'react-hook-form'
import { iIcon } from '@/assets'
import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
type RegisterCaseProps = {
	register: any
	watch: any
}

const Step1: React.FC<RegisterCaseProps> = ({ register, watch }) => {
	return (
		<div className=''>
			<div className='flex flex-col h-full w-[80%] mx-auto  justify-center items-center space-y-8 mt-20'>
				<div className='border border-1 px-8 py-4 w-full mx-auto rounded-xl flex relative'>
					<input
						{...register('caseId')}
						placeholder='Enter Case Id'
						type='text'
						id='caseId'
						className='outline-none w-full bg-transparent text-[#211d3d72] font-open-sans font-light'
					/>
				</div>
				<div className='border border-1 px-8 py-4 w-full mx-auto rounded-xl flex relative'>
					<input
						{...register('caseName')}
						placeholder='Enter Case Name'
						type='text'
						id='caseName'
						className='outline-none w-full bg-transparent text-[#211d3d72] font-open-sans font-light'
					/>
				</div>
				<div className=' flex flex-row w-full space-x-6'>
					<div className='border border-1 px-8 py-4 basis-2/5  rounded-xl flex relative'>
						<input
							{...register('caseNumber')}
							placeholder='Enter Case Number'
							type='text'
							id='caseNumber'
							className='outline-none w-full bg-transparent text-[#211d3d72] font-open-sans font-light'
						/>
					</div>

					<div className='basis-3/5  text-[#211d3d72] shadow-lg rounded-xl  outline-none px-4'>
						<select
							{...register('caseType')}
							className='outline-none w-full h-full rounded-xl'
						>
							<option value='' disabled>
								Select Case Type
							</option>
							<option value='civil'>Civil</option>
							<option value='criminal'>Criminal</option>
							<option value='other'>Others</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Step1
