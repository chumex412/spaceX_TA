import { ComponentPropsWithoutRef, ReactNode, memo } from 'react';
import { InputPropTypes, GenericElementPropsTypes } from '../../../application/domain/entities/ui';

const Input = memo(
	({
		label,
		icon,
		onclick = () => {},
		...otherProps
	}: GenericElementPropsTypes<InputPropTypes<ReactNode>, ComponentPropsWithoutRef<'input'>>) => {
		return (
			<section>
				<label className="text-base font-medium leading-5 text-gray-700">{label}</label>
				<div className="relative">
					<input className="w-full rounded-lg border border-gray-700 p-5 text-base leading-5" {...otherProps} />
					{icon ? (
						<button type="button" className="absolute right-5 top-1/2 -translate-y-1/2" onClick={onclick}>
							{icon()}
						</button>
					) : null}
				</div>
			</section>
		);
	}
);

export default Input;
