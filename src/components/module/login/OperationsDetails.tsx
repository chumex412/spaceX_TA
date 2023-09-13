import { operationDetails } from '../../../application/data';
import { Logo } from '../../../assets';
import { OperationsInfo } from '../../ui';

const OperationsDetails = () => {
	return (
		<section className="hidden h-full basis-5/12 px-4 pt-11 lg:block">
			<div className="mx-auto max-w-[482px]">
				<Logo className="mb-4" />
				<header>
					<h1 className="mb-2 text-lg font-bold leading-3 text-gray-700">Hi there, see what’s new</h1>
					<p>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
				</header>
				<section className="flex flex-col gap-y-12 py-16">
					{operationDetails.map((operation) => {
						const { title, info, Icon } = operation;
						return <OperationsInfo title={title} key={title} info={info} Icon={Icon} highlighted={false} />;
					})}
				</section>
			</div>
		</section>
	);
};

export default OperationsDetails;
