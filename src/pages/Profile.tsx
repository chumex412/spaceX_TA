import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../application/controllers/useAuthContext';
import { Logo } from '../assets';
import { ProfileDetailsContainer } from '../containers';
import { Notification } from '../components/module/profile';

const Profile = () => {
	const { authState } = useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!authState.email) {
			navigate('/login');
		}
	}, [authState.email, navigate]);

	return (
		<>
			<nav className="border-b border-[#DCE2EA]">
				<header className="container py-2">
					<Logo />
				</header>
			</nav>
			<main className="container flex flex-col gap-10 pb-9 pt-4 lg:h-[85vh] lg:flex-row">
				<ProfileDetailsContainer />
				<Notification />
			</main>
		</>
	);
};

export default Profile;
