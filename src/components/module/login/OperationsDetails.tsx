import { useCallback, useState } from 'react';
import { operationDetails } from '../../../application/data';
import { Logo } from '../../../assets';
import { OperationsInfo } from '../../ui';

const OperationsDetails = () => {
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);

	const hoverHandler = useCallback(
		(index: number) => {
			setHoverIndex(index);
		},
		[setHoverIndex]
	);

	const onLeaveHandler = useCallback(() => {
		setHoverIndex(null);
	}, [setHoverIndex]);

	return (
		<section className="hidden h-full basis-5/12 px-4 pt-11 lg:block">
			<div className="mx-auto max-w-[482px]">
				<Logo className="mb-4" />
				<header>
					<h1 className="mb-2 text-lg font-bold leading-3 text-gray-700">Hi there, see what’s new</h1>
					<p className="text-base leading-5 text-gray-300">
						Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient
					</p>
				</header>
				<section className="flex flex-col gap-y-12 py-16">
					{operationDetails.map((operation, index: number) => {
						const { title, info, Icon } = operation;
						return (
							<OperationsInfo
								title={title}
								key={title}
								info={info}
								Icon={Icon}
								highlighted={hoverIndex === index}
								onhover={() => hoverHandler(index)}
								onleave={() => onLeaveHandler()}
							/>
						);
					})}
				</section>
			</div>
		</section>
	);
};

export default OperationsDetails;
