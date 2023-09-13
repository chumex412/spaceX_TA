import { LoginFormContainer } from '../../../containers';

const LoginForm = () => {
	return (
		<section className="bg-primary flex h-auto w-full px-4 lg:basis-7/12">
			<section className="mx-auto my-auto w-full max-w-[630px] rounded-lg bg-white px-8 py-5 shadow-lg lg:px-16 lg:py-10">
				<section className="mb-12">
					<h2 className="text-md font-semibold leading-3 text-gray-700">Login to your dashboard</h2>
					<p className="text-base leading-5 text-gray-200">Provide details to login to your account </p>
				</section>
				<LoginFormContainer />
			</section>
		</section>
	);
};

export default LoginForm;
