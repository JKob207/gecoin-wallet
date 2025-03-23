'use client';

import { Button } from '@mui/material';
import { ReactNode } from 'react';

const PrimaryButton = ({
	children,
	onClick,
	className,
	disabled = false,
	size = 'medium',
}: Props) => {
	return (
		<Button
			variant='contained'
			size={size}
			disabled={disabled}
			onClick={onClick}
			color='primary'
			className={className}
		>
			{children}
		</Button>
	);
};

type Props = {
    children: ReactNode,
    onClick: () => void,
    className?: string,
    disabled?: boolean,
    size?: 'small'|'medium'|'large',
}

export default PrimaryButton;
