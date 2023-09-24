import React from 'react'

const SecondaryButton = ({ children, onClick, classes, ...props }) => {
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
