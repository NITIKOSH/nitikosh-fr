// Date: 09/04/21
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
	caseDesc: string
	addInfo: string

}
import Nav from './Nav'

function Step3() {
	const { register, handleSubmit } = useForm<IFormInput>()
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
	return (
		<div>
			<Nav />
			<form onChange={handleSubmit(onSubmit)}>
				<textarea
					rows={4} // Number of rows
					cols={50}
					{...register('caseDesc')}
					placeholder='Enter Case Description'
					className='outline-none resize-none border rounded '
				/>

				<textarea
					{...register('addInfo')}
					placeholder='Additional Information'
					// type='number'
					rows={4} // Number of rows
					cols={50}
					className='outline-none resize-none border rounded '
				/>
			</form>
		</div>
	)
}

export default Step3
