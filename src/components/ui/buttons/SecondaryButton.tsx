import React from 'react'

interface SecondaryButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	classes?: string;
  }

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
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
