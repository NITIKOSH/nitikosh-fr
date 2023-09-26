import React from 'react'

const PrimaryButton = ({ children, classes, ...props }) => {
	return (
		<div
			className={` h-full w-full flex items-center justify-center cursor-pointer text-white bg-gradient-to-r stroke-white from-primary-blue-dark to-primary-blue-light ${classes}`}
			onClick={() => {
				if (!props.onClick) return
				props.onClick()
			}}
			{...props}
		>
			{children}
		</div>
	)
}

export default PrimaryButton
