// Date: 09/04/21
import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'

import { iIcon } from '@/assets'
import React from 'react'

type RegisterCaseProps = {
	register: any
	watch: any
}

const Step3: React.FC<RegisterCaseProps> = ({ register, watch }) => {
	const [showTooltip, setShowTooltip] = React.useState(false)
	const [showTooltip2, setShowTooltip2] = React.useState(false)
	return (
		<div>
			<div className='w-[80%] mx-auto space-y-4 mt-12'>
				{/* <textarea
					rows={4} // Number of rows
					cols={50}
					{...register('caseDesc')}
					placeholder='Enter Case Description'
					className='outline-none resize-none border rounded '
				/> */}
				{/* ///// */}
				<div className='border border-1 px-8 py-4 w-full mx-auto rounded-xl flex relative'>
					<textarea
						{...register('caseDesc')}
						placeholder='Enter Case Description'
						className='outline-none w-full bg-transparent text-[#211d3d72] font-open-sans font-light resize-none'
						rows={5}
					/>
					
				</div>
				{/* //// */}
				{/* <textarea
					{...register('addInfo')}
					placeholder='Additional Information'
					// type='number'
					rows={4} // Number of rows
					cols={50}
					className='outline-none resize-none border rounded '
				/> */}
				{/* /// */}
				<div className='border border-1 px-8 py-4 w-full mx-auto rounded-xl flex relative'>
					<textarea
						{...register('addInfo')}
						placeholder='Additional Information'
						className='outline-none w-full bg-transparent text-[#211d3d72] font-open-sans font-light resize-none'
						rows={3}
					/>
					
				</div>
				{/* /// */}
			</div>
		</div>
	)
}

export default Step3
