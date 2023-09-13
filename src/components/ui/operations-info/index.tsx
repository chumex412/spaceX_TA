import { FC, SVGProps, memo } from 'react';
import { OperationPropTypes } from '../../../application/domain/entities/ui';
import { TickIcon } from '../../../assets';
import './style.css';

const OperationsInfo = memo(
	({
		title,
		info,
		Icon,
		highlighted,
		onhover,
		onleave
	}: OperationPropTypes<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>) => {
		return (
			<article
				className={`operations cursor-pointer rounded-lg px-4 py-2.5 ${highlighted ? 'bg-[#F8F8F6]' : ''}`}
				onMouseEnter={onhover}
				onMouseLeave={onleave}
			>
				<Icon />
				<section>
					<h4 className={`mb-1 text-base font-medium leading-5 ${highlighted ? 'text-gray-700' : 'text-gray-200'}`}>
						{title}
					</h4>
					<p
						className={`text-sm font-normal leading-5 text-gray-100 ${highlighted ? 'text-gray-700' : 'text-gray-200'}`}
					>
						{info}
					</p>
				</section>
				<section>{highlighted ? <TickIcon /> : null}</section>
			</article>
		);
	}
);

export default OperationsInfo;
