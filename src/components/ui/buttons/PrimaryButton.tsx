import React from 'react'

interface PrimaryButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	classes?: string;
	type?: 'button' | 'submit' | 'reset';
  }

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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
