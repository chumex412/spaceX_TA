import { Suspense } from 'react';
import router from './pages';
import { RouterProvider } from 'react-router-dom';
// Supports weights 200-800
import '@fontsource-variable/manrope';
import { NotifyContainer, SpinnerLoader } from './components/ui';

function App() {
	return (
		<>
			<Suspense fallback={<SpinnerLoader />}>{<RouterProvider router={router()} />}</Suspense>
			<NotifyContainer />
		</>
	);
}

export default App;
