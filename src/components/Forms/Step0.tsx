import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
	optData: ''
}

const Step0: React.FC = () => {
	const { register, watch } = useForm<IFormInput>()

	// Watch the value of the selected radio button
	const selectedOption = watch('optData')

	// Function to handle the value change
	const handleChange = () => {
		console.log(selectedOption)
	}

	return (
		<div className='w-[90%] my-12 mx-auto font-open-sans'>
			<div className='text-xl  font-medium'>
				Please choose an option to proceed
			</div>
			<form onChange={handleChange} className=' mt-16  justify-center items-center'>
				<label>
					<div className='flex border border-[#211d3d23] px-6 py-4 rounded-xl space-x-4'>
						<input
							type='radio'
							value='new'
							className='scale-[1.5] outline-none'
							{...register('optData')}
						/>
						<div className='flex-col  '>
							<div className='text-[#211D3DCC]  text-lg'>
								Upload a new case
							</div>
							<div className='text-[#211D3DB2] text-sm'>
								Add a new case to your dashboard
							</div>
						</div>
					</div>
				</label>
				<label>
					<div className='flex border border-[#211d3d23] px-6 py-4 rounded-xl space-x-4 mt-8'>
						<input
							type='radio'
							value='existing'
							className='scale-[1.5] outline-none'
							{...register('optData')}
						/>
						<div className='flex-col '>
							<div className='text-[#211D3DCC]  text-lg'>
								Reference a case
							</div>
							<div className='text-[#211D3DB2] text-sm'>
								Add new hearings to already minted case
							</div>
						</div>
					</div>
				</label>
			</form>
		</div>
	)
}

export default Step0
