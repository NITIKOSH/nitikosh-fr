import React from 'react'

type x = {
	children: any
	onClick: any
	classes: any
	props: any
}

const PrimaryButton: React.FC<x> = ({
	children,
	onClick,
	classes,
	...props
}) => {
	return (
		<div
			className={` h-full w-full flex items-center justify-center cursor-pointer text-white bg-gradient-to-r stroke-white from-primary-blue-dark to-primary-blue-light ${classes}`}
			onClick={() => {
				if (!onClick) return
				onClick()
			}}
			{...props}
		>
			{children}
		</div>
	)
}

export default PrimaryButton
