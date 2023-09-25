import ReactDOM from 'react-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
	evidVideo: string
	evidImage: string
    docName : string
	docType: string
}
import Nav from './Nav'

function Step2() {
	const { register, handleSubmit } = useForm<IFormInput>()
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
	return (
		<div>
			<Nav />
			<form onChange={handleSubmit(onSubmit)}>
				<select {...register('docType')} defaultValue=''>
					<option value='' disabled>
						Select Case Type...
					</option>
					<option value='civil'>Civil</option>
					<option value='criminal'>Criminal</option>
					<option value='other'>Others</option>
				</select>
				<input
					{...register('docName')}
					placeholder='Enter Document Name'
				/>
				<input
					{...register('evidVideo')}
					placeholder='Upload evidence Video'
				/>

				<input
					{...register('evidImage')}
					placeholder='Upload evidence Image'
					// type='number'
				/>
			</form>
		</div>
	)
}

export default Step2
