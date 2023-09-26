import React from 'react'
import PrimaryButton from './ui/buttons/PrimaryButton'
import SecondaryButton from './ui/buttons/SecondaryButton'
import { Dispatch, SetStateAction } from 'react'
import Step1 from './Forms/Step1'
import Step3 from './Forms/Step3'
import Step2 from './Forms/Step2'
import Step0 from './Forms/Step0'
import Nav from './Forms/Nav'
import { useForm } from 'react-hook-form'

type RegisterCaseProps = {
	setOpen: Dispatch<SetStateAction<boolean>>,
}
const RegisterCase: React.FC<RegisterCaseProps> = ({ setOpen }) => {
	const [steps, setSteps] = React.useState(0)
	const [cases, setCases] = React.useState<String>('')
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm()

	const handleBack = () => {
		if (steps === 0) return
		setSteps(steps - 1)
	}

	const handleNext = () => {
		if (steps === 3) return
		setSteps(steps + 1)
	}

	const onSubmit = (data: any) => {
		console.log(data)
	}

	const FormReturn = (steps: any) => {
		// console.log(steps)
		switch (parseInt(steps.steps)) {
			case 0:
				return (
					<Step0
						setCase={setCases}
						register={register}
						watch={watch}
					/>
				)
			case 1:
				return <Step1 register={register} watch={watch} />
			case 2:
				return <Step2 register={register} watch={watch} />
			case 3:
				return <Step3 register={register} watch={watch} />
			default:
				return (
					<Step0
						setCase={setCases}
						register={register}
						watch={watch}
					/>
				)
		}
	}

	return (
		<div className='absolute top-20 h-[calc(100vh-80px)] w-full z-20 flex items-center justify-center bg-[#211D3D80]'>
			<div className='h-5/6 w-4/5 shadow-xl rounded-xl bg-white overflow-hidden flex flex-col'>
				<div
					className='h-16 w-full flex justify-between items-center p-2 px-4 bg-purple text-white stroke-white cursor-pointer'
					onClick={() => setOpen(false)}
				>
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
				{steps > 0 && <Nav />}

				<div className='h-full w-full'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='h-full w-full'
					>
						<FormReturn steps={steps} />
						<button
							className='hidden'
							id='submitform'
							type='submit'
						></button>
					</form>
				</div>
				<div className='h-20 w-full border-t-[1px] flex gap-4 items-center justify-end p-4'>
					<div className='h-full w-24'>
						<SecondaryButton
							onClick={() => {
								handleBack()
							}}
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
						{steps < 3 && (
							<PrimaryButton
								onClick={() => {
									handleNext()
								}}
								classes={' gap-2 rounded-sm'}
								type={steps === 3 ? 'submit' : 'button'}
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
						)}
						{steps === 3 && (
							<PrimaryButton
								classes={'gap-2 rounded-sm'}
								type='submit'
								onClick={() => {
									document
										.getElementById('submitform')
										?.click()
								}}
							>
								Submit{' '}
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
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterCase
