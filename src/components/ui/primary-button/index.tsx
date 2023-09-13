import { ComponentPropsWithoutRef } from 'react';
import { ButtonPropTypes, GenericElementPropsTypes } from '../../../application/domain/entities/ui';

const PrimaryButton = ({
	value,
	customClass,
	...otherProps
}: GenericElementPropsTypes<ButtonPropTypes, ComponentPropsWithoutRef<'button'>>) => {
	return (
		<button className={`px-2 py-5 text-base text-white ${customClass}`} {...otherProps}>
			{value}
		</button>
	);
};

export default PrimaryButton;
