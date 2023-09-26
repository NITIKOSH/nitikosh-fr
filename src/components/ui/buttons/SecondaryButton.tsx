import React from 'react'

type x = {
	children: any
	onClick: any
	classes: any
	props: any
}

const SecondaryButton: React.FC<x> = ({
	children,
	onClick,
	classes,
	...props
}) => {
	return (
		<div
			className={` h-full w-full flex items-center justify-center cursor-pointer text-primary bg-white stroke-primary border border-primary ${classes}`}
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

export default SecondaryButton
