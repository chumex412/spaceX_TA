import { FC, SVGProps } from 'react';
import { OperationPropTypes } from '../../../application/domain/entities/ui';
import { TickIcon } from '../../../assets';
import './style.css';

const OperationsInfo = ({
	title,
	info,
	Icon,
	highlighted
}: OperationPropTypes<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>) => {
	return (
		<article className="operations">
			<Icon />
			<section>
				<h4 className="mb-1 text-base font-medium leading-5 text-gray-200">{title}</h4>
				<p className="text-sm font-normal leading-5 text-gray-100">{info}</p>
			</section>
			<section>{highlighted ? <TickIcon /> : null}</section>
		</article>
	);
};

export default OperationsInfo;
