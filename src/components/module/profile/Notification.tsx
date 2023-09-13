import { celebrationDetails } from '../../../application/data';
import { TimerIcon } from '../../../assets';
import Celebration from './Celebrations';

const Notification = () => {
	return (
		<section className="flex h-full basis-1/3 items-center rounded-lg bg-gray-50 px-6 py-4">
			<section>
				<div className="mb-14 inline-flex items-center gap-x-1 rounded-3xl bg-red-100 px-4 py-[6px]">
					<TimerIcon /> <strong className="text-sm font-medium text-red-500">Coming soon</strong>
				</div>
				<section className="mb-6 flex flex-col gap-y-4 bg-white px-6 py-5">
					{celebrationDetails.map((celebration) => {
						const { smiley, Frame } = celebration;
						return <Celebration smiley={smiley} key={smiley} Frame={Frame} />;
					})}
				</section>
				<section className="text-center">
					<h5 className="text-md mb-2 font-semibold leading-3 text-gray-700">📫 Notifications</h5>
					<p className="text-base font-medium leading-5 text-gray-300">
						Receive notifcations about your rider performance, efficiency reviews and a lot more
					</p>
				</section>
			</section>
		</section>
	);
};

export default Notification;
