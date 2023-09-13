import { DetailsPropTypes } from '../../../application/domain/entities/profile';

const Details = ({ ceo, cto, company, initials }: DetailsPropTypes) => {
	return (
		<section className="h-full basis-2/3 rounded-lg border border-[#DDE1E3] px-14 py-10 lg:px-20 xl:px-28 xl:py-14">
			<section className="mb-12 flex items-center gap-x-6">
				<div className="company-initials border-primary text-secondary leading-sm text-md flex items-center justify-center rounded-full border bg-transparent font-medium">
					<strong>{initials}</strong>
					<span></span>
				</div>
				<h2 className="text-md font-semibold leading-3 text-gray-700">{company}</h2>
			</section>
			<section className="mb-6">
				<h3 className="leading-2 mb-1 text-sm font-normal text-gray-200">CEO</h3>
				<p className="text-base font-normal leading-5 text-gray-700">{ceo}</p>
			</section>
			<section>
				<h3 className="leading-2 mb-1 text-sm font-normal text-gray-200">CTO</h3>
				<p className="text-base font-normal leading-5 text-gray-700">{cto}</p>
			</section>
		</section>
	);
};

export default Details;
