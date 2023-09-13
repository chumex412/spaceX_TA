export type GenericElementPropsTypes<S, T> = S & T;

export type InputPropTypes<N> = {
	label: string;
	icon?: () => N;
	onclick?: () => void;
};

export type ButtonPropTypes = {
	value: string;
	customClass?: string;
};

export type OperationPropTypes<N> = {
	title: string;
	info: string;
	Icon: N;
	highlighted: boolean;
	onhover: () => void;
	onleave: () => void;
};
