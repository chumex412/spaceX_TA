import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import { AuthContextProvider } from './application/controllers/useAuthContext.tsx';
import { client } from './application/services/apollo-client.ts';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</ApolloProvider>
	</React.StrictMode>
);
