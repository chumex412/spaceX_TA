import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const Profile = lazy(() => import('./Profile'));

const router = () =>
	createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<Navigate to="/login" replace={true} />} />
				<Route path="login" element={<Login />} />
				<Route path="profile" element={<Profile />} />
			</Route>
		)
	);

export default router;
