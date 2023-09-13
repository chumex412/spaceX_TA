import LoginForm from '../components/module/login/LoginForm';
import OperationsDetails from '../components/module/login/OperationsDetails';

const Login = () => {
	return (
		<section className="flex h-screen">
			<OperationsDetails />
			<LoginForm />
		</section>
	);
};

export default Login;
