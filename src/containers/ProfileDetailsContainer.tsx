import { useQuery } from '@apollo/client';
import { Details } from '../components/module/profile';
import { GET_COMPANY_DETAILS } from '../application/services/apollo-client';
import { CompanyDataType } from '../application/domain/entities/profile';
import { SpinnerLoader } from '../components/ui';

const ProfileDetailsContainer = () => {
	const { loading, error, data } = useQuery<CompanyDataType>(GET_COMPANY_DETAILS);

	if (loading) {
		return <SpinnerLoader />;
	}

	if (error) throw new Error(error.message);

	if (data) {
		const initials = data?.company?.name?.split(' ') as string[];

		const first: string = initials[0]?.charAt(0) || '';
		const second: string = initials[1]?.charAt(0) || '';

		return (
			<Details company={data.company.name} ceo={data.company.ceo} cto={data.company.cto} initials={first + second} />
		);
	}

	return null;
};

export default ProfileDetailsContainer;
