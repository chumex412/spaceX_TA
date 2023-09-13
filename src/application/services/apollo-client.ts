import { InMemoryCache, ApolloClient, gql } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://spacex-production.up.railway.app/',
	cache: new InMemoryCache()
});

export const GET_COMPANY_DETAILS = gql`
	query ExampleQuery {
		company {
			ceo
			name
			summary
			cto
		}
	}
`;
